import React, { Component } from "react";
import  Man2  from "../images/man2.svg";
import './about.css'
class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="container" className="about">
          <div class="row" className="left">
            <div class="col" sm={8}>
              <h1>
                I'm &nbsp;
                <span style={{ color: "#5d77ce" }}>Shubham Rajput</span>
              </h1>
              <br />
              <p style={{ width: 600 }}>
                Hello, <br />
                I'm from the city of lake Bhopal. Right now I'm persuing My
                B.Tech from Lovely Professional University in Computer Science
                {"&"} Technology.
                <br />
                <br />
                I have been working on the wed develpoment and desinging website
                from past one year. I have also developed many projects using
                ReactJs, HTML, JavaScripts. I have also develpoed some Android
                application also.
                <br />
                <br />
              </p>
              <br />

              <p>Thank You!</p>
            </div>
            <div class="col" sm={4}></div>
          </div>
          <div className="right">
            <img src={Man2}></img>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default About;
