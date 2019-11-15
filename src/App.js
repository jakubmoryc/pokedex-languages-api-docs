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
import Footer from './components/Footer/Footer';

class App extends React.Component {
  state = {
    activePage: "homepage",
    scrollPos: undefined,
    stickyTableOfContents: false
  }

  setActivePage = (newPage) => {
    this.setState({
      activePage: newPage
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
  this.setState({
    scrollPos: window.pageYOffset,
  })
  if(this.state.scrollPos > 50) {
    this.setState({
      stickyTableOfContents: true
    })
  } else {
    this.setState({
      stickyTableOfContents: false
    })
  }
  }

  render() {
    return (
      <Router>
        <Navbar 
            setActivePage={this.setActivePage}
            activePage={this.state.activePage}
          />
        <div className="app">
          <Switch>
            <Route path="/docs">
              <Docs stickyTableOfContents={this.state.stickyTableOfContents}/>
            </Route>
            <Route path="/about">
              <About stickyTableOfContents={this.state.stickyTableOfContents}/>
            </Route>
            <Route path="/" exact>
              <Homepage/>
            </Route>
            <Route path="*">
              <Redirect push to="/"/>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );

  }
}

export default App;
