import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Table from "./Components/Table";
import SearchField from "./Components/SearchField";
import axios from "axios";
import Header from "./Components/Header";
import Pagination from "./Components/Pagination";
import Loading from "./Components/Loading"

function App() {
  const [characters, setCharacters] = useState([]);
  let [page, setPage] = useState(1);
  let [searchName, setSearchName] = useState("");
  let [isFetching, setIsFectching] = useState(null)

  useEffect(() => {
    setIsFectching(true)
    fetchCharactersPage()
      .then((res) => fetchCharacterHomeworld(res))
      .then((res) => fetchSpecies(res))
      .then((res) => setCharacters(res))
      .catch((error) => console.log(error));
  }, [page]);

  useEffect(() => {
    if (searchName==="") {
      fetchCharactersPage()
        .then((res) => fetchCharacterHomeworld(res))
        .then((res) => fetchSpecies(res))
        .then((res) => setCharacters(res))
        .catch((error) => console.log(error));
    }
  }, [searchName]);

  async function fetchCharactersPage() {
    const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`)
    const charactersPage = response.data.results
    return charactersPage;
  }

  async function fetchCharacterHomeworld(charactersPage) {
    for (let character of charactersPage) {
      let characterHomeworld = await axios.get(formatURL(character.homeworld));
      character.homeworld = characterHomeworld.data.name;
    }
    return charactersPage;
  }

  async function fetchSpecies(charactersPage) {
    for (let character of charactersPage) {
      if (character.species.length !== 0) {
        let characterSpecies = await axios.get(formatURL(character.species[0]));
        character.species = characterSpecies.data.name;
      } else {
        character.species.push("human");
      }
    }
    return charactersPage;
  }
  function formatURL(url){
    let formattedURL = ["https",url.substr(4)].join("")
    return formattedURL
  }

  async function fetchCharactersByName() {
    let response = await axios(
      `https://swapi.dev/api/people/?search=${searchName}`
    );
    const charactersPage = response.data.results
    return charactersPage
  }

  function handleChange(event) {
    let { value } = event.target;
    setSearchName(value);
    if (searchName.length >= 3) {
      fetchCharactersByName()
        .then((res) => fetchCharacterHomeworld(res))
        .then((res) => fetchSpecies(res))
        .then((res) => setCharacters(res))
        .catch((error) => console.log(error));
    }
  }

  function handleClick(e) {
    const pageNumber = e.target.innerText;
    setPage(pageNumber);
  }

  return (
    <div className="bg">
      <Header />
      <SearchField handleChange={handleChange} />
      <Loading />
      <Table data={characters} />
      <Pagination handleClick={handleClick} />
    </div>
  );
}

export default App;
