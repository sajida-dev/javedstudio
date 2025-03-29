"use client";  // Required for Next.js (App Router)
import { useEffect, useRef } from "react";

const CosmosBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const particles = [];
        const numParticles = 100;
        const mouse = { x: null, y: null };

        class Particle {
            constructor(x, y, radius, speed) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.speed = speed;
                this.angle = Math.random() * Math.PI * 2;
            }

            update() {
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.angle = Math.PI - this.angle;
                if (this.y < 0 || this.y > canvas.height) this.angle = -this.angle;

                // Mouse interaction
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    this.x -= dx * 0.02;
                    this.y -= dy * 0.02;
                } else if (distance < 200) {
                    this.x += dx * 0.01;
                    this.y += dy * 0.01;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
                ctx.fill();
            }
        }

        for (let i = 0; i < numParticles; i++) {
            particles.push(
                new Particle(
                    Math.random() * canvas.width,
                    Math.random() * canvas.height,
                    Math.random() * 4 + 1,
                    Math.random() * 0.5 + 0.2
                )
            );
        }

        const connectParticles = () => {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dist = Math.hypot(
                        particles[a].x - particles[b].x,
                        particles[a].y - particles[b].y
                    );

                    if (dist < 120) {
                        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 120})`;
                        ctx.lineWidth = 0.7;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        window.addEventListener("mousemove", (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        });

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            connectParticles();
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", (event) => {
                mouse.x = event.clientX;
                mouse.y = event.clientY;
            });
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full"
        />
    );
};

export default CosmosBackground;
