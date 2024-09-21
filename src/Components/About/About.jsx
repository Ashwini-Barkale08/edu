import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>

      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Leading Learning, Creating Leaders</h2>
        <p>
          we are dedicated to pioneering education and developing future
          leaders. Our innovative programs and expert faculty guide students
          through a transformative learning experience, equipping them with the
          knowledge and skills to excel in their careers and make a positive
          impact on the world. Join us to be part of a legacy of leadership and
          excellence.
        </p>

        <p>
          We understand that education is not just about acquiring knowledge,
          but also about developing the skills necessary for leadership. Our
          dedicated faculty members mentor students, guiding them through a
          transformative learning experience that builds confidence and fosters
          leadership qualities. Through various programs, including internships,
          research projects, and community engagement, students gain real-world
          insights and prepare to become influential leaders in their
          professions.
        </p>

        <p>
          Our vibrant campus community plays a crucial role in nurturing future
          leaders. We offer a range of extracurricular activities, student
          organizations, and leadership development opportunities that
          complement academic learning. By creating an inclusive and dynamic
          environment, we empower our students to explore their passions,
          develop their strengths, and make a meaningful impact on the world. At
          , we are not just educating students; we are shaping the leaders of{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
