import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pizza1 from "../../assets/menu/pizza1.jpg";
import Pizza2 from "../../assets/menu/pizza2.jpg";
import Pizza3 from "../../assets/menu/pizza3.jpg";
import Pizza4 from "../../assets/menu/pizza4.jpg";
import Pizza5 from "../../assets/menu/pizza5.jpg";
import Pizza6 from "../../assets/menu/pizza6.jpg";
import Pizza7 from "../../assets/menu/pizza7.jpg";
import Pizza8 from "../../assets/menu/pizza8.jpg";
import Cards from "../../components/Layouts/Cards";
import { Link } from "react-router-dom";

// Mock Data Cards
const mockData = [
  {
    "id": "0001",
    "image": Pizza1,
    "title": "Margherita",
    "paragraph": "Fresh tomato sauce, mozzarella cheese, basil leaves",
    "rating": 4.5,
    "price": 199
  },
  {
    "id": "0002",
    "image": Pizza2,
    "title": "Pepperoni",
    "paragraph": "Spicy pepperoni slices, tomato sauce, mozzarella cheese",
    "rating": 4.5,
    "price": 219
  },
  {
    "id": "0003",
    "image": Pizza3,
    "title": "Vegetarian",
    "paragraph": "Assorted fresh vegetables, tomato sauce, mozzarella cheese",
    "rating": 4,
    "price": 199
  },
  {
    "id": "0004",
    "image": Pizza4,
    "title": "BBQ Chicken",
    "paragraph": "Grilled chicken, barbecue sauce, red onions, mozzarella cheese",
    "rating": 4,
    "price": 399
  },
  {
    "id": "0005",
    "image": Pizza5,
    "title": "Hawaiian",
    "paragraph": "Ham, pineapple chunks, tomato sauce, mozzarella cheese",
    "rating": 3.5,
    "price": 249
  },
  {
    "id": "0006",
    "image": Pizza6,
    "title": "Supreme",
    "paragraph": "Pepperoni, bell peppers, onions, mushrooms, olives, mozzarella cheese",
    "rating": 5,
    "price": 599
  },
  {
    "id": "0007",
    "image": Pizza7,
    "title": "Mediterranean",
    "paragraph": "Feta cheese, olives, tomatoes, spinach, mozzarella cheese",
    "rating": 4,
    "price": 349
  },
  {
    "id": "0008",
    "image": Pizza8,
    "title": "Paneer Delight",
    "paragraph": "Paneer, bell peppers, onions, tomato sauce, mozzarella cheese, cilantro",
    "rating": 4.7,
    "price": 369
  }
];

// Rating Logical Data
const renderRatingIcons = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

function Section3() {
  return (

    <div id="menu">

      <section className="menu_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
              <h2>OUR DELICIOUS PIZZAS</h2>
              <p className="para">
                Indulge in our wide variety of pizzas, made with rich, flavorful
                ingredients and baked to perfection. Each slice promises a burst
                of taste, bringing the essence of Italy right to your plate.
              </p>
            </Col>
          </Row>
          <Row>
            {mockData.map((cardData, index) => (
              <Cards
                key={index}
                image={cardData.image}
                rating={cardData.rating}
                title={cardData.title}
                paragraph={cardData.paragraph}
                price={cardData.price}
                renderRatingIcons={renderRatingIcons}
              />
            ))}
          </Row>

          <Row className="pt-5">
            <Col sm={6} lg={5}>
              <div className="ads_box ads_img1 mb-5 mb-md-0">
                <h4 className="mb-0">GET YOUR FREE</h4>
                <h5>CHEESE FRIES</h5>
                <Link to="/" className="btn btn_red px-4 rounded-0">
                  Learn More
                </Link>
              </div>
            </Col>
            <Col sm={6} lg={7}>
              <div className="ads_box ads_img2">
                <h4 className="mb-0">GET YOUR FREE</h4>
                <h5>CHEESE Burger</h5>
                <Link to="/" className="btn btn_red px-4 rounded-0">
                  Learn More
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg_parallax_scroll"></section>

    </div>
  );
}

export default Section3;