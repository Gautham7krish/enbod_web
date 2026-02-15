import React, { useEffect, useRef } from 'react';

const NanotechBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        // Configuration for a cinematic, technical feel
        const particleCount = 100;
        const connectionDistance = 150;
        const colors = {
            particle: 'rgba(255, 255, 255, 0.5)',
            line: 'rgba(150, 160, 180, 0.3)',
            glow: 'rgba(255, 255, 255, 0.1)'
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.reset(true);
            }

            reset(initial = false) {
                this.x = Math.random() * width;
                this.y = initial ? Math.random() * height : -20;
                this.size = Math.random() * 2 + 0.5;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = Math.random() * 0.5 + 0.2; // Drifting down slightly
                this.opacity = Math.random() * 0.5 + 0.1;
                this.pulse = Math.random() * Math.PI;
                this.pulseSpeed = Math.random() * 0.03 + 0.015;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.pulse += this.pulseSpeed;

                // Subtle drift and boundary check
                if (this.y > height + 20) this.y = -20;
                if (this.y < -20) this.y = height + 20;
                if (this.x < -20) this.x = width + 20;
                if (this.x > width + 20) this.x = -20;
            }

            draw() {
                const alpha = this.opacity * (0.5 + Math.sin(this.pulse) * 0.5);
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;

                // Cinematic glow for nodes
                ctx.shadowBlur = alpha * 15;
                ctx.shadowColor = 'rgba(255, 255, 255, 0.3)';

                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        const init = () => {
            handleResize();
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const drawConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        const alpha = (1 - dist / connectionDistance) * 0.5;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(200, 210, 230, ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Background ambient glow
            const gradient = ctx.createRadialGradient(width * 0.3, height * 0.4, 0, width * 0.3, height * 0.4, width * 0.6);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.03)');
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            drawConnections();
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        };

        init();
        animate();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 1,
                pointerEvents: 'none',
                opacity: 0.8
            }}
        />
    );
};

export default NanotechBackground;
