import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="error">
      <h1 className="error__heading">Error 404</h1>
      <h3 className="error__message">
        Sorry, the page you tried cannot be found
      </h3>
      <Link to="/">
        <button className="error__button">back home</button>
      </Link>
    </div>
  );
}

export default Error;
