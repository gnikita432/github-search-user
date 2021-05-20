import React, { useContext } from "react";
import { GithubContext } from "../context/context";
function Info() {
  const data = useContext(GithubContext);

  return (
    <div className="info">
      <h1>Info: {data}</h1>
    </div>
  );
}

export default Info;
