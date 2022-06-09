import { Container } from "./styles";

import profileImage from "../../assets/illustration.png"
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vsCode from "../../assets/vscode-icon.svg";
import bootstrap from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function About() {
  return (
    <Container id="about-me">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>My name is Burhan Uddin, and I'm a tech-savvy teenager with a strong interest in programming. I am passionate in providing solutions that improve people's lives while also challenging me. Currently enhancing my abilities as a Full-Stack developer.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ margin: "2rem 0" }}>

          <p>I develop websites and applications using HTML5, CSS3, Bootstrap, Tailwind, JavaScript, React.js, Firebase, React Firebase hooks, Node.js, Express.js, MongoDB etc.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>

          <p>I am a dedicated person who pursues his dreams, hardworking and results oriented, I always seek to achieve my best version.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="icons">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="icons">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="icons">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="icons">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <img src={bootstrap} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="icons">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={vsCode} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="icons">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="icons">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>

          <div className="icons">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>


        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={profileImage} alt="Burhan" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
