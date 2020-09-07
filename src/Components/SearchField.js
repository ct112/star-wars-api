import React from "react"

function SearchField(props){
    return (
        <div>
            <input type="text" onChange={()=> props.handleChange}></input>
            <button onChange={()=>props.handleChange}>Submit</button>
        </div>
    )
}

export default SearchField