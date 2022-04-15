import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./FoodMenu.css";

const FoodMenu = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("meal.json")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);
  return (
    <div className='container my-5'>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {meals.map((meal) => (
          <Meal key={meal.id} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
