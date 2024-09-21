import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";

import mail_icon from "../../assets/mail-icon.png";

import phone_icon from "../../assets/phone-icon.png";

import location_icon from "../../assets/location-icon.png";

import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "074d259d-9fcf-4b47-9a27-814e77fd227d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact ">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          For more information or inquiries, please reach out via email at
          [university email address] or call us at Our campus is located atWe
          look forward to assisting you with your academic journey. Visit our
          website for more details.
        </p>

        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@University.usa
          </li>
          <li>
            <img src={phone_icon}></img> (123) 456-7890.
          </li>
          <li>
            <img src={location_icon}></img>University Ave, College Town, CA
            94000.
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label> Your Name</label>

          <input
            type="text"
            name="name"
            placeholder="enter your name"
            required
          />
          <label> Phone Number</label>

          <input
            type="tel"
            name="phone"
            placeholder="enter your mobile number "
            required
          />

          <label>Write Your Message Here</label>

          <textarea
            name="messages"
            rows="6"
            placeholder="enter your message "
            required
          ></textarea>
          <button type="submit " className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
