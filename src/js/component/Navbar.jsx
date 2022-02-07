//Install: npm install react-bootstrap bootstrap@5.1.3
import React from "react";
import startWarsLogo from "../../img/StartWarsLogo.png";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import List from "./List.jsx";

export const OwnNavbar = (props) => {
	// if (list.length !== 0) {
	// 	var listFavorites;
	// 	listItems = list.map((inputValue, index) => (
	// 		<NavDropdown.Item handleClick={() => deleteElement(index)}>Hola</NavDropdown.Item>
	// 	));
	// }
	return (
		<Navbar collapseOnSelect bg="dark" variant="dark">
		<Container>
		<Navbar.Brand href="#home">
			<img id="StartWarsLogo"
			height="30"
			className="d-inline-block align-top"
			alt="React Bootstrap logo" src={startWarsLogo} />
		</Navbar.Brand>
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		<Navbar.Collapse id="responsive-navbar-nav">
			<Nav className="me-auto">
			</Nav>
			<Nav>
			<NavDropdown title={`Favorites ${props.nFavorites}`} id="collasible-nav-dropdown">
				<List />
			</NavDropdown>
			</Nav>
		</Navbar.Collapse>
		</Container>
		</Navbar>
	);
};
