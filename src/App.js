import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Table from "./Components/Table";
import SearchField from "./Components/SearchField";
import axios from "axios";
import Header from "./Components/Header";
import Pagination from "./Components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  let [page, setPage] = useState(1);
  let [searchName, setSearchName] = useState("");

  useEffect(() => {
    fetchCharactersPage()
      .then((res) => fetchCharacterHomeworld(res))
      .then((res) => fetchSpecies(res))
      .then((res) => setCharacters(res))
      .catch((error) => console.log(error));
  }, [page]);

  useEffect(() => {
    if (!searchName) {
      fetchCharactersPage()
        .then((res) => fetchCharacterHomeworld(res))
        .then((res) => fetchSpecies(res))
        .then((res) => setCharacters(res))
        .catch((error) => console.log(error));
    }
  }, [searchName]);

  async function fetchCharactersPage() {
    const response = await axios.get(`https://swapi.dev/api/people?page=${page}`)
    return response.data.results;
  }

  async function fetchCharacterHomeworld(charactersPage) {
    for (let individualCharacter of charactersPage) {
      let characterHomeworld = await axios.get(formatURL(individualCharacter.homeworld));
      individualCharacter.homeworld = characterHomeworld.data.name;
    }
    return charactersPage;
  }

  async function fetchSpecies(charactersPage) {
    for (let individualCharacter of charactersPage) {
      if (individualCharacter.species.length !== 0) {
        let characterSpecies = await axios.get(formatURL(individualCharacter.species[0]));
        individualCharacter.species = characterSpecies.data.name;
      } else {
        individualCharacter.species.push("human");
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
      `https://swapi.dev/api/people?search=${searchName}`
    );
    return response.data.results;
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
      <Table data={characters} />
      <Pagination handleClick={handleClick} />
    </div>
  );
}

export default App;
