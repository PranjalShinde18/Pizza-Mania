import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import "../../styles/HeaderStyle.css"
import { Link } from 'react-router-dom';
import Pizza from "../../assets/logo/Pizza.png"

const Header = () => {
  const [nav, setNav] = useState(false);

  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };


  window.addEventListener("scroll", changeValueOnScroll);


  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className='logo' >
              <img src={Pizza} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">

              <a href='#home'>Home</a>
              <a href='#about'>About</a>
              <a href='#menu'>Menu</a>
              <a href='#shop'>Shop</a>
              <a href='#brands'>Brands</a>
              <a href='#contact'>Contact Us</a>


              {/* <Nav.Link as={Link} to="/" >Home</Nav.Link>
              <Nav.Link as={Link} to="/" >About</Nav.Link>
              <Nav.Link as={Link} to="/" >Our Menu</Nav.Link>
              <Nav.Link as={Link} to="/" >Contact Us</Nav.Link> */}
              
              <Nav.Link as={Link} to="/" >
                <div className='cart'>
                  <i class="bi bi-bag fs-5s" ></i>
                  <em className='roundpoint'>2</em>
                </div>
              </Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </ header>
  )
}


export default Header