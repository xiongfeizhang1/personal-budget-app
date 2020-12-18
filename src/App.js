import React, { Component } from 'react';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import Menu from './Menu/Menu';
import BudgetPage from './BudgetPage/BudgetPage';
import Chart from './components/Chart';


import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";



function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
      <HomePage/>
        <Switch>
         <Route path="/home">
            <HomePage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/budget">
            <BudgetPage/>
            <Chart/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
