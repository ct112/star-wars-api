import React, {useEffect, useState} from 'react'
import './App.css'
import Table from "./Components/Table"
import SearchField from "./Components/SearchField"
import axios from "axios"
import PropTypes from "prop-types"

function App(){
  const [characters,setCharacters] = useState([])
  let [page, setPage] = useState(9)

  useEffect(async() => {
    const response = await axios(`https://swapi.dev/api/people?page=${page}`)
      for (let person of response.data.results ) {
          let planetResponse = await axios(person.homeworld)
          person.homeworld = planetResponse.data.name
      }
      for (let person of response.data.results){
          if (person.species.length != 0) {
              let speciesResponse = await axios(person.species[0])
              person.species = speciesResponse.data.name
          } else {
              person.species.push("human")
          }
      }
    setCharacters(response.data.results)
  },[page])

    function handleChange(){
  }

  return(
      <div>
          <SearchField handleChange={handleChange}/>
        <Table data={characters}/>
      </div>
  )
}

App.propTypes = {
    characters: PropTypes.array.isRequired
}

export default App
