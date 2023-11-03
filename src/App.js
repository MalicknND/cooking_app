import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  // État pour stocker les données des plats et le terme de recherche
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Utilisez useEffect pour déclencher la recherche lorsque searchTerm change
  useEffect(() => {
    // Effectuez une requête vers l'API MealDB en utilisant axios
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => setData(res.data.meals || [])); // Assurez-vous que data est toujours un tableau
  }, [searchTerm]);

  return (
    <>
      <div className="search-container">
        {/* Champ d'entrée pour saisir le terme de recherche */}
        <input
          type="text"
          placeholder="Rechercher..."
          id="searchInput"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="wrapper">
        {/* Mappez les données des plats et affichez-les en utilisant le composant Card */}
        {data.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}

        {/* Message s'affiche lorsque la recherche ne renvoie aucun résultat */}
        {data.length === 0 && (
          <p className="no-results-message">
            Aucun résultat trouvé pour cette recherche.
          </p>
        )}
      </div>
    </>
  );
};

export default App;
