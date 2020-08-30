import React, { Component } from "react";
import './project.css';
import {Container} from 'react-bootstrap';
class Project extends Component {
  render() {
    return (
        <Container className="projectList">
          <div class="card" >
            <a href="https://srajput45.github.io/Scribbler/" target="_blank">
              <img src="https://gh-card.dev/repos/srajput45/Scribbler.svg" />
            </a>
          </div>
          <div class="card" >
            <a href="https://github.com/srajput45/ChillOut" target="_blank">
              <img src="https://gh-card.dev/repos/srajput45/ChillOut.svg" />
            </a>
          </div>
          <div class="card" >
            <a href="https://srajput45.github.io/react-movies-app/" target="_blank">
              <img src="https://gh-card.dev/repos/srajput45/react-movies-app.svg" />
            </a>
          </div>
          <div class="card" >
            <a href="https://srajput45.github.io/Recipe/" target="_blank">
              <img src="https://gh-card.dev/repos/srajput45/recipe-finder.svg" />
            </a>
          </div>
          <div class="card" >
            <a href="https://github.com/srajput45/AmericanFootball" target="_blank">
              <img src="https://gh-card.dev/repos/srajput45/AmericanFootball.svg" />
            </a>
          </div>
        </Container>
    );
  }
}

export default Project;
