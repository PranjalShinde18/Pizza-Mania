import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section5() {
  return (

    <div id="contact">

      <section className="contact_section">
        <Container>
          <Row className="justify-content-center">
            <Col sm={8} className="text-center">
              <h4>We Guarantee</h4>
              <h2>30 Minutes Delivery!</h2>
              <p>
                Enjoy hot and delicious pizza delivered to your door in just 30 minutes!
                Our speedy service ensures your pizza arrives fresh and on time, every
                time. If we're late, your next pizza is on us!
              </p>
              <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
                Call: 999-888-7777
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Section5;