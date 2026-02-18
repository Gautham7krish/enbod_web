import React, { useState } from "react";
import "./Contact.css";
import { FaPhoneAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data:", form);
        alert("Form submitted!");
    };

    return (
        <div className="contact-page-container">
            <div className="contact-scroll-wrapper">
                {/* Mobile Header Title */}



                <div className="contact-desktop-wrapper">
                    <div className="contact-right-content">
                        <div className="contact-card">
                            <h1 className="contact-title">Let's Connect</h1>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={form.name}
                                    onChange={handleChange}
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={form.email}
                                    onChange={handleChange}
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Mobile Number"
                                    value={form.phone}
                                    onChange={handleChange}
                                />

                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                />

                                <button type="submit" className="submit-btn">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* FOOTER / CONTACT DETAILS */}
                <footer className="contact-footer">
                    <div className="footer-container">
                        <div className="footer-column left-align">
                            <div className="footer-item">
                                <FaPhoneAlt className="footer-icon" />
                                <span className="footer-text">+91 9847 984 954</span>
                            </div>
                            <div className="footer-item">
                                <FaWhatsapp className="footer-icon" />
                                <span className="footer-text">+91 9847 978 875</span>
                            </div>
                        </div>

                        <div className="footer-column center-align">
                            <div className="footer-item">
                                <FaGlobe className="footer-icon" />
                                <span className="footer-text">www.enbod.in</span>
                            </div>
                        </div>
                        <div className="footer-column left-align">
                            <div className="footer-item">
                                <FaEnvelope className="footer-icon" />
                                <span className="footer-text">info@enbod.in</span>
                            </div>
                            <div className="footer-item">
                                <FaMapMarkerAlt className="footer-icon" />
                                <span className="footer-text">Bengaluru, Karnataka</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div >
    );
};

export default ContactForm;
