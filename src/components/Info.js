import React, { useContext } from "react";
import { GithubContext } from "../context/context";
function Info() {
  const { githubUser } = useContext(GithubContext);
  const { following, followers, public_repos, public_gists, name } = githubUser;

  return (
    <div className="info">
      <section>
        <p>Name:{name}</p>
        <p>Followers:{followers}</p>
        <p>Following:{following}</p>
        <p>Public gists:{public_gists}</p>
        <p>Public repositories:{public_repos}</p>
      </section>
    </div>
  );
}

export default Info;
