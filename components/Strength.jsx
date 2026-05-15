"use client";

import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Briefcase,
  Globe,
  Award,
  Building2,
} from "lucide-react";

const strengths = [
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    desc: "Learn from experienced educators and industry professionals.",
  },
  {
    icon: Briefcase,
    title: "Strong Placements",
    desc: "Top companies hiring students through campus opportunities.",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    desc: "International collaborations and learning experiences.",
  },
  {
    icon: Building2,
    title: "Industry Partnerships",
    desc: "Practical learning through real-world business collaborations.",
  },
  {
    icon: Award,
    title: "Certified Excellence",
    desc: "Recognized programs with quality-driven education standards.",
  },
  {
    icon: Users,
    title: "Student Community",
    desc: "A vibrant environment for growth, networking, and innovation.",
  },
];

export default function Strength() {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-4 py-2 text-blue-700 text-sm font-medium mb-5">
            OUR STRENGTH
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Why Students Choose
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}JGUNI
            </span>
          </h2>

          <p className="text-slate-600 mt-5 text-base md:text-lg leading-relaxed">
            We empower students through innovation, quality education,
            practical exposure, and career-focused opportunities.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {strengths.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group bg-white rounded-[24px] p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Icon */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-md mb-4 group-hover:scale-110 transition duration-300"
                >
                  <Icon size={22} />
                </motion.div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}