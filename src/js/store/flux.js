const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlAPI: 'https://www.swapi.tech/api',
			peopleData: [],
			planetData: [],
			list: [],
			peopleDetail: [],
			planetDetail: [],
		},

		actions: {

			getPeopleDetail:  (id) => {
				fetch(getStore().urlAPI.concat("/people/",id)).then(response=>{
					if(response.ok){
						return response.json()
					}
					throw new Error("fail to get people details")
				}).then(responseAddJSON =>{
					console.log("Response add json", responseAddJSON)
					setStore({peopleDetail:[responseAddJSON.result.properties]})
				}).catch(err =>{
					console.error(err.message)
				})
				},
			// Use getActions to call a function within a fuction

			addElementListArr: (inputValue) => {
				setStore({list:[...getStore().list, inputValue]})
				},

			deleteElement: (index) => {
				let temp = getStore().list;
				temp.splice(index, 1);
				setStore({list:[...getStore().list]});
				console.log(`Se ha eliminado el elemento ${index} de la lista`);
				},

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
				// setStore({peopleData: peopleData});
					
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
				// setStore({planetData: planetData});
				//console.log({planetData:res.results})
					
			})
			.catch((err) => console.error(err)); 
			}
		}
	};
};

export default getState;
