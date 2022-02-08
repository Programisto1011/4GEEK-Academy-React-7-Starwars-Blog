import React from "react";
import * as PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "../store/appContext.js";

// include your styles into the webpack bundle
import "../../styles/ElementList.css";

import DeleteIcon from "../../img/DeleteIcon.png";

//create your first component

const ElementList = (props) => {

	const { store, actions } = useContext(Context);

	return (
		<div className="row d-flex">
			<div className="bg-light nameList">{props.name}</div>
			<div className="text-center ">
				<button class="buttonList" onClick={() =>  actions.deleteElement(props.index)}>
                <img 
                    height="20"
                    className="d-inline-block align-top"
                    alt="Delete icon" src={DeleteIcon} />
				</button>
			</div>
		</div>
	);
};

ElementList.propTypes = {
	name: PropTypes.string,
};

export default ElementList;