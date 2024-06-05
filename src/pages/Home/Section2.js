import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Pizza from "../../assets/about/pizza.png"
import Salad from "../../assets/about/salad.png"
import Delivery from "../../assets/about/delivery-bike.png"


// Mock Data Cards
const mockData = [

    {
        "image": Pizza,
        "title": "Authentic Pizzas",
        "paragraph": "Experience the true taste of Italy with our freshly made pizzas. From classic Margherita to gourmet specials, each pizza is crafted with the finest ingredients and baked to perfection in our wood-fired oven."
    },
    {
        "image": Salad,
        "title": "Fresh Quality Ingredients",
        "paragraph": "We use only the freshest ingredients in all our dishes. Our salads are a perfect complement to your pizza, made with crisp greens, ripe tomatoes, and a variety of delicious toppings."
    },
    {
        "image": Delivery,
        "title": "Fast and Hot Delivery",
        "paragraph": "Get your favorite pizza delivered straight to your door, hot and fresh. Our speedy delivery service ensures you enjoy your meal at its best, whether you’re at home or at the office."
    }

];

function Section2() {
    return (

        <div id='about'>

            <section className='about_section' >

                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }} className="text-center" >
                            <h2>The pizza tastes better when you eat it with your family</h2>
                            <p>We craft our burgers with fresh, high-quality ingredients, from perfectly
                                seasoned patties to crisp toppings and toasted buns. Every bite is an
                                explosion of flavor that will have you coming back for more.</p>

                            <Link to="/" className='btn order_now btn_red' >
                                Explore Full Menu
                            </Link>

                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='about_wrapper'>
                <Container>
                    <Row className='justify-content-md-center'>
                        {mockData.map((cardData, index) => (
                            <Col md={6} lg={4} className='mb-4 mb-md-0' key={index}>
                                <div className='about_box text-center'>
                                    <div className='about_icon'>
                                        <img src={cardData.image} className="img-fluid" alt="Icon" />
                                    </div>
                                    <h4 >{cardData.title}</h4>
                                    <p>{cardData.paragraph}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>


        </div>
    )
}

export default Section2