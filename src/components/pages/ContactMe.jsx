import React, { useState } from "react";
import '../../styles/contactForm.css';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errMessages = {
      name: formData.name.trim() === "" ? "Name is Required" : "",
      email: formData.email.trim() === "" ? "Your Email is Invalid": "",
      message: formData.message.trim() === "" ? "Message is Required" : "",
    };

    // Check if user input a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(formData.email && !emailRegex.test(formData.email)) {
      errMessages.email = "Message is Required";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      ...errMessages,
    }));

    const validationErrors = Object.values(errMessages).some((error) => error !== "");
    
    if (validationErrors) {
      alert("Please fill out all required fields correctly.");
      return;
    }

    alert("Form succesfully submitted!");

    // Reset form data after submission 
    setFormData({
        name: '',
        email: '',
        message: '',
    });

  };

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label className= "form-label" htmlFor="name">Name:</label>
        <input className = "form-input" id="name" type="text" name="name" value={formData.name} onChange={handleChange}/>

        <label className = "form-label" htmlFor="email">Email Address:</label>
        <input className="form-input" id="email" type="email" name="email" value={formData.email} onChange={handleChange}/>

        <label className="form-label" htmlFor="message">Message:</label>
        <textarea className="form-textarea" id="message" name="message" value={formData.message} onChange={handleChange}></textarea>

        {/* All error messages appear */}
        {errors.name && <p className="form-error" id="name-error">{errors.name}</p>}
        {errors.email && <p className="form-error">{errors.email}</p>}
        {errors.message && <p className="form-error">{errors.message}</p>}



        <button className="form-button" type="submit">Submit</button>
      </form>
    </section>
  );
}
