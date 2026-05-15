"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Preloader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[99999] bg-white flex items-center justify-center overflow-hidden"
        >
          {/* Glow Background */}
          <div className="absolute w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[120px]" />

          <div className="relative flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [1, 1.08, 1],
                opacity: 1,
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 p-5 rounded-full shadow-2xl"
            >
              <GraduationCap
                className="text-white"
                size={45}
              />
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 text-3xl font-bold text-slate-900"
            >
              JGUNI
            </motion.h1>

            <p className="text-gray-500 mt-2 text-sm">
              Empowering Future Leaders
            </p>

            {/* Loading line */}
            <div className="mt-6 w-52 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "250%" }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-20 h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}