import React, { useState } from "react";

const UserDestination = () => {
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureStation, setDepartureStation] = useState("");
  const [arrivalStation, setArrivalStation] = useState("");

  const handleDepartureDateChange = (e) => {
    setDepartureDate(e.target.value);
  };

  const handleArrivalDateChange = (e) => {
    setArrivalDate(e.target.value);
  };

  const handleDepartureStationChange = (e) => {
    setDepartureStation(e.target.value);
  };

  const handleArrivalStationChange = (e) => {
    setArrivalStation(e.target.value);
  };

  //   useEffect(() => {
  //     fetch(
  //       `http://transport.opendata.ch/v1/connections?from=${departureStation}&to=${arrivalStation}`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const connections = data.connections;
  //         connections.forEach((row) => {
  //           const departureTime = row.from.departure;
  //           const arrivalTime = row.to.arrival;
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error + "The station is not available");
  //       });
  //   }, []);

  function getOpenDataStations() {
    return fetch(
      `http://transport.opendata.ch/v1/connections?from=${departureStation}&to=${arrivalStation}`
    )
      .then((res) => res.json())
      .then((data) => {
        const connections = data.connections;
        return connections.map((row) => {
          const departureTime = row.from.departure;
          const arrivalTime = row.to.arrival;
  
          return {
            departureTime: departureTime,
            arrivalTime: arrivalTime
          };
        });
      })
      .catch((error) => {
        console.log(error + "The station is not available");
      });
  }

  function getIRailStations() {}

  const handleFormSubmit = () => {
    getOpenDataStations()
      .then((openDataStations) => {
        console.log(openDataStations[0].departureTime);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <span>
        <label>
          <input
            id="id_dep"
            type="text"
            // value={departureStation}
            onChange={handleDepartureStationChange}
            placeholder="From"
          />
        </label>
      </span>
      <span>
        <label>
          <input
            id="id_arri"
            type="text"
            // value={arrivalStation}
            onChange={handleArrivalStationChange}
            placeholder="To"
          />
        </label>
      </span>
      <span>
        <label>
          {!departureDate && <span className="placeholder">Select a date</span>}
          <input
            id="id_dep_time"
            type="date"
            value={departureDate}
            onChange={handleDepartureDateChange}
            className={departureDate ? "has-value" : ""}
          />
        </label>
      </span>
      <span>
        <label>
          {!arrivalDate && <span className="placeholder">Select a date</span>}
          <input
            id="id_arri_time"
            type="date"
            value={arrivalDate}
            onChange={handleArrivalDateChange}
            className={arrivalDate ? "has-value" : ""}
          />
        </label>
      </span>
      <span>
        <input
          type="submit"
          id="id_submit_button"
          value="Search"
          onClick={handleFormSubmit}
        />
      </span>
    </div>
  );
};

export default UserDestination;
