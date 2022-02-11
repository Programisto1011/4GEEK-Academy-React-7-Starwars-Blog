import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import { Home } from "./views/Home.jsx";
import injectContext from "./store/appContext";

import { OwnNavbar } from "./component/OwnNavbar.jsx";
import Details from "./views/Details.jsx"


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				
					<OwnNavbar/>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/Details/:id">
							<Details />
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
