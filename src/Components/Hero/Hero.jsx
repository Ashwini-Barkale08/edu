import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Your Journey to Lifelong Learning Begins Here</h1>
        <p>
          Education is a continuous journey, and we believe in fostering a love
          for learning that lasts a lifetime. Our programs are designed to
          engage students at every stage of their educational journey, ensuring
          that learning is always a dynamic and ongoing process.
        </p>

        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
