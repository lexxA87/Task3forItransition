import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Input from "../input/Input";
import { registration } from "../../actions/user";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div>Registration</div>
      <Input
        value={name}
        setValue={setName}
        type="text"
        placeholder="enter your name"
      />
      <Input
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="enter your email"
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="enter your password"
      />
      <button onClick={() => registration(name, email, password)}>
        REGISTRATION
      </button>
      <div>
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
}

export default Registration;
