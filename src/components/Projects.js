import { Container, Col, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import project1 from '../assets/img/project1.png';
import project2 from '../assets/img/project2.png';

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
            <div className="project-bx mb-3">
              <h1>
                Projects
              </h1>
              <p>To learn more about my projects, please visit the site or the corresponding GitHub pages or download my resume. Thank you!</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <a href="https://dndfuze.ddapp.dev/" target="_blank" rel="noreferrer">
                    <img src={project1} alt="Project: DnDFuze" className="project-screenshot" />
                  </a>
                </div>
                <div className="item">
                  <a href="https://github.com/sharon-tieu/ajax--project" target="_blank" rel="noreferrer">
                    <img src={project2} alt="Project: The World of Studio Ghibli" className="project-screenshot"/>
                  </a>
                </div>
                <div className="item">
                  <a href="https://dndfuze.ddapp.dev/" target="_blank" rel="noreferrer">
                    <img src={project1} alt="Project: DnDFuze" className="project-screenshot" />
                  </a>
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
