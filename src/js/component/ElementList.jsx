import React from "react";
import * as PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../../styles/ElementList.css";

import DeleteIcon from "../../img/DeleteIcon.png";

//create your first component
const ElementList = (props) => {
	const handleClick = (ev) => {
		props.handleClick(ev);
	};

	return (
		<div className="row d-flex">
			<div class="bg-light nameList">{props.name}</div>
			<div className="text-center ">
				<button class="buttonList" onClick={handleClick}>
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