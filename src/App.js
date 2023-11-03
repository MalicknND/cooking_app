import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => setData(res.data.meals));
  }, [searchTerm]);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Rechercher..."
          id="searchInput"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="wrapper">
        {data.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </>
  );
};

export default App;
