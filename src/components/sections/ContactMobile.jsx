import React, { useState } from 'react';
import './ContactMobile.css';
import { FaPhoneAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactMobile = () => {
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
    };

    return (
        <div className="cm-container">
            <div className="cm-overlay"></div>

            <div className="cm-scroll">
                <h1 className="cm-heading">
                    Power of<br />
                    <span>Innovation</span>
                </h1>

                <div className="cm-card">
                    <h2 className="cm-card-title">Let's Connect</h2>

                    <form className="cm-form" onSubmit={handleSubmit}>
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
                        <button type="submit" className="cm-submit">Submit</button>
                    </form>
                </div>

                <div className="cm-info">
                    <div className="cm-info-row">
                        <FaPhoneAlt />
                        <span>+91 9847 984 954</span>
                    </div>
                    <div className="cm-info-row">
                        <FaWhatsapp />
                        <span>+91 9847 978 875</span>
                    </div>
                    <div className="cm-info-row">
                        <FaGlobe />
                        <span>www.enbod.in</span>
                    </div>
                    <div className="cm-info-row">
                        <FaEnvelope />
                        <span>info@enbod.in</span>
                    </div>
                    <div className="cm-info-row">
                        <FaMapMarkerAlt />
                        <span>Bengaluru, Karnataka</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMobile;
