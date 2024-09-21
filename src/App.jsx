import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Tital from "./Components/Tital/Tital";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="container">
        <Tital subTital="OUR PROGRAM" tital="What we offer" />
        <Programs />
        <About />
        <Tital subTital="GALLERY " tital="Campus Photos " />
        <Campus />
        <Tital subTital="TESTIMONIALS " tital="What student says" />
        <Testimonials />
        <Tital subTital="CONTACT US " tital="Get in touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
