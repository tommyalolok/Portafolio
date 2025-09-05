"use client";

import type { ISourceOptions } from "@tsparticles/engine";
import ParticlesWrapper from "./ParticlesWrapper";

const CoverStars = () => {
  const options: ISourceOptions = {
    fpsLimit: 60,
    background: { color: "#000000" },
    interactivity: {
      events: {},
    },
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          width: 800,
          height: 800,
        },
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
      move: {
        enable: true,
        speed: 0.2,
        direction: "none",
        outModes: { default: "out" },
      },
      opacity: { value: 1 },
    },
    detectRetina: true,
  };

  return (
    <ParticlesWrapper
      id="tsparticles-stars"
      options={options}
      className="absolute inset-0 h-full w-full z-0"
    />
  );
};

export default CoverStars;
