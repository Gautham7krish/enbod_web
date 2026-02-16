import React, { useRef, useEffect } from 'react';

const GlowingSun = () => {
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
                const angle = Math.random() * Math.PI * 2;
                const dist = 50 + Math.random() * 150;
                this.x = canvas.width / 2 + Math.cos(angle) * dist;
                this.y = canvas.height / 2 + Math.sin(angle) * dist;
                this.size = Math.random() * 3 + 1;
                this.speed = 0.5 + Math.random() * 1;
                this.angle = angle;
                this.life = 1;
                this.decay = 0.005 + Math.random() * 0.01;
            }

            update() {
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;
                this.life -= this.decay;
                if (this.life <= 0) this.reset();
            }

            draw() {
                const alpha = this.life * 0.4;
                ctx.fillStyle = `rgba(255, 140, 0, ${alpha})`;
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#ff6600';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        const particles = Array.from({ length: 150 }, () => new Particle());

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

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

            // Outer Radiant Halo
            const pulse = 0.5 + Math.sin(Date.now() * 0.001) * 0.2;
            const haloGradient = ctx.createRadialGradient(centerX, centerY, 120, centerX, centerY, 300);
            haloGradient.addColorStop(0, `rgba(255, 100, 0, ${0.2 * pulse})`);
            haloGradient.addColorStop(1, 'transparent');

            ctx.fillStyle = haloGradient;
            ctx.beginPath();
            ctx.arc(centerX, centerY, 300, 0, Math.PI * 2);
            ctx.fill();

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

export default GlowingSun;
