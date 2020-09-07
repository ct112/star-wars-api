import React, {useEffect, useState} from 'react'
import './App.css'
import Table from "./Components/Table"
import SearchField from "./Components/SearchField"
import axios from "axios"
import PropTypes from "prop-types"

function App(){
  const [characters,setCharacters] = useState([])
  let [page, setPage] = useState(1)
  let [name, setName] = useState("")

  useEffect(() => {
      const getData = async () => {
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
      }
      getData()

  },[page])

    function handleChange(event){
        let {value} = event.target
        if (value.length >= 3) {
            let apiQueryName = async () => {
                const response = await axios(`https://swapi.dev/api/people?search=${value}`)
                for (let person of response.data.results) {
                    let planetResponse = await axios(person.homeworld)
                    person.homeworld = planetResponse.data.name
                }
                for (let person of response.data.results) {
                    if (person.species.length != 0) {
                        let speciesResponse = await axios(person.species[0])
                        person.species = speciesResponse.data.name
                    } else {
                        person.species.push("human")
                    }
                }
                setCharacters(response.data.results)
            }
            apiQueryName()
        }
    }

  function handleClick(number){
      setPage(number)

  }

  return(
      <div>
          <SearchField handleChange={handleChange}/>
          <Table data={characters} handleClick={handleClick}/>
      </div>
  )
}

App.propTypes = {
    characters: PropTypes.array.isRequired
}

export default App
