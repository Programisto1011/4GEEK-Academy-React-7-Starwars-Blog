import React, { useState, useEffect } from "react";

import ElementList from "./ElementList.jsx";

import "../../styles/List.css";

const List = () => {
	const [inputValue, setInputValue] = useState("");
	const [list, setList] = useState([]);

	const deleteElement = (index) => {
		console.log(list);
		let temp = list;
		temp.splice(index, 1);
		setList([...list]);
		console.log(list);
		console.log(`Se ha eliminado el elemento ${index} de la lista`);
	};

	if (list.length !== 0) {
		var listItems;
		listItems = list.map((inputValue, index) => (
			<ElementList
				key={index}
				name={inputValue}
				handleClick={() => deleteElement(index)}
			/>
		));
	}

	const addElementListArr = () => {
		setList([...list, inputValue]);
		console.log(list);
	};

	return (
		<>
			<div class="container-flex">
				<div className="row d-flex">
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
					/>
					<button
						onClick={() => {
							addElementListArr();
						}}>
						Insert
					</button>
				</div>
				{list.length !== 0 ? listItems : ""}
			</div>
		</>
	);
};

export default List;