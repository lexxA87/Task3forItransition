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
    <div className="row justify-content-md-center">
      <div className="col-md-auto col-lg-5">
        <div className="card text-center">
          <div className="card-header">Login Form</div>
          <div className="card-body ">
            <Input
              value={name}
              setValue={setName}
              type="text"
              placeholder="Name"
              htmlId="name"
            />
            <Input
              value={password}
              setValue={setPassword}
              type="password"
              placeholder="Password"
              htmlId="password"
            />
            <button
              onClick={() => dispatch(login(name, password))}
              className="btn btn-primary mb-3"
            >
              LOGIN
            </button>
          </div>
          <div className="card-footer text-muted">
            <NavLink to="/registration">Registration</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
