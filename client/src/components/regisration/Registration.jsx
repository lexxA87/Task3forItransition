import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Input from "../input/Input";
import { registration } from "../../actions/user";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="row justify-content-md-center">
      <div className="col-md-auto col-lg-5">
        <div className="card text-center">
          <div className="card-header">Registraton Form</div>
          <div className="card-body ">
            <Input
              value={name}
              setValue={setName}
              type="text"
              placeholder="Name"
              htmlId="name"
            />
            <Input
              value={email}
              setValue={setEmail}
              type="text"
              placeholder="Email"
              htmlId="email"
            />
            <Input
              value={password}
              setValue={setPassword}
              type="password"
              placeholder="Password"
              htmlId="password"
            />
            <button
              onClick={() => registration(name, email, password)}
              className="btn btn-primary mb-3"
            >
              REGISTRATION
            </button>
          </div>
          <div className="card-footer text-muted">
            <NavLink to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
