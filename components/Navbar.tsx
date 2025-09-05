"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaCogs, FaBriefcase } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", icon: <FaHome /> },
    { href: "/about-me", icon: <FaUser /> },
    { href: "/services", icon: <FaCogs /> },
    { href: "/portfolio", icon: <FaBriefcase /> },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-lg border border-green-400/50 rounded-full px-6 py-3 flex items-center gap-6 z-50 shadow-lg">
      {links.map(({ href, icon }) => {
        const active = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className={`flex items-center justify-center text-xl transition-all duration-300 ${
              active ? "text-green-400" : "text-white hover:text-green-300"
            }`}
          >
            {icon}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
