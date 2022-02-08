const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlAPI: 'https://www.swapi.tech/api',
			peopleData: [],
			planetData: [],
			peopleDetail: [],
			planetDetail: [],
		},

		actions: {
			// Use getActions to call a function within a fuction

			// Cargar Personajes
			LoadDataPeople: () => {
				//console.log((getStore().urlAPI).concat('/people'))
			fetch((getStore().urlAPI).concat('/people'), {
			method: "GET",
			headers: {
				Accept: "application/json",
			},
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Loading People Failed')
			})
			.then((res) => {
				setStore({peopleData:res.results});
				setStore({peopleData: peopleData});
					
			})
			.catch((err) => console.error(err)); 
			},

// Cargar Planetas 

LoadDataPlanet: () => {
	//console.log((getStore().urlAPI).concat('/planets'))
fetch((getStore().urlAPI).concat('/planets'), {
method: "GET",
headers: {
	Accept: "application/json",
},
})
.then((response) => {
	console.log(response);
	if (response.ok) {
		return response.json();
	}
	throw new Error('Loading Planets Failed')
})
.then((res) => {
	setStore({planetData:res.results});
	setStore({planetData: planetData});
	//console.log({planetData:res.results})
		
})
.catch((err) => console.error(err)); 
},


			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			// changeColor: (index, color) => {
			// 	//get the store
				

			createCards : () => {

				const store = getStore();
				// we have to loop the entire demo array to look for the respective index
				// and change its color
				const people = store.peopleData.map((elm, i) => {
					return <Card key={elm.uid} name={elm.name} url={elm.url}/>
				});

				//reset the global store
				
				
			}
		}
	};
};

export default getState;
