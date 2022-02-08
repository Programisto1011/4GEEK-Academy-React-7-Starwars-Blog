import React from "react";
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import '../../styles/Card.css'



const Card = (props) => {
	return (
	<>
	<div className="container justify-content-center ">
		<div className="card">
			<div className="card-body">
				<img className="card-img-top img-flex" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/250px-Star_Wars_Logo.svg.png" alt="..." />
				<h5 className="card-tittle">{props.title}</h5>
				<p className="card-text"> {props.height}<br /> {props.gender}</p>
				<div className="cardFooter">
				<button className="btn btn-primary">Details</button>
				<span className="favIcon"><i className="fas fa-heart"></i></span>
				</div>
				<div><p className="peopleUid planetUid">{props.uid}</p></div>
			</div>

		</div>
	</div>
	</>	
	);
};

Card.propTypes = {
	title: PropTypes.string,
	height: PropTypes.number,
	gender: PropTypes.string,
	uid: PropTypes.number,
};

export default Card;