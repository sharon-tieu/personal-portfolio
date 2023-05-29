import { Container, Row, Col } from "react-bootstrap";
import headshot from '../assets/img/headshot.png';
import Typewriter from "typewriter-effect";
import * as FileSaver from 'file-saver';
// eslint-disable-next-line
import { saveAs } from 'file-saver';

const handleResumeDownload = () => {
  FileSaver.saveAs(
    'https://media.licdn.com/dms/document/D562DAQHCoxHf-hhj8Q/profile-treasury-document-pdf-analyzed/0/1682829277525?e=1683763200&v=beta&t=m9v3rQgUfUr4hdDA0-Uoh69Qw3dAl1i00rRofd98Rqw',
    'Sharon Tieu_Resume'
  );
}

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
            <div className="red-line d-flex justify-content-center">
              {/* <h5 className="red-line m-2 p-3 align-self-center download-btn">
                Download Resume
              </h5> */}
              {/* <svg xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="bi bi-download align-self-center download-icon"
                    viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg> */}
              {/* <svg xmlns="http://www.w3.org/2000/svg"
                    width="62"
                    height="62"
                    fill="currentColor"
                    class="bi bi-circle-fill align-self-center" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8" />
              </svg> */}
              {/* <h3 className="resume-label p-3 mt-2 text-align-left">
                Resume
              </h3> */}
              <svg xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="m-3"
                    viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
              <button
                type="button"
                className="d-inline-flex btn btn-outline-secondary resume-btn m-2 p-4"
                onClick={handleResumeDownload}
                download="SharonTieu_Resume.pdf">
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
