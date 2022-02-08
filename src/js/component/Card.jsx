import React, { useContext } from "react";
import * as PropTypes from "prop-types";
import '../../styles/Card.css'
import { Context } from "../store/appContext.js";

const Card = (props) => {
	const { store, actions } = useContext(Context);
	return (
	<div className="container justify-content-center">
		<div className="card">
			<div className="card-body">
				<img className="card-img-top " src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/250px-Star_Wars_Logo.svg.png" alt="..." />
				<h5 className="card-tittle">{props.title}</h5>
				<p className="card-text"> {props.height}<br /> {props.gender}</p>
				<div className="cardFooter">
				<button className="btn btn-primary">Details</button>
				<span className="favIcon"><i className="fas fa-heart" onClick={() => actions.addElementListArr(props.title)}></i></span>
				</div>
			</div>

		</div>
	</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	height: PropTypes.number,
	gender: PropTypes.string,
	addFunc: PropTypes.func
};

export default Card;