"use client";

export default function Timeline() {
  return (
    <div className="relative mt-16 mb-10 px-4 max-w-3xl mx-auto">
      {/* Línea central */}
      <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 w-1 h-full bg-green-500/40"></div>

      {/* 2024 */}
      <div className="relative flex items-start sm:items-center mb-12">
        {/* Punto en la línea */}
        <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-black shadow-[0_0_10px_#39ff14]"></div>

        {/* Contenido */}
        <div className="ml-10 sm:ml-0 sm:pl-10 sm:w-1/2 sm:text-left text-center">
          <h3 className="text-xl font-bold text-green-400">2024</h3>
          <p className="mt-2 text-gray-300">Comienzo de estudios en programación y sistemas.</p>
        </div>
      </div>

      {/* Flecha */}
      <div className="relative flex justify-center mb-12">
        <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-green-500 animate-pulse"></div>
      </div>

      {/* 2025 */}
      <div className="relative flex items-start sm:items-center mb-12">
        {/* Punto en la línea */}
        <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-black shadow-[0_0_10px_#39ff14]"></div>

        {/* Contenido */}
        <div className="ml-10 sm:ml-0 sm:pl-10 sm:w-1/2 sm:text-left text-center">
          <h3 className="text-xl font-bold text-green-400">2025</h3>
          <p className="mt-2 text-gray-300">Segundo año de carrera técnica en programación.</p>
        </div>
      </div>

      {/* Flecha en progreso */}
      <div className="relative flex justify-center">
        <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-green-500 animate-pulse"></div>
      </div>

      {/* En progreso */}
      <div className="relative flex items-start sm:items-center mt-12">
        {/* Punto en progreso */}
        <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 w-6 h-6 bg-gray-500 rounded-full border-4 border-black"></div>

        {/* Contenido */}
        <div className="ml-10 sm:ml-0 sm:pl-10 sm:w-1/2 sm:text-left text-center">
          <h3 className="text-xl font-bold text-gray-400">En progreso</h3>
          <p className="mt-2 text-gray-400">El viaje continúa... 🚀</p>
        </div>
      </div>
    </div>
  );
}
