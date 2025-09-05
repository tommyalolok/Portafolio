"use client";

import TransitionPage from "@/components/TransitionPage";
import CoverStars from "@/components/CoverStars";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function CotizarPage() {
  return (
    <>
      <TransitionPage />
      <div className="relative min-h-screen w-full bg-black text-white overflow-hidden flex items-center justify-center">
        {/* Fondo de estrellas */}
        <div className="absolute inset-0 -z-10">
          <CoverStars />
        </div>

        {/* Caja central */}
        <div className="relative z-10 text-center max-w-md p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_0_25px_#39ff14]">
          <h1 className="text-3xl md:text-4xl font-bold text-green-400 drop-shadow-[0_0_8px_#39ff14] mb-6">
            Cotiza tu proyecto 🚀
          </h1>

          <div className="flex flex-col gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/56912345678?text=Hola%20Tomás%2C%20quiero%20cotizar%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3 
                         bg-green-500 text-black font-bold rounded-xl 
                         hover:bg-green-400 transition-all 
                         shadow-[0_0_15px_#39ff14] hover:shadow-[0_0_30px_#39ff14] hover:scale-105"
            >
              <FaWhatsapp size={22} />
              WhatsApp
            </a>

            {/* Gmail */}
            <a
              href="mailto:playsotoking@gmail.com?subject=Cotización%20de%20proyecto&body=Hola%20Tomás%2C%20me%20gustaría%20cotizar%20un%20proyecto."
              className="flex items-center justify-center gap-3 px-6 py-3 
                         bg-white text-black font-bold rounded-xl 
                         hover:bg-gray-200 transition-all 
                         shadow-[0_0_15px_#39ff14] hover:shadow-[0_0_30px_#39ff14] hover:scale-105"
            >
              <FaEnvelope size={20} />
              Gmail
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
