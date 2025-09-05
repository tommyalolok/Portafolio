"use client";

import type { ISourceOptions } from "@tsparticles/engine";
import ParticlesWrapper from "./ParticlesWrapper";

const CoverPortals = () => {
  const options: ISourceOptions = {
    fpsLimit: 60,
    background: { color: "transparent" },
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        push: { quantity: 1 },
      },
    },
    particles: {
      number: { value: 0 },
      shape: {
        type: "image",
        options: {
          image: [
            {
              src: "/portal.png", // asegúrate que esté en /public
              width: 64,
              height: 64,
            },
          ],
        },
      },
      size: { value: { min: 20, max: 40 } },
      rotate: {
        value: { min: 0, max: 360 },
        direction: "random",
        animation: { enable: true, speed: 15, sync: false },
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        outModes: { default: "bounce" },
      },
      opacity: { value: 1 },
    },
    detectRetina: true,
  };

  return (
    <ParticlesWrapper
      id="tsparticles-portals"
      options={options}
      className="absolute inset-0 h-full w-full z-10"
    />
  );
};

export default CoverPortals;
