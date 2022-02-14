import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import "../../styles/Details.css";
import Card from "../component/Card.jsx";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const Details = () => {

  const {store,actions} = useContext(Context);

  let params = useParams();
  console.log(`id: ${params.id}`);
  useEffect(
    ()=>{
      actions.getPeopleDetail(params.id)
    },[]
  );
  
  console.log("People details in vista :", store.peopleDetail);
  
  return (

    <div className="Details container justify-content-center">
    {store.peopleDetail.map((detail, index) =>{
      return(
        <>
          <div key={index} className="row">
            <div className="col-lg-6">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/250px-Star_Wars_Logo.svg.png" alt={store.peopleDetail.name} /> 
            </div>
            <div className="col-lg-6">   
              <h5>{detail.name}</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                neque porro fugit eligendi magnam commodi ex doloremque,
                reiciendis sed velit soluta dignissimos aut? Quisquam corrupti
                repellendus debitis iure commodi incidunt.
              </p>       
            </div>
          </div>
          <div class="row">
            <table class="default"> 
              <tr>
                <th>Birth year</th>
                <th>Eye color</th>
                <th>Gender</th>
              </tr>
              <tr>
                <td>{detail.birth_year}</td>
                <td>{detail.eye_color}</td>
                <td>{detail.gender}</td>      
              </tr> 
            </table>
          </div>
        </>
      )})}
      </div>
  );
};


export default Details;
