import { Container } from "./styles";
import { Form } from "../Form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";


export function Contact() {

  return (
    <Container id="contact">
      <header>
        <h2>Contact Me</h2>
        <p>If you've seen my potential or want to talk to me, don't hesitate to send me a message.</p>
      </header>
      <div className="contacts">
        <div>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <a href="mailto:burhan14nn@gmail.com">burhan14nn@gmail.com</a>
        </div>
        <div>
          <span>
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <a href="tel:+8801814-517970">(+880)1814-517970</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}