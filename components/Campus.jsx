"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, Trees, BookOpen } from "lucide-react";

const campusImages = [
  {
    image: "/campus1.avif",
    title: "Smart Classrooms",
  },
  {
    image: "/campus2.avif",
    title: "Modern Library",
  },
  {
    image: "/campus3.avif",
    title: "Innovation Labs",
  },
  {
    image: "/campus4.avif",
    title: "Sports Arena",
  },
];

const features = [
  {
    icon: Building2,
    title: "Modern Infrastructure",
    desc: "Designed with world-class facilities and smart learning spaces.",
  },
  {
    icon: BookOpen,
    title: "Advanced Learning",
    desc: "Practical exposure with modern classrooms and innovation labs.",
  },
  {
    icon: Trees,
    title: "Green Campus",
    desc: "A peaceful environment that inspires creativity and growth.",
  },
];

export default function Campus() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

         
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

         
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-2 text-blue-700 text-sm font-medium mb-6">
              <MapPin size={16} />
              OUR CAMPUS
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Experience a
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Modern Campus
              </span>
            </h2>

     
            <p className="text-slate-600 text-lg leading-relaxed mt-6">
              Discover a vibrant learning environment with smart classrooms,
              innovation labs, modern infrastructure, and green spaces
              designed to inspire future leaders.
            </p>

      
            <div className="mt-10 space-y-6">

              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl text-white shadow-md">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="text-slate-500 mt-1 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

       
            <button className="mt-10 cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-7 py-4 rounded-full font-medium shadow-lg hover:scale-105 transition duration-300">
              Explore Campus
            </button>
          </motion.div>

   
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

      
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 right-6 z-20 bg-white shadow-2xl rounded-3xl px-6 py-4 border border-gray-100"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                50+
              </h3>

              <p className="text-sm text-slate-500">
                Acres Smart Campus
              </p>
            </motion.div>

   
            <div className="grid grid-cols-2 gap-5">

              {campusImages.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className={`relative overflow-hidden rounded-[30px] group shadow-xl
                    ${index === 0 || index === 3 ? "h-[280px]" : "h-[220px] mt-10"}
                  `}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      
                  <div className="absolute bottom-5 left-5">
                    <h4 className="text-white text-lg font-semibold">
                      {item.title}
                    </h4>
                  </div>

                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}