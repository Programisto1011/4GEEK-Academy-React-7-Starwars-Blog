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
  console.log(params.id);
  useEffect(
    ()=>{
      actions.getPeopleDetail(params.id)
    },[]
  );
  

  return (
    <>
      <div className="container justify-content-center">
        <div className="row">
          <div className="col-6">
            <img src="..." alt={store.peopleDetail.name} />
          </div>
          <div className="col-6">
            <h5>{store.peopleDetail.name}</h5>
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
					{store.peopleDetail.map((row, i) => (
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
