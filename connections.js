import React, { useEffect } from "react";
import userInput from "./userInput";

const MyComponent = () => {
  const departureStation = userInput.departureStation;
  const arrivalStation = userInput.arrivalStation;

  useEffect(() => {
    fetch(
      `http://transport.opendata.ch/v1/connections?from=${departureStation}&to=${arrivalStation}`
    )
      .then((res) => res.json())
      .then((data) => {
        const connections = data.connections;
        connections.forEach((row) => {
          const departureTime = row.from.departure;
          const arrivalTime = row.to.arrival;
        });
      })
      .catch((error) => {
        console.log(error + "The station is not available");
      });
  }, []);

  function getStations(arrivalStation, departureStation) {
    fetch(
      `http://transport.opendata.ch/v1/connections?from=${departureStation}&to=${arrivalStation}`
    )
      .then((res) => res.json())
      .then((data) => {
        const connections = data.connections;
        connections.forEach((row) => {
          const departureTime = row.from.departure;
          const arrivalTime = row.to.arrival;
        });
      })
      .catch((error) => {
        console.log(error + "The station is not available");
      });
  }

  return <></>;
};

export default MyComponent;

