import React from 'react';

const BackgroundChanger = ({ bgImage, bgColor }) => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: bgImage,
                backgroundColor: bgColor || '#000',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: -1,

            }}
        />
    );
};

export default BackgroundChanger;
