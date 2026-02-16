import React, { useRef, useEffect } from 'react';

const SilhouetteCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            if (canvas && canvas.parentElement) {
                canvas.width = canvas.parentElement.clientWidth;
                canvas.height = canvas.parentElement.clientHeight;
            }
        };

        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = canvas.width / 2 + (Math.random() - 0.5) * 200;
                this.y = canvas.height / 2 + (Math.random() - 0.5) * 400;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.life = Math.random() * 0.5 + 0.5;
                this.decay = Math.random() * 0.01 + 0.005;
                this.color = `rgba(255, ${180 + Math.random() * 75}, ${50 + Math.random() * 50}, `;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life -= this.decay;

                // Attract to a vague human shape (central core + head + torso)
                const dx = canvas.width / 2 - this.x;
                const dy = canvas.height / 2 - this.y;

                // Head area
                const hdx = canvas.width / 2 - this.x;
                const hdy = (canvas.height / 2 - 150) - this.y;
                const hdist = Math.sqrt(hdx * hdx + hdy * hdy);

                // Core area
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 300) {
                    this.vx += dx * 0.0001;
                    this.vy += dy * 0.0001;
                }

                if (this.life <= 0) this.reset();
            }

            draw() {
                // Focus particles into a silhouette-like density
                const alpha = this.life * 0.6;
                ctx.fillStyle = this.color + alpha + ')';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();

                // Add bloom/glow
                if (Math.random() > 0.95) {
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = 'rgba(255, 200, 50, 0.5)';
                } else {
                    ctx.shadowBlur = 0;
                }
            }
        }

        const particles = Array.from({ length: 300 }, () => new Particle());

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw a central "Radiance Core"
            const gradient = ctx.createRadialGradient(
                canvas.width / 2, canvas.height / 2, 0,
                canvas.width / 2, canvas.height / 2, 80
            );
            gradient.addColorStop(0, 'rgba(255, 220, 100, 0.3)');
            gradient.addColorStop(1, 'rgba(255, 200, 50, 0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw a soft silhouette mask/glow
            ctx.beginPath();
            // Head
            ctx.arc(canvas.width / 2, canvas.height / 2 - 120, 40, 0, Math.PI * 2);
            // Torso
            ctx.ellipse(canvas.width / 2, canvas.height / 2, 70, 120, 0, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 180, 50, 0.05)';
            ctx.fill();
            ctx.filter = 'blur(40px)';
            ctx.fill();
            ctx.filter = 'none';

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', mixBlendMode: 'screen' }} />;
};

export default SilhouetteCanvas;
