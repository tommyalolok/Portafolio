// app/(routes)/services/page.tsx
"use client";

import Image from "next/image";
import CoverStars from "@/components/CoverStars";

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      {/* Fondo de partículas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <CoverStars />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        {/* Título */}
        <h1 className="text-4xl font-bold text-center mb-12">
          Mis <span className="text-green-400">Servicios</span>
        </h1>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <article
            className="p-6 rounded-2xl border border-white/20 text-center 
                       transition-all duration-300 
                       hover:shadow-[0_0_22px_#39ff14] hover:border-[#39ff14]"
          >
            <Image
              src="/image-1.jpg"
              alt="Bases de Datos"
              width={300}
              height={300}
              className="mx-auto mb-4 rounded-xl"
            />
            <h3 className="text-xl font-semibold mb-2">Bases de Datos</h3>
            <p className="text-gray-300 text-sm">
              Diseño y administración de bases de datos para proyectos pequeños
              y medianos.
            </p>
          </article>

          {/* Servicio 2 */}
          <article
            className="p-6 rounded-2xl border border-white/20 text-center 
                       transition-all duration-300 
                       hover:shadow-[0_0_22px_#39ff14] hover:border-[#39ff14]"
          >
            <Image
              src="/image-2.jpg"
              alt="Frontend"
              width={300}
              height={300}
              className="mx-auto mb-4 rounded-xl"
            />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <p className="text-gray-300 text-sm">
              Interfaces modernas, rápidas y responsivas con React, Next.js y
              Tailwind CSS.
            </p>
          </article>

          {/* Servicio 3 */}
          <article
            className="p-6 rounded-2xl border border-white/20 text-center 
                       transition-all duration-300 
                       hover:shadow-[0_0_22px_#39ff14] hover:border-[#39ff14]"
          >
            <Image
              src="/image-3.jpg"
              alt="Backend"
              width={300}
              height={300}
              className="mx-auto mb-4 rounded-xl"
            />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <p className="text-gray-300 text-sm">
              Creación de APIs y sistemas robustos para soportar aplicaciones
              web y móviles.
            </p>
          </article>
        </div>

        {/* Botón contacto (subido un poco) */}
        <div className="text-center mt-8">
          <a
            href="mailto:tuemail@gmail.com?subject=Servicios&body=Hola%20Tom%C3%A1s%2C%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto..."
            className="px-6 py-3 rounded-lg bg-green-400 text-black font-bold 
                       hover:bg-green-500 transition shadow-[0_0_15px_#39ff14] hover:shadow-[0_0_25px_#39ff14]"
          >
            ✉️ Contacta conmigo
          </a>
        </div>
      </div>
    </div>
  );
}
