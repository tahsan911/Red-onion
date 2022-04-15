import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Breakfast from "../Breakfast/Breakfast";
import Dinners from "../Dinners/Dinners";
import Lunch from "../Lunch/Lunch";

const FoodMenu = () => {
  return (
    <div className="container ">
      <div className="text-center overflow-hidden">
        <Routes>
          <Route path="/Breakfast" element={<Breakfast></Breakfast>} />
          <Route path="/Lunch" element={<Lunch></Lunch>} />
          <Route path="/Dinner" element={<Dinners></Dinners>} />
        </Routes>
        <Link className="link my-2" to="/Breakfast">
          Breakfast
        </Link>
        <Link className="link my-2" to="/Lunch">
          Lunch
        </Link>
        <Link className="link my-2" to="/Dinner">
          Dinner
        </Link>
      </div>
    </div>
  );
};

export default FoodMenu;
