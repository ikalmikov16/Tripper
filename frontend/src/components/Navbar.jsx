import React, { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';
import AuthContext from '../context/AuthContext';

const NavBar = () => {
	let {user, logoutUser} = useContext(AuthContext)

  return (
    <Navbar bg='danger' variant='dark'>
      <Container>
        <Navbar.Brand href='/' id='navbar-brand'>Traveler</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='me-auto'>
						{user ? (
							<Nav.Link id='navbar-link' href="/trips">Trips</Nav.Link>
						):(<></>)}
          </Nav>
					<Nav>
						{user ? (
							<Nav.Link id='navbar-link' href="/" onClick={logoutUser}>Logout</Nav.Link>
						) : (
							<>
								<Nav.Link id='navbar-link' href="/login" >Login</Nav.Link>
								<Nav.Link id='navbar-link' href="/signup" >Sign Up</Nav.Link>
							</>
						)}
					</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;