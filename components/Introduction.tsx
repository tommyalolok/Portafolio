"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="relative z-20 w-full">
      {/* Nombre arriba a la derecha (solo en desktop) */}
      <div className="hidden md:block absolute top-6 right-8 text-lg md:text-2xl font-funky text-green-400 drop-shadow-[0_0_8px_#39ff14]">
        Tomás Soto
      </div>

      {/* Contenido principal */}
      <div
        className="
          z-20 grid items-center p-6 
          md:grid-cols-2 md:h-[calc(100vh-120px)]
          gap-6
        "
      >
        {/* Avatar flotante */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[350px] md:h-[350px]">
            <Image
              src="/home-4.png"
              priority
              fill
              alt="Avatar"
              className="object-contain animate-float"
            />
          </div>
        </div>

        {/* Texto animado */}
        <div className="flex flex-col justify-start md:justify-center max-w-md mx-auto md:mx-0 mt-6 md:mt-0">
          <h1 className="mb-4 text-xl leading-tight text-center md:text-left md:text-5xl md:mb-8 font-funky">
            Las ideas son portales... <br />
            <TypeAnimation
              sequence={[
                "puedes abrirlos con código",
                1200,
                "puedes viajar en sus algoritmos",
                1200,
                "puedes hackear la realidad",
                1200,
                "puedes crear tu propio universo",
                1200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-green-400 drop-shadow-[0_0_8px_#39ff14]"
            />
          </h1>

          {/* Descripción */}
          <p className="mb-3 text-sm sm:text-base md:text-lg font-sans text-gray-300 text-center md:text-left">
            Como desarrollador frontend y creador de contenido, me dedico a
            combinar diseño y funcionalidad para crear experiencias digitales
            impactantes y accesibles.
          </p>

          {/* Botón de contacto */}
          <div className="flex justify-center md:justify-start mt-3">
            <a
              href="mailto:playsotoking@gmail.com?subject=Quiero%20cotizar%20un%20proyecto&body=Hola%20Tomás%2C%20me%20gustaría%20cotizar%20un%20proyecto%20contigo."
              className="px-6 py-3 transition-all border-2 cursor-pointer text-sm sm:text-md 
              text-green-400 border-green-400 rounded-xl 
              hover:shadow-[0_0_15px_#39ff14] hover:text-white"
            >
              ✉️ Contáctame
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
