import { Container, Col, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import javascript from '../assets/img/javascript-plain.svg';
import html from '../assets/img/html.svg';
import css from '../assets/img/css3.svg';

export const Projects = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <div className="project-bx">
              <h1>
                Projects
              </h1>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={javascript} alt="Skill 1" />
                </div>
                <div className="item">
                  <img src={html} alt="Skill 2" />
                </div>
                <div className="item">
                  <img src={css} alt="Skill 3" />
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={colorSharp} alt=""/> */}
    </section>
  )
}
