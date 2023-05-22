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
            <button
              type="button"
              className="d-inline-flex p-2 btn btn-outline-secondary resume-btn"
              onClick={handleResumeDownload}
              download="SharonTieu_Resume.pdf">
              Resume
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
