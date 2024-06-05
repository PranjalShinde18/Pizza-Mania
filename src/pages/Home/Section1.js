import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../../assets/hero/Pizza-Home-Screen-2.png";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (

    <div id="home">
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg={7} className="mb-5 mb-lg-0">
              <div className="position-relative">
                <img src={Pizza} className="img-fluid" alt="Hero" style={{ marginTop: "-50px" }} />
                <div className="price_badge">
                  <div className="badge_text">
                    <h4 className="h4_xs">Only</h4>
                    <h4 className="h3_lg">$6.99</h4>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="hero_text text-center">
                <h1 className="text-white">Craving Hot</h1>
                <h2 className="text-white">Fresh Pizza? We Deliver!</h2>
                <p className="text-white pt-2 pb-4">
                Order online for delicious pizzas made with the freshest ingredients, delivered straight to your door.
                </p>
                <Link to="/" className="btn order_now">
                  Order Now
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  );
};

export default Section1;