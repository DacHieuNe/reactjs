import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

const Navigator = props => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/" exact>Home</NavLink>
            <NavLink className="nav-link" to="/posts">Posts</NavLink>
            <NavLink className="nav-link" to="/status">Status</NavLink>
            <NavLink className="nav-link" to="/otp">OTP Apps - Countdown</NavLink>
          </Nav>
        </Container>
      </Navbar>
    );
};

Navigator.propTypes = {
    
};

export default Navigator;