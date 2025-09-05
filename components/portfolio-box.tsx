import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react"; 


export interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  url: string;
}


interface PortfolioBoxProps {
  data: PortfolioItem;
}

const PortfolioBox = ({ data }: PortfolioBoxProps) => {
  const { title, image, url } = data;

  return (
    <div className="p-6 border border-teal-50 rounded-xl bg-white/5 backdrop-blur-sm shadow-md flex flex-col items-center max-w-xs transition-transform hover:scale-105 hover:shadow-lg">
      {/* Título */}
      <h3 className="mb-4 text-xl font-bold text-white text-center">{title}</h3>

      {/* Imagen */}
      <Image
        src={image}
        alt={title}
        width={220}
        height={220}
        className="rounded-2xl mx-auto"
      />

      {/* Botón con ícono Play */}
      <div className="flex gap-4 mt-6 justify-center">
        <Link
          href={url}
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-teal-400 to-teal-600 hover:opacity-90 text-white font-semibold shadow-md text-sm transition-all"
        >
          <Play size={18} />
          <span>Ver</span>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioBox;
