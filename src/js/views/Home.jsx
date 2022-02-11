import React, { useEffect, useState } from "react";
import "../../styles/Home.css";
import { useContext } from "react";
import { Context } from "../store/appContext.js";
import Card from "../component/Card.jsx";

export const Home = () => {

  const [peopleList, setPeopleList] = useState([])
  const [planetList, setPlanetList] = useState([])

  const { store, actions } = useContext(Context);

  // useEffect(() => {
  //   actions.LoadDataPlanet();
  // }, []);

  // useEffect(() => {
  //   actions.LoadDataPeople();
  // }, []);

  useEffect(()=> {
    setPeopleList(
      store.peopleData.map((peopleData, index) => {
        return (
            <div className="d-flex col-3" key={index}>
              <Card               
                title={peopleData.name}
                gender={peopleData.gender}
                height={peopleData.height}
              />
            </div>
        );
      })
    )
  },[store.peopleData])

  useEffect(()=>{
    setPlanetList(
      store.planetData.map((planetData, index) => {
        return (
            <div className="d-flex col-3" key={index} >
              <Card title={planetData.name} />
            </div>
        );
      })
    )
  },[store.planetData])

  return (
    <>
      <div className="row">
      </div>

      <div className="row overflow-auto">
        {store.planetData.map((planetData, index) => {
          return (
              <div className="d-flex col-3">
                <Card key={index} title={planetData.name} uid={planetData.uid} />
              </div>
          );
        })} 
      </div>
    </>
  );
};
