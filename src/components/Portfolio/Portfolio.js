import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import ComputerClinic from "../../assets/ComputerClinic.png"
import BikeBazar from "../../assets/BikeBazar.png"
import Photography from "../../assets/Photography.png"

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>My Portfolio</h2>

      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/burhanuddinrabby/iham-computer-clinic" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://iham-computer-clinic.web.app" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </header>
            <div className="body">
              <img src={ComputerClinic} alt="" />
              <h3>IHAM Computer Clinic</h3>
              <ul>
                <li>
                  It's a full stack web project.
                </li>
                <li>
                  Responsive SPA for Wholesale Computer Parts Supplier.
                </li>
                <li>
                  Admin Panel For Products & Order Management.
                </li>
                <li>
                  Payment Method included using Stripe.
                </li>
                <li>
                  User authentication using firebase.
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>MongoDB</li>
                <li>Express</li>
                <li>Node</li>
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/burhanuddinrabby/iham-bike-bazar" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://iham-bike-bazar.web.app/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </header>
            <div className="body">
              <img src={BikeBazar} alt="" />
              <h3>IHAM Bike Bazar</h3>
              <ul>
                <li>
                  It is a full stack web project.
                </li>
                <li>
                  User authentication using firebase.
                </li>
                <li>
                  A site for buying bikes.
                </li>
                <li>
                  User can increase or decrease quantity
                </li>
                <li>
                  User can delete an item or can add an item to his/her account
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>MongoDB</li>
                <li>Express</li>
                <li>Node</li>
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/burhanuddinrabby/iham-photography" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://iham-photography.web.app/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </header>
            <div className="body">
              <img src={Photography} alt="" />
              <h3>IHAM Photography</h3>
              <ul>
                <li>
                  Implemented user authentication.
                </li>
                <li>
                  About an independent photographer and his services.
                </li>
                <li>
                  User must have to log in to visit checkout page.
                </li>
                <li>
                  Email verification added.
                </li>
                <li>
                  Forgot Password route included.
                </li>
              </ul>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Firebase</li>
                <li>React Bootstrap</li>
                <li>Firebase Hooks</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}