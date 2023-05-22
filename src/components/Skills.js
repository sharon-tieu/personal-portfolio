import { Container, Col, Row } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import javascript from '../assets/img/javascript-plain.svg';
import html from '../assets/img/html.svg';
import css from '../assets/img/css3.svg';
import postgresql from '../assets/img/postgresql.svg';
import express from '../assets/img/express.svg';
import react from '../assets/img/react.svg';
import node from '../assets/img/nodejs.svg';
import github from '../assets/img/github.svg';
import vscode from '../assets/img/vscode.svg';
import figma from '../assets/img/figma.svg';
// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
// import Carousel from "react-multi-carousel";
// import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3 // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2 // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1 // optional, default to 1.
  //   }
  // };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h1>
                Skills
              </h1>
              <div className="item d-flex flex-row justify-content-center">
                <div className="d-flex flex-column m-3">
                  <img src={javascript} alt="Skill 1" className="skills-icon" />
                  <p className="skill-label">Javascript</p>
                </div>
                <div className="d-flex flex-column m-3">
                  <img src={html} alt="Skill 2" className="skills-icon" />
                  <p className="skill-label">HTML</p>
                </div>
                <div className="d-flex flex-column m-3">
                  <img src={css} alt="Skill 3" className="skills-icon" />
                  <p className="skill-label">CSS</p>
                </div>
                <div className="d-flex flex-column m-3">
                  <img src={postgresql} alt="Skill 4" className="skills-icon" />
                  <p className="skill-label">PostgreSQL</p>
                </div>
                <div className="d-flex flex-column m-3">
                  <img src={express} alt="Skill 5" className="skills-icon" />
                  <p className="skill-label">express.js</p>
                </div>
              </div>
              <div className="item d-flex flex-row justify-content-center">
                <div className="d-flex flex-column">
                  <img src={react} alt="Skill 2" className="skills-icon m-3"/>
                  <p className="skill-label">React.js</p>
                </div>
                <div className="d-flex flex-column">
                  <img src={node} alt="Skill 2" className="skills-icon m-3"/>
                  <p className="skill-label">Node.js</p>
                </div>
                <div className="d-flex flex-column">
                  <img src={github} alt="Skill 1" className="skills-icon m-3"/>
                  <p className="skill-label">github</p>
                </div>
                <div className="d-flex flex-column">
                  <img src={vscode} alt="Skill 2" className="skills-icon m-3"/>
                  <p className="skill-label">VSCode</p>
                </div>
                <div className="d-flex flex-column">
                  <img src={figma} alt="Skill 2" className="skills-icon m-3"/>
                  <p className="skill-label">Figma</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={colorSharp} alt=""/> */}
    </section>
  )
}
