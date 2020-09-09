import React from "react";

function Loading(props) {
  const toggleDisplayAttribute = props.isLoading === true ? "block" : "none";
  return (
    <div
      className="spinner-border"
      role="status"
      style={{ display: toggleDisplayAttribute }}
    >
      <span className="sr-only"></span>
    </div>
  );
}

export default Loading;
