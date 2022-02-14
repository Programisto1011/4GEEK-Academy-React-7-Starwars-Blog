import React, { useContext } from "react";
import * as PropTypes from "prop-types";
import '../../styles/Card.css'
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

const Card = (props) => {
	const { store, actions } = useContext(Context);
	return (
	<div className="container justify-content-center">
		<div className="card">
			<div className="card-body">
				<img className="card-img-top img-flex" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/250px-Star_Wars_Logo.svg.png" alt="..." />
				<h5 className="card-tittle">{props.title}</h5>
				<div className="cardFooter">
				<Link to={props.link}>
					<button className="btn btn-primary">Details</button>
				</Link>
				<span className="favIcon"><i className="fas fa-heart" onClick={() => actions.addElementListArr(props.title)}></i></span>
				</div>
				<div><p className="peopleUid planetUid">{props.uid}</p></div>
			</div>

		</div>
	</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	uid: PropTypes.string,
	link: PropTypes.string,
};

export default Card;