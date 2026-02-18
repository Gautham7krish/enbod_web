import React, { useEffect, useRef } from 'react';

const NanotechBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        const mouse = { x: -1000, y: -1000 };
        const mouseRadius = 120;

        const particleCount = window.innerWidth <= 768 ? 40 : 100;
        const connectionDistance = 150;

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        class Particle {
            constructor() {
                this.reset(true);
            }

            reset(initial = false) {
                this.originX = Math.random() * width;
                this.originY = initial ? Math.random() * height : Math.random() * height;
                this.x = this.originX;
                this.y = this.originY;
                this.size = Math.random() * 2 + 0.5;
                this.vx = 0;
                this.vy = 0;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.pulse = Math.random() * Math.PI;
                this.pulseSpeed = Math.random() * 0.03 + 0.015;
            }

            update() {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouseRadius) {
                    const force = (mouseRadius - dist) / mouseRadius;
                    const angle = Math.atan2(dy, dx);
                    this.vx += Math.cos(angle) * force * 1.2;
                    this.vy += Math.sin(angle) * force * 1.2;
                }

                this.vx += (this.originX - this.x) * 0.02;
                this.vy += (this.originY - this.y) * 0.02;

                this.vx *= 0.92;
                this.vy *= 0.92;

                this.x += this.vx;
                this.y += this.vy;
                this.pulse += this.pulseSpeed;

                if (this.y > height + 20) this.y = -20;
                if (this.y < -20) this.y = height + 20;
                if (this.x < -20) this.x = width + 20;
                if (this.x > width + 20) this.x = -20;
            }

            draw() {
                const alpha = this.opacity * (0.5 + Math.sin(this.pulse) * 0.5);
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(80, 80, 100, ${alpha})`;
                ctx.shadowBlur = alpha * 10;
                ctx.shadowColor = 'rgba(80, 80, 100, 0.2)';
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
                        const alpha = (1 - dist / connectionDistance) * 0.3;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(100, 110, 130, ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }

                const mdx = particles[i].x - mouse.x;
                const mdy = particles[i].y - mouse.y;
                const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

                if (mDist < mouseRadius) {
                    const alpha = (1 - mDist / mouseRadius) * 0.4;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(101, 97, 251, ${alpha})`;
                    ctx.lineWidth = 0.6;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            const gradient = ctx.createRadialGradient(width * 0.3, height * 0.4, 0, width * 0.3, height * 0.4, width * 0.6);
            gradient.addColorStop(0, 'rgba(100, 100, 120, 0.02)');
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
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
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
