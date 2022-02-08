import React from "react";
import ElementList from "./ElementList.jsx";
import { useContext } from "react";
import { Context } from "../store/appContext.js";

import "../../styles/List.css";

const List = () => {

	const { store, actions } = useContext(Context);

	if (store.list.length !== 0) {
		var listItems;
		listItems = store.list.map((inputValue, index) => (
			<ElementList
				key={index}
				name={inputValue}
				handleClick={() => actions.deleteElement(index)}
			/>
		));
	}

	return (
		<>
			<div className="container-flex">
				<div className="row d-flex">
				</div>
				{store.list.length !== 0 ? listItems : ""}
			</div>
		</>
	);
};

export default List;