import { Container, Row, Col } from "react-bootstrap";
import headshot from '../assets/img/headshot.png';
import Typewriter from "typewriter-effect";
// eslint-disable-next-line

export const Banner = () => {
  const onDownload = () => {
    fetch('SharonTieu_Resume.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let link = document.createElement('a');
        link.href = fileURL;
        link.download = 'resume.pdf';
        link.click();
      })
    })
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center white-font margin-bottom-100">
          <Col xs={12} md={6} xl={5}>
            <img src={headshot} alt="Portrait" className="headshot-banner" />
          </Col>
          <Col xs={12} md={6} xl={7}>
            <div>
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
                <p>based in California and Texas</p>
                {/* <a href="images/jeffrey-cruz-resume-march-2023.pdf" class="main-btn" download="jeffrey-cruz-portfolio-resume">
                  <span class="btn-text">Download Resume</span>
                  <span class="btn-icon"><i class="fa fa-download" aria-hidden="true"></i></span>
                </a> */}

                  <button onClick={onDownload} className="d-flex justify-content-center download-btn">
                    <span>Resume</span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="m-3"
                      viewBox="0 0 16 16">
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                    </svg>
                  </button>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
