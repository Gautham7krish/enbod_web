import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import "./Values.css";
import lotusImage from '../../assets/loctus.png';

const Values = () => {
    const containerRef = useRef(null);
    const [activeValue, setActiveValue] = React.useState(0);

    useGSAP(() => {
        gsap.from('.value-pillar', {
            y: 30,
            opacity: 0,
            duration: 1.5,
            stagger: 0.25,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });
    }, { scope: containerRef });
    const valuesData = [
        {
            title: "Intelligence & Precision",
            subtitle: '"Excellence through precision. Intelligence that evolves."',
            description: "Every solution is built with accuracy, adaptability, and the highest level of expertise."
        },
        {
            title: "Transfiguring Transformation",
            subtitle: '"Driving change that matters."',
            description: "Whether in healthcare, technology, or beyond, Enbod is focused on real-world transformation, not just disruption."
        },
        {
            title: "HCI and Empowerment",
            subtitle: '"Technology that amplifies human potential."',
            description: "Enbod doesn't just create solutions; it empowers industries, professionals, and individuals to achieve more."
        },
        {
            title: "Ethics & integrity",
            subtitle: '"Innovating with integrity, scaling with responsibility."',
            description: "Every advancement is built ethically, transparently, and with a commitment to global well-being."
        },
        {
            title: "Visionary Leadership & Responsible Apporach",
            subtitle: '"Shaping the future with bold decisions."',
            description: "Enbod thrives on visionary leadership, fearless execution, and setting new industry benchmarks."
        }
    ];

    const nextValue = () => {
        setActiveValue((prev) => (prev + 1) % valuesData.length);
    };

    const prevValue = () => {
        setActiveValue((prev) => (prev - 1 + valuesData.length) % valuesData.length);
    };

    return (
        <div className="values-container" ref={containerRef}>
            <div className="values-content">
                {/* Mobile Header Title (Moved above details) */}
                <div className="mobile-only values-mobile-header">
                    <h2 className="values-main-title">Values</h2>
                </div>

                {/* Desktop View: List of all pillars */}
                <div className="values-left desktop-only">
                    {valuesData.map((v, i) => (
                        <div key={i} className="value-pillar">
                            <h3 className="pillar-title">{v.title}</h3>
                            <p className="pillar-subtitle">{v.subtitle}</p>
                            <p className="pillar-description">{v.description}</p>
                        </div>
                    ))}
                </div>

                {/* Mobile View: Carousel of pillars with arrows */}
                <div className="values-carousel-mobile mobile-only">
                    <button className="value-nav-arrow left" onClick={prevValue}>‹</button>
                    <div className="value-pillar active">
                        <h3 className="pillar-title">{valuesData[activeValue].title}</h3>
                        <p className="pillar-subtitle">{valuesData[activeValue].subtitle}</p>
                        <p className="pillar-description">{valuesData[activeValue].description}</p>
                    </div>
                    <button className="value-nav-arrow right" onClick={nextValue}>›</button>
                </div>

                <div className="values-right">
                    <div className="values-visual-header desktop-only">
                        <h2 className="values-main-title">Values</h2>
                    </div>
                    <div className="lotus-visual-container">
                        <div className="hero-right">
                            <img src={lotusImage} alt="AI figure" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Values;
