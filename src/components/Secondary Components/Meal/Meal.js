import React from "react";

const Meal = ({ meal }) => {
  const { name, img, p, price } = meal;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top w-50 mx-auto" alt="menu" />
        <div className="card-body text-center">
          <h5 className="card-title overflow-hidden">{name}</h5>
          <p className="card-text text-muted">{p}</p>
          <h5 className="overflow-hidden">${price}</h5>
        </div>
      </div>
    </div>
  );
};

export default Meal;
