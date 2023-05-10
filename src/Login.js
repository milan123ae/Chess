import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./firebase.js";
import { AuthContext } from "./Auth.js";

export default function Login ({ history })  {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
          localStorage.setItem('userName', email.value)
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
/*
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

*/
  return (
    <div>
      <h1>Log in</h1><br />
      <form className="user-form" onSubmit={handleLogin}>
        <label className="label">
          Email:
          <input className="input" name="email" type="email" placeholder="Email" />
        </label>
        <label className="label">
          Password:
          <input className="input" name="password" type="password" placeholder="Password" />
        </label>
        <button className="button is-success" type="submit">Log in</button>
      </form>
      <br />
      <form className="user-form" action="http://localhost:3000/signup">
      <label className="label">
          Go to sign up:
        <input className="label" type="submit" value="SignUp" />
       </label>
      </form>
    </div>

  );
};

//export default withRouter(Login);