import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Cards from './components/Cards/Cards.js'
import AddApplication from "./components/Application/AddApplication/AddApplication"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="app">
          <Header />
          <Switch>
              <Route path='/addApp'>
                <AddApplication></AddApplication>
              </Route>
              <Route path='/dependencies'>
                <Cards></Cards>
              </Route>
              <Route path='/environments'>
                <Cards></Cards>
              </Route>
              <Route path='/mappings'>
                <Cards></Cards>
              </Route>
              <Route path='/bookings'>
                <Cards></Cards>
              </Route>
              <Route path='/deployments'>
                <Cards></Cards>
              </Route>
              <Route path='/decommisioning'>
                <Cards></Cards>
              </Route>
              <Route path='/techLandscape'>
                <Cards></Cards>
              </Route>
              <Route path='/'>
                <Cards></Cards>
              </Route>
            </Switch>
      </div>
    </Router>
  );
}

export default App;
