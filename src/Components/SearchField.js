import React from "react"

function SearchField(props){
    return (
        <div>
            <input type="text" onChange={(event)=> props.handleChange(event)}></input>
            <button onChange={()=>props.handleChange}>Submit</button>
        </div>
    )
}

export default SearchField