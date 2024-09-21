import React, { useRef } from "react";
import "./Testimonials.css";

import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Willion Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Willion Jackson is a dedicated educator at Edusity, USA. He
                believes in the power of technology to transform education.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Sarah Thompson</h3>
                  <span>Harvard University, USA</span>
                </div>
              </div>
              <p>
                Sarah Thompson is a professor at Harvard University. Her
                research focuses on sustainable energy solutions and climate
                change.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Arjun Patel</h3>
                  <span>IIT Bombay, India</span>
                </div>
              </div>
              <p>
                Arjun Patel is a leading researcher at IIT Bombay. His work in
                artificial intelligence is renowned globally.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Emily Wong</h3>
                  <span>University of Toronto, Canada</span>
                </div>
              </div>
              <p>
                Emily Wong teaches computer science at the University of
                Toronto.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
