import React, { Component } from "react";
import NavBar from "./component/navBar";
import { Route, Switch } from "react-router-dom";
import Home from "./component/home";
import Project from "./component/project";
import About from './component/about';
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/project" component={Project} />
            <Route path="/about" component={About} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
