import React, { createContext, useState, useEffect } from "react";
import user from "./mockData/user";
import repositories from "./mockData/repositories";
import followers from "./mockData/followers";

const rootUrl = "https://api.github.com";

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(user);
  const [repos, setRepos] = useState(repositories);
  const [follower, setFollower] = useState(followers);

  return (
    <GithubContext.Provider value={{ githubUser, repos, follower }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
