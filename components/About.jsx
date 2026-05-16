"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Users } from "lucide-react";

export default function About() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <img
              src="/about.avif"
              alt="Students"
              className="rounded-[40px] shadow-2xl object-cover w-full h-[500px]"
            />

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-8 left-8 bg-white rounded-3xl shadow-2xl px-6 py-5 border border-gray-100"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                12+
              </h3>

              <p className="text-gray-500 text-sm">
                Years of Excellence
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            
            <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-4 py-2 text-blue-700 text-sm font-medium mb-6">
              ABOUT JGUNI
            </div>

        
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Building Future Careers Through
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Modern Education
              </span>
            </h2>

        
            <p className="text-slate-600 text-lg mt-6 leading-relaxed">
              We provide world-class education with modern learning
              experiences, industry partnerships, and expert faculty
              to help students become future-ready professionals.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-5">

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-2xl text-blue-600">
                  <GraduationCap size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Industry-Focused Learning
                  </h4>

                  <p className="text-slate-500 text-sm">
                    Learn through practical exposure and real projects.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-2xl text-purple-600">
                  <Award size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Certified Programs
                  </h4>

                  <p className="text-slate-500 text-sm">
                    Career-ready curriculum with recognized certifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-2xl text-pink-600">
                  <Users size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Student Community
                  </h4>

                  <p className="text-slate-500 text-sm">
                    A thriving ecosystem for growth and networking.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="mt-10 cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-7 py-4 rounded-full font-medium shadow-lg hover:scale-105 transition duration-300">
              Discover More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}