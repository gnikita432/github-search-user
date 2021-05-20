import React from "react";
import "./Login.css";
import loginImg from "../images/login-image.svg";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <img className="login__img" src={loginImg} alt="Github user" />
      <h1 className="login__heading">Github user</h1>
      <Link to="/">
        <button className="login__button">Login</button>
      </Link>
    </div>
  );
}

export default Login;
