import React from "react";
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import "../../styles/Details.css";
import Card from "../component/Card.jsx";

const Details = (props) => {
		// Cargar Personajes
        people = 'https://www.swapi.tech/api/people/'
        puid = document.querySelector('puid');
        LoadPeople: () => {
            //console.log((getStore().urlAPI).concat('/people'))
        fetch((poeple).concat(), {
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

LoadPlanet = () => {
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
}

  return (
    <>
      <div className="container justify-content-center">
        <div className="row">
          <div className="col-6">
            <img src="..." alt={props.name} />
          </div>
          <div className="col-6">
            <h5>{props.name}</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              neque porro fugit eligendi magnam commodi ex doloremque,
              reiciendis sed velit soluta dignissimos aut? Quisquam corrupti
              repellendus debitis iure commodi incidunt.
            </p>
          </div>
        </div>
        <div className="row">
          <table>
          <tbody>
					{table.map((row, i) => (
						<tr key={i}>
							{row.map((column, j) => (
								<td key={j}>
									<div className="item">{column}</div>
								</td>
							))}
						</tr>
					))}
				</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

Details.propTypes = {
  title: PropTypes.string,
  height: PropTypes.number,
  gender: PropTypes.string,
};

export default Card;
