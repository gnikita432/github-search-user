import React from "react";
// import { Navbar, Info, Repos, Search, User } from "../components";
import Navbar from "../components/Navbar.js";
import Info from "../components/Info.js";
import Search from "../components/Search";
import User from "../components/User.js";
import Repos from "../components/Repos.js";
function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar></Navbar>
      <Search></Search>
      <Info></Info>
      <User></User>
      <Repos></Repos>
    </div>
  );
}

export default Dashboard;
