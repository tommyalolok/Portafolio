"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionPage = ({ children }: { children?: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative w-full h-full">
        {/* Portal verde de transición */}
        <motion.div
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 30, opacity: 0 }}
          exit={{ scale: 0, opacity: 0.8 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 z-50 w-20 h-20 rounded-full bg-green-400 shadow-[0_0_60px_#39ff14] -translate-x-1/2 -translate-y-1/2"
        />

        {/* Contenido de la página (si existe) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionPage;
