import React, { createContext, useState, useEffect } from "react";

const rootUrl = "https://api.github.com";

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  return (
    <GithubContext.Provider value={"hello"}>{children}</GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
