"use client";

import { motion } from "framer-motion";

const partners = [
  "/partner1.png",
  "/partner2.png",
  "/partner3.png",
  "/partner4.png",
  "/partner5.png",
  "/partner6.png",
  "/partner7.png",
  "/partner8.png",
];

export default function Partners() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-4 py-2 text-blue-700 text-sm font-medium mb-5">
            OUR PARTNERS
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Trusted
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Global Companies
            </span>
          </h2>

          <p className="text-slate-600 mt-5 text-lg leading-relaxed">
            We collaborate with leading MNCs to provide better career opportunities.
          </p>
        </motion.div>

        {/* Logo Slider */}
        <div className="overflow-hidden relative">

          {/* Fade effect left */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />

          {/* Fade effect right */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            className="flex items-center gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={index}
                className="min-w-[220px] h-[130px] bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center px-8 hover:-translate-y-1"
              >
                <img
                  src={logo}
                  alt="partner"
                  className="h-24 cursor-pointer w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}