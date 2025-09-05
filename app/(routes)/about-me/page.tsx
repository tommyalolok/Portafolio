// app/(routes)/about/page.tsx
"use client";

import Image from "next/image";
import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/TransitionPage";
import CoverStars from "@/components/CoverStars";
import Timeline from "@/components/time-line";
import { FaGithub } from "react-icons/fa";

export default function AboutPage() {
  return (
    <>
      <TransitionPage />

      <div className="relative z-20 w-full min-h-screen bg-black text-white overflow-hidden flex flex-col justify-center">
        {/* Fondo de estrellas (no bloquea clics) */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <CoverStars />
        </div>

        <ContainerPage>
          {/* Avatar */}
          <div className="flex justify-center mb-6 relative z-10">
            <div className="relative w-[200px] h-[200px] md:w-[260px] md:h-[260px]">
              <Image
                src="/avatar-1.png"
                alt="Tomás Soto Avatar"
                fill
                priority
                className="object-contain rounded-xl shadow-[0_0_30px_#39ff14]"
              />
            </div>
          </div>

          {/* Título */}
          <h1 className="text-3xl leading-tight text-center md:text-5xl font-funky text-green-400 drop-shadow-[0_0_8px_#39ff14] relative z-10 mt-4">
            Sobre mí
          </h1>

          {/* Descripción */}
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-center text-gray-300 relative z-10">
            Soy <span className="text-green-400 font-bold">Tomás Soto</span>, un
            frontend developer que comenzó su viaje en{" "}
            <span className="font-bold">2024</span>.  
            Apasionado por el código, el diseño y la creatividad, busco construir
            experiencias digitales modernas, accesibles y con un toque único.
          </p>

          {/* Botón GitHub */}
          <div className="mt-10 flex justify-center relative z-20">
            <a
              href="https://github.com/tommyalolok"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 
                        bg-green-500 text-black font-bold 
                        text-lg rounded-2xl 
                        hover:bg-green-400 transition-all 
                        shadow-[0_0_20px_#39ff14] hover:shadow-[0_0_40px_#39ff14] hover:scale-105"
            >
              <FaGithub size={26} />
              <span>Visita mi GitHub</span>
            </a>
          </div>

          {/* Timeline */}
          <div className="mt-12 relative z-10">
            <Timeline />
          </div>
        </ContainerPage>
      </div>
    </>
  );
}
