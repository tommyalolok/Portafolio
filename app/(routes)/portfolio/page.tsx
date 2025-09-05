import PortfolioBox, { PortfolioItem } from "@/components/portfolio-box";
import Image from "next/image";
import CoverStars from "@/components/CoverStars";

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Proyectos en desarrollo",
    image: "/desarrollo.png",
    url: "https://github.com/tommyalolok",
  },
  {
    id: 2,
    title: "My Project",
    image: "/pagina.png",
    url: "https://github.com/tommyalolok",
  },
  {
    id: 3,
    title: "Cotizar proyecto",
    image: "/cotizar.png",
    url: "/cotizar",
  },
];

export default function PortfolioPage() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center">
      {/* Fondo de partículas */}
      <div className="absolute inset-0 z-0">
        <CoverStars />
      </div>

      {/* Rick flotante arriba a la derecha */}
      <div className="absolute top-6 right-6 w-[100px] h-[100px] md:w-[150px] md:h-[150px] animate-float z-30">
        <Image
          src="/rick.png"
          alt="Rick flotante"
          fill
          className="object-contain"
        />
      </div>

      {/* Grid de proyectos centrado */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20 px-6 py-12">
        {portfolioData.map((item) => (
          <PortfolioBox key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
