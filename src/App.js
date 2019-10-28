import React, { useState }  from 'react';

import './css/app.css';

import Navbar from './components/Navbar/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import Docs from './components/Docs/Docs';

function App() {
  const [activePage, setActivePage] = useState("homepage");

  return (
    <Router>
      <div className="app">
        <Navbar 
          setActivePage={setActivePage}
          activePage={activePage}
        />
        <Switch>
          <Route path="/docs">
            <Docs/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/" exact>
            <Homepage/>
          </Route>
          <Route path="*">
            <Redirect push to="/"/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
