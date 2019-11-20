import React from 'react';

import './css/app.css';

import Navbar from './components/Navbar/Navbar';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import Docs from './components/Docs/Docs';
import Footer from './components/Footer/Footer';

import GitHubButton from './components/GitHubButton/GitHubButton'

class App extends React.Component {
  state = {
    activePage: "homepage",
    screenWidth: undefined
  }

  setActivePage = (newPage) => {
    this.setState({
      activePage: newPage
    })
  }

  setActivePageOnLoad = () => {
    switch (window.location.pathname) {
      case "/":
        this.setState({
          activePage: "homepage"
        })
        break;
      case "/about":
        this.setState({
          activePage: "about"
        })
        break;
      case "/docs":
        this.setState({
          activePage: "docs"
        })
        break;
      default:
        this.setState({
          activePage: "homepage"
        })
        break; 
    }
  }

  handleResize = () => {
    this.setState({
      screenWidth: window.innerWidth
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)

    this.handleResize()

    this.setActivePageOnLoad()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    return (
      <Router basename="">
        <Navbar 
            setActivePage={this.setActivePage}
            activePage={this.state.activePage}
            screenWidth={this.state.screenWidth}
          />
        <div className="app">
          <Switch>
            <Route path="/docs">
              <Docs/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/" exact>
              <Homepage 
                screenWidth={this.state.screenWidth} 
                setActivePage={this.setActivePage}
              />
            </Route>
            <Route path="*">
              <Redirect push to="/"/>
            </Route>
          </Switch>
          <Footer/>
          {this.state.horizontalWidth}
        </div>
        <GitHubButton/>
      </Router>
    );

  }
}

export default App;
