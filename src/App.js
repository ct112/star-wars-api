import React, {useEffect, useState, useRef} from 'react'
import './App.css'
import Table from "./Components/Table"
import SearchField from "./Components/SearchField"
import axios from "axios"
import PropTypes from "prop-types"

function App(){
  const [characters,setCharacters] = useState([])
  let [page, setPage] = useState(1)
  let [searchName, setSearchName] = useState("")
  // let [keypressCount, setKeypressCount]=useState(0)
  // let charactersRef = useRef(null)

  useEffect(() => {
        fetchCharactersPage()
            .then(res => fetchCharacterHomeworld(res))
            .then(res => fetchSpecies(res))
            .then(res => setCharacters(res))
            .catch((error)=>console.log(error))

  }, [page])

    async function fetchCharactersPage() {
        const response = await axios(`https://swapi.dev/api/people?page=${page}`)
        return response.data.results
    }

    async function fetchCharacterHomeworld(charactersPage){
        for (let individualCharacter of charactersPage) {
            let characterHomeworld = await axios(individualCharacter.homeworld)
            individualCharacter.homeworld = characterHomeworld.data.name
        }
        return charactersPage
    }

    async function fetchSpecies(charactersPage){
         for (let individualCharacter of charactersPage){
          if (individualCharacter.species.length !== 0) {
              let characterSpecies = await axios(individualCharacter.species[0])
              individualCharacter.species = characterSpecies.data.name
          } else {
              individualCharacter.species.push("human")
          }
         }
         return charactersPage
    }

    async function getCharactersByName(){
        let response = await axios(`https://swapi.dev/api/people?search=${searchName}`)
        return response.data.results
    }

    function handleChange(event){
        let {value} = event.target
        setSearchName(value)
        if (searchName.length >= 3) {
            getCharactersByName()
                .then(res => fetchCharacterHomeworld(res))
                .then(res => fetchSpecies(res))
                .then(res => setCharacters(res))
                .catch((error) => console.log(error))
        }
    }

    function handleKeypress(event){
        // let keypress = event.which
        // if (keypress !== 8){
        //     setKeypressCount(prevState => prevState + 1 )
        // } else {
        //     setKeypressCount(prevState => prevState - 1)
        // }

      // if (searchName.length === 1 && keypress === 8){setCharacters(charactersRef.current)}
    }


  function handleClick(number){
      setPage(number)

  }

  return(
      <div>
          <SearchField handleChange={handleChange} handleKeypress={handleKeypress}/>
          <Table data={characters} handleClick={handleClick}/>
      </div>
  )
}

App.propTypes = {
    characters: PropTypes.array.isRequired
}

export default App
