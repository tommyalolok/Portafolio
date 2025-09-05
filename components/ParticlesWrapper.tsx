"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

interface ParticlesWrapperProps {
  id: string;
  options: ISourceOptions;
  className?: string;
}

const ParticlesWrapper = ({ id, options, className }: ParticlesWrapperProps) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // carga la versión ligera de tsparticles
    }).then(() => {
      setReady(true);
    });
  }, []);

  if (!ready) return null;

  return <Particles id={id} options={options} className={className} />;
};

export default ParticlesWrapper;
