import React from "react"
import Pagination from "./Pagination"

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
        <table>
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
            <tfoot>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a className="page-link" href="#">5</a></li>
                        <li className="page-item"><a className="page-link" href="#">6</a></li>
                        <li className="page-item"><a className="page-link" href="#">7</a></li>
                        <li className="page-item"><a className="page-link" href="#">8</a></li>
                        <li className="page-item"><a className="page-link" href="#">9</a></li>
                    </ul>
                </nav>
            </tfoot>
        </table>

    )
}

export default Table