"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PlayCircle, Star, MessageCircle } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
const marqueeItems = [
  "Innovation",
  "Career Growth",
  "Industry Learning",
  "Global Exposure",
  "Modern Education",
  "Student Success",
];
const backgroundImages = [
  "/slider1.avif",
  "/slider2.avif",
  "/slider3.avif",
  "/slider4.avif",
];
export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8 }}
          className="absolute inset-0 b w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImages[currentImage]})`,
          }}
        />
      </AnimatePresence>
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/30" />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-900/35 to-slate-950/20" />

      {/* Blur Effects */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-600/20 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-20 lg:pt-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Social Media Icons */}
          {/* Social Media Icons */}
          <div className="hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 flex-col  gap-4">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:scale-110 transition duration-300"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:scale-110 transition duration-300"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:scale-110 transition duration-300"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-4 py-2 text-white mb-6">
              <Star size={16} className="text-yellow-400" />
              <span className="text-sm">Trusted by 10,000+ Students</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Empowering
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Future Leaders
              </span>
              <br />
              Through Smart Education
            </h1>

            {/* Paragraph */}
            <p className="text-gray-300 text-lg mt-6 max-w-xl leading-relaxed">
              Experience modern learning, industry-ready programs, expert
              mentorship, and limitless opportunities for future success.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {/* Get Started */}
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-4 rounded-full text-white font-semibold shadow-xl hover:scale-105 transition duration-300">
                Get Started
                <ArrowRight size={18} />
              </button>

              {/* Watch Demo */}
              <button className="flex items-center justify-center gap-2 border border-white/30 bg-white/10 backdrop-blur-md px-7 py-4 rounded-full text-white hover:bg-white/20 transition duration-300">
                <PlayCircle size={18} />
                Watch Demo
              </button>
            </div>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-4 mt-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl px-5 py-4 text-white">
                <h3 className="text-2xl font-bold">4.9★</h3>
                <p className="text-sm text-gray-300">Student Rating</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl px-5 py-4 text-white">
                <h3 className="text-2xl font-bold">10K+</h3>
                <p className="text-sm text-gray-300">Trusted Students</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
            }}
            className="relative flex justify-center items-center mt-12 lg:mt-0"
          >
            {/* Main Circle Image */}
            <div className="relative z-10">
              <motion.img
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
                alt="Student"
                className="w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] lg:w-[450px] lg:h-[450px] rounded-full object-cover border-[10px] border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              />
            </div>

            {/* Top Floating Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
             className="absolute top-0 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 z-20 scale-75 sm:scale-90 md:scale-100 scale-75 sm:scale-90 md:scale-100"
            >
              <div className="bg-white rounded-3xl px-5 py-4 shadow-2xl flex items-center gap-4 min-w-[220px]">
                <div className="text-3xl">🎓</div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                  <p className="text-gray-500 text-sm">Certified Instructors</p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Left Card */}
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-10 left-2 sm:left-5 z-20 scale-75 sm:scale-90 md:scale-100"
            >
              <div className="bg-white rounded-3xl px-5 py-4 shadow-2xl flex items-center gap-4 min-w-[220px]">
                <div className="text-3xl">📚</div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">1000+</h3>
                  <p className="text-gray-500 text-sm">Programs</p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Right Card */}
            <motion.div
              animate={{
                x: [0, 8, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
             className="absolute bottom-2 right-2 sm:right-5 z-20 scale-75 sm:scale-90 md:scale-100"
            >
              <div className="bg-white rounded-3xl px-5 py-4 shadow-2xl flex items-center gap-4 min-w-[220px]">
                <div className="text-3xl">⭐</div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">120K+</h3>
                  <p className="text-gray-500 text-sm">Students Trust Us</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative border-t border-white/10 bg-white/5 backdrop-blur-md overflow-hidden py-5">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-slate-950 to-transparent z-10" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-slate-950 to-transparent z-10" />

        <div className="flex whitespace-nowrap animate-marquee gap-12 text-white font-medium text-lg">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-4 rounded-full shadow-2xl hover:scale-105 transition duration-300 animate-pulse">
          <MessageCircle size={22} />

          <span className="hidden sm:block font-medium">Ask Anything</span>
        </button>
      </div>
    </section>
  );
}
