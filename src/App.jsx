import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import UserForm from './UserForm';
import GameApp from './GameApp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

export default function App() {
    /*
    const [user, loading, error] = useAuthState(auth);

   */
   return (
    
      <Router>
        <Switch>
          <Route exact path = "/" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path = "/signup" component={SignUp}/>
          <Route path = "/game/:id" component={GameApp}/>
   
        </Switch>
      </Router>
    
  );

//return <div>Hello</div>
}