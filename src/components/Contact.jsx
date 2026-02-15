import React, { useState } from "react";
import "./Contact.css";

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
                <div className="mobile-only contact-mobile-header">
                    <h2 className="contact-main-hero-title">
                        Power of <span className="blue-text">Innovation</span>
                    </h2>
                </div>

                {/* CONTACT SECTION */}
                <div className="contact-wrapper">
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

                            <button type="submit" className="submit-btn" style={{ cursor: 'pointer' }}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                {/* FOOTER / CONTACT DETAILS */}
                <footer className="footer">
                    <div className="footer-container">
                        <div className="footer-item">
                            <span className="footer-icon">📞</span>
                            <span className="footer-text">+91 9847 984 954</span>
                        </div>
                        <div className="footer-item">
                            <span className="footer-icon">📱</span>
                            <span className="footer-text">+91 9847 978 875</span>
                        </div>
                        <div className="footer-item">
                            <span className="footer-icon">🌐</span>
                            <span className="footer-text">www.enbod.in</span>
                        </div>
                        <div className="footer-item">
                            <span className="footer-icon">✉️</span>
                            <span className="footer-text">info@enbod.in</span>
                        </div>
                        <div className="footer-item">
                            <span className="footer-icon">📍</span>
                            <span className="footer-text">Bengaluru, Karnataka</span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default ContactForm;
