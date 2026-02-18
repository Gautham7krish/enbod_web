import React, { useRef, useEffect } from 'react';

const GlowingSun = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const draw = () => {
            if (canvas && canvas.parentElement) {
                canvas.width = canvas.parentElement.clientWidth;
                canvas.height = canvas.parentElement.clientHeight;
            }

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            // Core Glow
            const coreGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 120);
            coreGradient.addColorStop(0, '#ffcc00');
            coreGradient.addColorStop(0.3, '#ff8800');
            coreGradient.addColorStop(1, 'transparent');

            ctx.fillStyle = coreGradient;
            ctx.beginPath();
            ctx.arc(centerX, centerY, 120, 0, Math.PI * 2);
            ctx.fill();

            // Outer Halo (Static)
            const haloGradient = ctx.createRadialGradient(centerX, centerY, 120, centerX, centerY, 300);
            haloGradient.addColorStop(0, 'rgba(255, 100, 0, 0.2)');
            haloGradient.addColorStop(1, 'transparent');

            ctx.fillStyle = haloGradient;
            ctx.beginPath();
            ctx.arc(centerX, centerY, 300, 0, Math.PI * 2);
            ctx.fill();
        };

        window.addEventListener('resize', draw);
        draw();

        return () => {
            window.removeEventListener('resize', draw);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', mixBlendMode: 'screen' }} />;
};

export default GlowingSun;
