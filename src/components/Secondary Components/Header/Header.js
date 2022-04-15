import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="bg">
      <div className="d-flex flex-column justify-content-center align-items-center h-75">
        <h1 className="text-center pb-3 overflow-hidden">
          Best food is waiting for your belly
        </h1>
        <div className="text-center">
          <input
            type="text"
            name="Search For Food"
            placeholder="Search Food Items"
            className="input-width"
          />
          <input type="submit" value="Search" />
        </div>
      </div>
    </div>
  );
};

export default Header;
