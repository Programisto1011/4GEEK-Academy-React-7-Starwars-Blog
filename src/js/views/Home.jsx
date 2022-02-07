import React, { useEffect } from "react";
import "../../styles/Home.css";
import { useContext } from "react";
import { Context } from "../store/appContext.js";
import Card from "../component/Card.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.LoadDataPlanet();
  }, []);

  useEffect(() => {
    actions.LoadDataPeople();
  }, []);

  return (
    <>
      <div className="row">
        {store.peopleData.map((peopleData, index) => {
          return (
            <>
              <div className="d-flex col-3">
                <Card
                  key={index}
                  title={peopleData.name}
                  gender={peopleData.gender}
                  height={peopleData.height}
                />
              </div>
            </>
          );
        })}
      </div>

      <div className="row">
        {store.planetData.map((planetData, index) => {
          return (
            <>
              <div className="d-flex col-3">
                <Card key={index} title={planetData.name} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
