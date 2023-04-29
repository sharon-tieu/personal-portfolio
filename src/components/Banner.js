import { Container, Row, Col } from "react-bootstrap";
import headshot from '../assets/img/headshot.png';
import Typewriter from "typewriter-effect";


export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center white-font margin-bottom-100">
          <Col xs={12} md={6} xl={5}>
            <img src={headshot} alt="Portrait" className="headshot-banner" />
          </Col>
          <Col xs={12} md={6} xl={7}>
            <h3 className="tagline">Hi, I'm Sharon</h3>
            <h1>
              <Typewriter
                  options={{
                    strings: ['Web Developer', 'Twitch Streamer', 'Artist', 'KPOP Dancer'],
                    autoStart: true,
                    loop: true
                  }}
              />
            </h1>
            <p>based in Orange County, California</p>
            {/* <img src={cute} alt="Cute Cat Icon" className="cat-icon" /> */}
            <button
              type="button"
              className="d-inline-flex p-2 btn btn-outline-secondary resume-btn"
              target="_blank"
              >Resume</button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
