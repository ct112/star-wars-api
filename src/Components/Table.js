import React from "react";
import { Table as Tables } from "react-bootstrap";

function Table(props) {
  const rows = props.data.map((item) => (
    <tr>
      <td>{item.name}</td>
      <td>{item.birth_year} </td>
      <td>{item.height} </td>
      <td>{item.mass} </td>
      <td>{item.homeworld} </td>
      <td>{item.species} </td>
    </tr>
  ));
  return (
    <Tables style={{ color: "white" }}>
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
      <tbody>{rows}</tbody>
    </Tables>
  );
}

export default Table;
