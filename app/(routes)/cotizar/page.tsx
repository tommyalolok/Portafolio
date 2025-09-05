"use client";

import TransitionPage from "@/components/TransitionPage";
import CoverStars from "@/components/CoverStars";

export default function CotizarPage() {
  return (
    <>
      <TransitionPage />
      <div className="relative min-h-screen w-full bg-black text-white overflow-hidden flex flex-col items-center justify-center px-6">
        {/* Fondo de partículas */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <CoverStars />
        </div>

        {/* Contenido */}
        <h1 className="text-3xl md:text-5xl font-bold text-green-400 drop-shadow-[0_0_10px_#39ff14] text-center mb-6">
          ¡Hablemos de tu proyecto!
        </h1>
        <p className="text-gray-300 text-center max-w-xl mb-10">
          Si quieres cotizar un proyecto conmigo, puedes escribirme directamente
          por WhatsApp con un mensaje predefinido.
        </p>

        {/* Botón de WhatsApp */}
        <a
          href="https://wa.me/56912345678?text=Hola%20Tomás%2C%20quiero%20cotizar%20un%20proyecto%20contigo."
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-green-500 text-black font-bold rounded-xl 
                     hover:bg-green-400 transition-all 
                     shadow-[0_0_20px_#39ff14] hover:shadow-[0_0_35px_#39ff14] hover:scale-105"
        >
          💬 Cotizar por WhatsApp
        </a>
      </div>
    </>
  );
}
