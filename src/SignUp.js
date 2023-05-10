import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./firebase";

export default function SignUp  ({ history })  {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label className="label">
          Email
          <input className="input" name="email" type="email" placeholder="Email" />
        </label>
        <label className="label">
          Password
          <input className="input" name="password" type="password" placeholder="Password" />
        </label>
        <button className="button is-success" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

