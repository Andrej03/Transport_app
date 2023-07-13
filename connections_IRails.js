import React, { useEffect, useState } from "react";

function IRail_API() {
  const departureStation = userInput.departureStation;
  const arrivalStation = userInput.arrivalStation;

  useEffect(() => {
    fetch(`https://api.irail.be/liveboard/?station=${departureStation}&arrdep=${departureTime}&lang=en&format=json`)
    .then((res) => res.json())
      .then((data) => {
        const connections = data.connections;
        connections.forEach((row) => {
          const departureTime = row.from.departure;
          const arrivalTime = row.to.arrival;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  

  return <div></div>;
};

export default IRail_API;