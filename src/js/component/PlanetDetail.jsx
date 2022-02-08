import React from "react";
import * as PropTypes from "prop-types";
import { Link } from "react-router-dom";
import '../../styles/PlanetDetail.css'

const PlanetDetail = (props) => {

    return (
        <>
        <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/250px-Star_Wars_Logo.svg.png" alt="Star Wars Characters" />
            </div>
                <div className="col-lg-6">
                    <div className="col-md">Name</div>
                    <div className="col-md">Diameter</div>
                    <div className="col-md">Rotation Period</div>
                    <div className="col-md">Orbital Period</div>
                    <div className="col-md"> Gravity</div>
                    <div className="col-md">Population</div>
                    <div className="col-md">Climate</div>
                    <div className="col-md">Terrain</div>
                    <div className="col-md">Water Surface</div>
            </div>
        </div>
        <div className="row">
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat hic at quaerat fugiat reiciendis veritatis eveniet molestias quod cum aut. Ab nostrum nobis asperiores eaque libero aperiam sit vero! Neque.
        </p>
        </div>
        </div>
        </>
    )
}

PeopleDetail.propTypes = {
};

export default PlanetDetail