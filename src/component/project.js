import React, { Component } from "react";
import './project.css'
class Project extends Component {
  render() {
    return (
        <div class="container" className="projectList">
          <div class="card" >
            <a href="https://github.com/srajput45/Scribbler" target="_blank">
              <img src="https://gh-card.dev/repos/srajput45/Scribbler.svg" />
            </a>
          </div>
          <div class="card" >
            <a href="https://github.com/srajput45/ChillOut" target="_blank">
              <img src="https://gh-card.dev/repos/srajput45/ChillOut.svg" />
            </a>
          </div>
          <div class="card" >
            <a href="https://github.com/srajput45/react-movies-app" target="_blank">
              <img src="https://gh-card.dev/repos/srajput45/react-movies-app.svg" />
            </a>
          </div>
          <div class="card" >
            <a href="https://github.com/srajput45/recipe-finder" target="_blank">
              <img src="https://gh-card.dev/repos/srajput45/recipe-finder.svg" />
            </a>
          </div>
          <div class="card" >
            <a href="https://github.com/srajput45/AmericanFootball" target="_blank">
              <img src="https://gh-card.dev/repos/srajput45/AmericanFootball.svg" />
            </a>
          </div>
        </div>
    );
  }
}

export default Project;
