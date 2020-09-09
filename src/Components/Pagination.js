import React from "react";

function Pagination(props) {
  return (
    <ul className="pagination">
      <li className="page-item" onClick={(event) => props.handleClick(event)}>
        <a className="page-link" href="#">
          1
        </a>
      </li>
      <li className="page-item" onClick={(event) => props.handleClick(event)}>
        <a className="page-link" href="#">
          2
        </a>
      </li>
      <li className="page-item" onClick={(event) => props.handleClick(event)}>
        <a className="page-link" href="#">
          3
        </a>
      </li>
      <li className="page-item" onClick={(event) => props.handleClick(event)}>
        <a className="page-link" href="#">
          4
        </a>
      </li>
      <li className="page-item" onClick={(event) => props.handleClick(event)}>
        <a className="page-link" href="#">
          5
        </a>
      </li>
      <li className="page-item" onClick={(event) => props.handleClick(event)}>
        <a className="page-link" href="#">
          6
        </a>
      </li>
      <li className="page-item" onClick={(event) => props.handleClick(event)}>
        <a className="page-link" href="#">
          7
        </a>
      </li>
      <li className="page-item" onClick={(event) => props.handleClick(event)}>
        <a className="page-link" href="#">
          8
        </a>
      </li>
      <li className="page-item" onClick={(event) => props.handleClick(event)}>
        <a className="page-link" href="#">
          9
        </a>
      </li>
    </ul>
  );
}
export default Pagination;
