import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import './InteractivePlexus.css';

const InteractivePlexus = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const options = {
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: false,
                    mode: "repulse", 
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#0055ff", // Xətlərin rəngi
                distance: 150,
                enable: true,
                opacity: 0.9,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 120, // Nöqtələrin sayı
            },
            opacity: {
                value: 0.3,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    };


    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
            className="interactive-plexus-canvas"
        />
    );
};

export default InteractivePlexus;