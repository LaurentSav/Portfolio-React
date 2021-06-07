import React from "react";
import { Switch, Redirect, Route } from 'react-router-dom';
import Home from './home'

export default function ToRoutes(){
    return (
      <Switch>
        <Route exact path ="/">
          <Home></Home>
        </Route>
        <Route exact path = "/skills">
          <h1>COMPETENCES</h1>
        </Route>
        <Route exact path = "/projects">
          <h1>PROJECTS</h1>
        </Route>
        <Route exact path = "/contact">
          <h1>CONTACT</h1>
        </Route>
        <Route path="/404">
          <h1> 404 not Found </h1>
        </Route>
        <Redirect to="/404"/>
      </Switch>
    );
}