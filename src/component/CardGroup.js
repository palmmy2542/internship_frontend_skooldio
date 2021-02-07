import React, { useState, useEffect } from "react";

import FacultyCard from "./FacultyCard";

const baseUrl = "https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json";

function CardGroup() {
  const [data, setData] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  var cards = [];
  async function getData() {
    
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsFetch(true);
      })
      .catch((err) => alert("found some error"));
  }
  useEffect(() => {
    getData();
  }, []);
  if (isFetch) {
    console.log(data);
    cards = data.map((faculty) => <FacultyCard faculty={faculty} />);
  }
  return (
    <div>
      <div className="container">
        <div className="row">{isFetch && cards}</div>
      </div>
    </div>
  );
}

export default CardGroup;
