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

    <div className="container justify-content-center">
    {store.peopleDetail.map((detail, index) =>{
      return(
        <div key={index} className="row">
          <div className="col-6">
            {/* <img src="..." alt={store.peopleDetail.name} /> */}
          </div>
          <div className="col-6">   
                <h5>{detail.height}</h5>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                neque porro fugit eligendi magnam commodi ex doloremque,
                reiciendis sed velit soluta dignissimos aut? Quisquam corrupti
                repellendus debitis iure commodi incidunt.
                </p>             
          </div>
        </div>
      )})}
      </div>
  );
};


export default Details;
