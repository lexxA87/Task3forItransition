import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Input from "../input/Input";
import { login } from "../../actions/user";

function Login() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <div>Login</div>
      <Input
        value={name}
        setValue={setName}
        type="text"
        placeholder="enter your name"
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="enter your password"
      />
      <button onClick={() => dispatch(login(name, password))}>LOGIN</button>
      <div>
        <NavLink to="/registration">Registration</NavLink>
      </div>
    </div>
  );
}

export default Login;
