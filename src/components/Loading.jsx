import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <div className="my-2">
      <div className="my-2">
        <p>Loading the data ... Please wait</p>
      </div>

      <Spinner animation="border" role="status">
        <span className="visually-hidden text-center">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;
