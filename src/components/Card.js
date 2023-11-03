import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <h2>{meal.strMeal}</h2>
          <p>Origine : {meal.strArea}</p>

          <button className="source-button">
            <a href={meal.strSource}>Source</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
