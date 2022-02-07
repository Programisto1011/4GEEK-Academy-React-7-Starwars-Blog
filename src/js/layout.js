import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import { Home } from "./views/Home.jsx";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { OwnNavbar } from "./component/OwnNavbar.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	//const [list, setList] = useState([])
	const list = ["hola", "fdjslfdkjdfsl"];

	const addElementListArr = (inputValue) => {
		setList([...list, inputValue]);
		console.log(list);
	};

	return (
		<div>
			<BrowserRouter basename={basename}>
				
					<OwnNavbar list={list}/>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					
				
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
