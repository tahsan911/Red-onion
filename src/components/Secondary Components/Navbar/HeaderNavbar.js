import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./../../../images/logo2.png";
import "./HeaderNavbar.css";

const HeaderNavbar = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Nav>
          <Link to="/home">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center text-lg-end">
            <Link className="link my-2" to="/Cart">
              <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
            </Link>
            <Link className="link my-2" to="/Home">
              Home
            </Link>
            <Link className="link my-2" to="/Login">
              Login
            </Link>
            <Link className="link my-2" to="/Signup">
              Sign up
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
