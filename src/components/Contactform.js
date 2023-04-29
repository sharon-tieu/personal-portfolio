import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Contactform = () => {

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center white-font">
          <Col>
            <h1>Contact</h1>
            <form onSubmit={''}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input type="text" value={''} />
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
