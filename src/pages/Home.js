import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import "./home.scss";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=beef")
      .then((res) => setData(res.data.meals));
  }, []);

  return (
    <div className="wrapper">
      {data.map((meal) => (
        <Card key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default Home;
