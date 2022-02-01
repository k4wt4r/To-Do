import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (email === "") {
      return;
    }
  };
  return (
    <div className="signup-container">
      <form className="form-signup">
        <h1 className="signup-title"> Sign Up</h1>
        <input
          className="input-name-signup"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={onChange}
        />
        <input
          className="input-email-signup"
          placeholder="Enter your email"
          value={email}
          type="email"
          onChange={onChangeEmail}
        />
        <input
          className="input-password-signup"
          placeholder="password"
          type="password"
        />
        <input
          className="input-passwor-signup-confirm"
          placeholder="confirm password"
          type="password"
        />
        <button className="btn-signup" type="submit" onClick={onSubmit}>
          Sign Up
        </button>
        <div className="login-link">
          <p>
            Already have Account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
