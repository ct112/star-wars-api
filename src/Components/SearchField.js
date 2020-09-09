import React from "react";
// import {InputGroup} from "react-bootstrap"

function SearchField(props) {
  return (
    <div className="input-group">
      <input
        className="form-control"
        placeholder="Search"
        type="text"
        onChange={(event) => props.handleChange(event)}
      ></input>
      <div className="input-group-btn">
        <button className="btn btn-default" type="submit">
          <i className="glyphicon glyphicon-search"></i>
        </button>
      </div>
    </div>
  );
}
export default SearchField;
