import React, { useRef, useEffect } from 'react';

const WaveBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const mouse = { x: -1000, y: -1000 };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        resize();

        // 3D Grid constants
        const SEPARATION = 45, AMOUNTX = 75, AMOUNTY = 45;
        let count = 0;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 4; // Shift focus to the left portion
            const centerY = canvas.height / 2 + 100;
            const focalLength = 1000;

            // Advanced dot visibility - dark grey with nice contrast
            ctx.fillStyle = 'rgba(120, 120, 130, 0.75)';

            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    // Position in 3D space
                    const posX = (ix * SEPARATION) - ((AMOUNTX * SEPARATION) / 2);
                    const posZ = (iy * SEPARATION) - ((AMOUNTY * SEPARATION) / 2);

                    // Multi-layered wave height logic
                    let posY = (Math.sin((ix + count) * 0.3) * 50) +
                        (Math.sin((iy + count) * 0.5) * 50);

                    // 3D Projection
                    const scale = focalLength / (focalLength + posZ + 500);
                    const x2d = (posX * scale) + centerX;
                    const y2d = (posY * scale) + centerY;

                    // Mouse Interaction Layer
                    const dx = x2d - mouse.x;
                    const dy = y2d - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const forceArea = 200 * scale;

                    let offsetX = 0;
                    let offsetY = 0;

                    if (dist < forceArea) {
                        const force = (forceArea - dist) / forceArea;
                        offsetX = (dx / dist) * force * 50 * scale;
                        offsetY = (dy / dist) * force * 50 * scale;
                    }

                    // Only draw in the left portion (masking the video area)
                    if (x2d < canvas.width * 0.55) {
                        const alphaRatio = Math.max(0, 1 - (x2d / (canvas.width * 0.5)));
                        const depthAlpha = scale * 0.8 * alphaRatio;

                        ctx.globalAlpha = depthAlpha;

                        const size = 1.8 * scale;
                        ctx.beginPath();
                        ctx.arc(x2d + offsetX, y2d + offsetY, size, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }

            count += 0.08;
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
            ctx.globalAlpha = 1;
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%', // Use full width but clip in JS logic
                height: '100%',
                zIndex: 5,
                pointerEvents: 'none'
            }}
        />
    );
};

export default WaveBackground;
