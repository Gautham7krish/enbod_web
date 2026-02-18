import React, { useRef, useEffect } from 'react';

const AboutParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;

        const resize = () => {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const particles = [];
        const count = 160;
        const connectionDist = 150;

        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 2.5 + 0.8,
                opacity: Math.random() * 0.6 + 0.2,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: Math.random() * 0.03 + 0.01,
                glow: Math.random() > 0.85,
            });
        }

        const glowSpots = [
            { x: 0.15, y: 0.25, radius: 0.2, intensity: 0.12 },
            { x: 0.45, y: 0.3, radius: 0.15, intensity: 0.08 },
            { x: 0.8, y: 0.6, radius: 0.18, intensity: 0.06 },
        ];

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            glowSpots.forEach(spot => {
                const gradient = ctx.createRadialGradient(
                    spot.x * canvas.width, spot.y * canvas.height, 0,
                    spot.x * canvas.width, spot.y * canvas.height, spot.radius * canvas.width
                );
                gradient.addColorStop(0, `rgba(60, 120, 220, ${spot.intensity})`);
                gradient.addColorStop(1, 'transparent');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            });

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < connectionDist) {
                        const alpha = (1 - dist / connectionDist) * 0.35;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(120, 160, 220, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.pulse += p.pulseSpeed;

                if (p.x < -10) p.x = canvas.width + 10;
                if (p.x > canvas.width + 10) p.x = -10;
                if (p.y < -10) p.y = canvas.height + 10;
                if (p.y > canvas.height + 10) p.y = -10;

                const pulseFactor = 0.85 + 0.15 * Math.sin(p.pulse);
                const alpha = p.opacity * pulseFactor;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(150, 200, 255, ${alpha * 0.5})`;
                ctx.fill();
            });

            animId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1,
            }}
        />
    );
};

export default AboutParticles;
