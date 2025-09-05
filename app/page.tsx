import TransitionPage from "@/components/TransitionPage";
import Introduction from "@/components/Introduction";
import CoverStars from "@/components/CoverStars";
import CoverPortals from "@/components/CoverPortals";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Fondo de estrellas */}
      <CoverStars />

      {/* Portales */}
      <CoverPortals />

      {/* Contenido principal */}
      <div
        className="
          relative z-20 flex flex-col items-center 
          px-4 
          pt-16 sm:pt-20 md:pt-24 
          pb-[7rem] sm:pb-[8rem] md:pb-[10rem]
          min-h-screen
          justify-start sm:justify-center
        "
      >
        <TransitionPage>
          <div className="w-full max-w-4xl text-center">
            <Introduction />
          </div>
        </TransitionPage>
      </div>

      {/* Rick fijo en la esquina */}
      <img
        src="/image-9.png"
        alt="Personaje estilo Rick y Morty"
        className="
          fixed bottom-0 right-0 
          w-24 sm:w-32 md:w-48 lg:w-60 
          pointer-events-none select-none z-10
        "
      />
    </main>
  );
}
