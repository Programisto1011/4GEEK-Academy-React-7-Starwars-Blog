import React, { useState, useEffect } from "react";

import ElementList from "./ElementList.jsx";

import "../../styles/List.css";

const List = (props) => {

        const handleClick = (ev) => {
            props.handleClick(ev);
        };

	const deleteElement = (index) => {
		console.log(props.list);
		let temp = props.list;
		temp.splice(index, 1);
		setList([...props.list]);
		console.log(props.list);
		console.log(`Se ha eliminado el elemento ${index} de la lista`);
	};

	if (props.list.length !== 0) {
		var listItems;
		listItems = props.list.map((inputValue, index) => (
			<ElementList
				key={index}
				name={inputValue}
				handleClick={() => deleteElement(index)}
			/>
		));
	}

	return (
		<>
			<div class="container-flex">
				<div className="row d-flex">
				</div>
				{props.list.length !== 0 ? listItems : ""}
			</div>
		</>
	);
};

export default List;