import React from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
    return (
        <div className="video-background-container">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="bg-video"
            >
                <source src="/file.mp4" type="video/mp4" />
            </video>
            <div className="video-overlay"></div>
        </div>
    );
};

export default VideoBackground;
