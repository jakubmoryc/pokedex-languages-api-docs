import React from 'react';

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
    stickyTableOfContents: false,
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

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
    window.addEventListener('resize', this.handleResize)

    this.handleResize()

    this.setActivePageOnLoad()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    return (
      <Router>
        <Navbar 
            setActivePage={this.setActivePage}
            activePage={this.state.activePage}
            screenWidth={this.state.screenWidth}
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
              <Homepage screenWidth={this.state.screenWidth}/>
            </Route>
            <Route path="*">
              <Redirect push to="/"/>
            </Route>
          </Switch>
          <Footer/>
          {this.state.horizontalWidth}
        </div>
      </Router>
    );

  }
}

export default App;
