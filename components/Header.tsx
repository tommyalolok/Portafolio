"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaTelegramPlane,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-6 py-3 bg-gradient-to-b from-green-600 to-black backdrop-blur-md shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={48}
            height={48}
            className="object-contain drop-shadow-[0_0_8px_#39ff14]"
          />
        </Link>
      </div>

      {/* Redes sociales */}
      <div className="flex gap-4 text-xl text-white">
        <a
          href="https://www.facebook.com/tomas.soto.35436/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/10 hover:bg-blue-500/20 transition-all"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/tommy__soto/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/10 hover:bg-pink-500/20 transition-all"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/56999028450"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/10 hover:bg-green-500/20 transition-all"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://tiktok.com/@tu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/10 hover:bg-gray-900/20 transition-all"
        >
          <FaTiktok />
        </a>
        <a
          href="https://t.me/tu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/10 hover:bg-blue-400/20 transition-all"
        >
          <FaTelegramPlane />
        </a>
      </div>
    </header>
  );
};

export default Header;
