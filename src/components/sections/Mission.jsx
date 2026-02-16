import React from 'react';
import "./Mission.css";
import chessImage from '../../assets/chess.png';

const Mission = () => {
    return (
        <div className="mission-container">
            <div className="mission-header-grid">
                <div className="mission-vision-card">
                    <h2 className="mission-vision-title">Mission</h2>
                    <p className="mission-vision-text">
                        We pioneer precision-driven innovations that seamlessly
                        integrate intelligence, technology, and human expertise-
                        reshaping industries, redefining well-being, and driving a
                        smarter, sustainable future.
                    </p>
                </div>

                <div className="mission-vision-card">
                    <h2 className="mission-vision-title">Vision</h2>
                    <p className="mission-vision-text">
                        To elevate human well-being by embedding precision,
                        intelligence, and proactive innovation into everyday
                        life- effortless, intuitive, and universal.
                    </p>
                </div>
            </div>

            {/* RIGHT IMAGE/CANVAS */}
            <div className="hero-right">
                <img src={chessImage} alt="AI figure" />

            </div>
        </div>
    );
};

export default Mission;
