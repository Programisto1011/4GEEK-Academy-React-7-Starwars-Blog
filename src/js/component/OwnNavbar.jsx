//Install: npm install react-bootstrap bootstrap@5.1.3
import React from "react";
import startWarsLogo from "../../img/StartWarsLogo.png";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import List from "./List.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext.js";


export const OwnNavbar = (props) => {

	const { store, actions } = useContext(Context);

	const handleClick = (ev) => {
		props.handleClick(ev);
	};
	
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
			<NavDropdown title={`Favorites ${store.list.length}`} id="collasible-nav-dropdown">
				<List list={store.list}/>
			</NavDropdown>
			</Nav>
		</Navbar.Collapse>
		</Container>
		</Navbar>
	);
};
