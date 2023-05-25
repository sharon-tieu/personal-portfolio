import { Container, Row, Col } from "react-bootstrap";
import art from '../assets/img/sharon-art.png';
// import WOW from 'wowjs';
// import 'animate.css';


export const About = () => {

  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col>
            <div className="about-bx margin-bottom-20">
              <h1>Who is Sharon?</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <p className="aboutme-description text-center col-9">
              A motivated <b>front-end</b> web developer with a strong foundation in HTML, CSS, and JavaScript. Seeking an entry-level or apprenticeship position to leverage technical skills and passion for creating visually appealing and user-friendly websites. Skilled in modern front-end frameworks and adept at problem-solving and collaborating in team environments.
            </p>
          </Col>
        </Row>
        <Row classname="about-container">
          <Col>
            <div className="d-flex flex-row">
              <div className="about-cards">
                <h1 className="about-labels">28</h1>
                <h5 className="about-description">WEEKS AT BOOTCAMP</h5>
              </div>
              <div className="about-cards">
                <h1 className="about-labels">150+</h1>
                <h5 className="about-description">HOURS OF CODING</h5>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="about-cards">
                <h1 className="about-labels">900+</h1>
                <h5 className="about-description">GITHUB CONTRIBUTIONS</h5>
              </div>
              <div className="about-cards">
                <h1 className="about-labels">235</h1>
                <h5 className="about-description">POKÉMON IN THE POKÉDEX</h5>
              </div>
            </div>
          </Col>
          <Col>
            <p className="about">
              <img src={art} alt="About_Image" className="about-art" />
            </p>
          </Col>
        </Row>

        {/* ===========ORIGINAL IS BELOW THIS =========== */}

        {/* <Row>
          <Col xs={12} md={2} xl={3} className="text-align-left">
            <img src={utaustin} alt="University of Texas at Austin" className="about-icons" />
            <p>
              I studied at the University of Texas at Austin and I loved learning about Sociology, Marketing, and Communications. After my Undergraduate years, I began working as a Public Relations Coordinator for a software company.
            </p>
          </Col>
          <Col xs={12} md={2} xl={3} className="text-align-left">
            <img src={sailormoon1} alt="Sailor Moon studying" className="about-icons" />
            <p>
              As a Public Relations Coordinator, I wrote several articles about our company's software. My interest in software originated from wanting to write better quality press releases. I knew that I had to research about software development if I wanted to write better! That's when I sought the software engineers in the company asked them about how software is built.
            </p>
          </Col>
          <Col xs={12} md={2} xl={3} className="text-align-left">
            <img src={sailormars1} alt="Sailor Moon studying" className="about-icons" />
            <p>
              From there, I was hooked! I love learning how things are built or made and learning about software development was really fun. I used FreeCodeCamp to learn how to code in my own free time and watched YouTube videos as well. When I moved to California, I decided to look more into coding and wanted to pursue web development as a career. That's when I chose to enroll in an immersive coding bootcamp!
            </p>
          </Col>
          <Col xs={12} md={2} xl={3} className="text-align-left">
            <img src={sailormoon2} alt="Sailor Moon studying" className="about-icons" />
            <p>
              At bootcamp, I learned full-stack development and various web technologies. During my time here, I developed 2 personal projects. After successfully completing the program, I wanted to improve on my logic so I started picking up data structures and algorithms and I am polishing my projects and collaborate with other Junior Developers on weekly HTML and CSS challenges to maintain my technical skills.
            </p>
          </Col>
        </Row> */}
      </Container>
    </section>
  )
}
