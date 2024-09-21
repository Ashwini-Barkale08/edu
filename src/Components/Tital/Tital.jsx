import React from "react";
import "./Tital.css";
const Tital = ({ subTital, tital }) => {
  return (
    <div className="tital">
      <p>{subTital}</p>
      <h2>{tital}</h2>
    </div>
  );
};

export default Tital;
