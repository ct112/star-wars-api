import React from "react"

function SearchField(props){
    return (
        <div>
            <input type="text" onChange={()=> props.handleChange}></input>
        </div>
    )
}

export default SearchField