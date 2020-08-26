import React, { Component } from "react";
import "./home.css";
import Man2 from "../images/Shubham Image.jpg";
import RLogo from "../images/reactlogo.png";
import HLogo from "../images/html.png";
import ALogo from "../images/androidlogo.png";
import JsLogo from "../images/jslogo.png";
import { SocialMediaIconsReact } from "social-media-icons-react";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home">
          <div className="homeLeft">
            <div className="name">
              <h1>Hola, I'm Shubham</h1>
            </div>
            <div className="intro">
              <p>
                A passionate Developer having an experience of building Web and
                Android Applications with Reactjs / JavaScript /AWS and some
                other cool libraries and frameworks.
              </p>
            </div>
            <div className="skillHeading">
              <h1>I love to work on these tech..</h1>
            </div>
            <div className="logos">
              <div>
                <img src={RLogo}></img>
              </div>
              <div>
                <img src={HLogo}></img>
              </div>
              <div>
                <img src={JsLogo}></img>
              </div>
              <div>
                <img src={ALogo}></img>
              </div>
            </div>
            <div className="socialMedia">
              <a
                href="https://drive.google.com/file/d/19FSnuBb17NKludv5cCFRajDcwL7ZmD9s/view?usp=sharings"
                style={{
                  backgroundColor: "#55198b",
                  border: "solid #55198b",
                  color: "snow",
                }}
                target="_blank"
                class="btn  btn-lg active"
                role="button"
                aria-pressed="true"
              >
                RESUME
              </a>
            </div>
          </div>
          <div className="homeRight">
            <img src={Man2}></img>
            <div className="socialMedia">
              <div className="subSocial">
                <SocialMediaIconsReact
                  icon="github"
                  padding={20}
                  roundness={100}
                  size={45}
                  borderWidth={0}
                  url="https://github.com/srajput45"
                />{" "}
              </div>
              <div className="subSocial">
                <SocialMediaIconsReact
                  icon="linkedin"
                  padding={20}
                  roundness={100}
                  size={45}
                  borderWidth={0}
                  url="https://www.linkedin.com/in/shubham--rajput/"
                />
              </div>
              <div className="subSocial">
                <SocialMediaIconsReact
                  icon="twitter"
                  padding={20}
                  roundness={100}
                  size={45}
                  borderWidth={0}
                  url="https://twitter.com/i_Srajput"
                />
              </div>
              <div className="subSocial">
                <SocialMediaIconsReact
                  icon="facebook"
                  padding={20}
                  roundness={100}
                  size={45}
                  borderWidth={0}
                  url="https://www.facebook.com/rajputshubham45/"
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
