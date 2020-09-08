import React from "react"
import Pagination from "./Pagination"
import {Table as Tables} from "react-bootstrap"

function Table(props){
    const rows = props.data.map(item => (
        <tr>
            <td>{item.name}</td>
            <td>{item.birth_year} </td>
            <td>{item.height} </td>
            <td>{item.mass} </td>
            <td>{item.homeworld} </td>
            <td>{item.species} </td>
        </tr>)
    )
    return (
        <Tables>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Birth Date</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th>Homeworld</th>
                    <th>Species</th>
                </tr>
            </thead>
                <tbody>
                    {rows}
                </tbody>
                    <div>
                        <ul className="pagination">
                            <li className="page-item" onClick={(event)=>props.handleClick(1)}><a className="page-link" href="#">1</a></li>
                            <li className="page-item" onClick={(event)=>props.handleClick(2)}><a className="page-link" href="#">2</a></li>
                            <li className="page-item" onClick={(event)=>props.handleClick(3)}><a className="page-link" href="#">3</a></li>
                            <li className="page-item" onClick={(event)=>props.handleClick(4)}><a className="page-link" href="#">4</a></li>
                            <li className="page-item" onClick={(event)=>props.handleClick(5)}><a className="page-link" href="#">5</a></li>
                            <li className="page-item" onClick={(event)=>props.handleClick(6)}><a className="page-link" href="#">6</a></li>
                            <li className="page-item" onClick={(event)=>props.handleClick(7)}><a className="page-link" href="#">7</a></li>
                            <li className="page-item" onClick={(event)=>props.handleClick(8)}><a className="page-link" href="#">8</a></li>
                            <li className="page-item" onClick={(event)=>props.handleClick(9)}><a className="page-link" href="#">9</a></li>

                        </ul>
                    </div>
        </Tables>

    )
}

export default Table