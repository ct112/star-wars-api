import React from "react"

function SearchField(props){
    return (
        <div>
            <input type="text" onChange={(event)=> props.handleChange(event)}></input>
        </div>
    )
}

export default SearchField