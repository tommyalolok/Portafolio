"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 z-0 w-full h-full"
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { 
            value: 80, 
            density: { enable: true, width: 800, height: 800 } 
          },
          size: { value: { min: 1, max: 4 } },
          move: { 
            enable: true, 
            speed: 1.2, 
            direction: "none", 
            outModes: { default: "bounce" } 
          },
          opacity: { value: 0.8 },
          shape: { type: "circle" },
          color: { 
            value: ["#39ff14", "#00ffff", "#ff00ff", "#ffff00"] // 💫 estilo Rick & Morty
          },
          links: {
            enable: true,
            distance: 140,
            color: "#39ff14",
            opacity: 0.3,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: { enable: true },
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
