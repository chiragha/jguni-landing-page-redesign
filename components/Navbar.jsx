"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import ProgramMegaMenu from "./ProgramMegaMenu";

const navLinks = [
  "Campus",
  "Industry Linkage",
  "Collaborations",
  "Discover Us",
  "Media",
  "Career",
  "Contact Us",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 relative">
            {/* PROGRAMS */}
            <div
              className="relative"
              onMouseEnter={() => setShowPrograms(true)}
              onMouseLeave={() => setShowPrograms(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-blue-600 transition duration-300 relative group">
                Programmes
                <ChevronDown
                  size={18}
                  className={`transition duration-300 ${
                    showPrograms ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* MEGA MENU */}
              <ProgramMegaMenu show={showPrograms} />
            </div>

            {/* OTHER LINKS */}
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 font-medium hover:text-blue-600 transition duration-300 relative group"
              >
                {item}

                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* BUTTON */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:scale-105 transition duration-300">
              Explore Programs
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="flex flex-col px-6 py-5 gap-5">
            <div className="w-full">
              {/* MOBILE PROGRAM BUTTON */}
              <button
                onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                className="w-full flex items-center justify-between text-gray-700 font-medium hover:text-blue-600 transition duration-300"
              >
                Programmes
                <ChevronDown
                  size={18}
                  className={`transition duration-300 ${
                    mobileProgramsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* MOBILE SUBMENU */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  mobileProgramsOpen
                    ? "max-h-[600px] opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 border-l border-gray-200 space-y-3">
                  {/* Undergraduate */}
                  <div>
                    <h4 className="text-blue-600 font-semibold text-sm mb-2">
                      Undergraduate
                    </h4>

                    <div className="space-y-2">
                      <a href="#" className="block text-sm text-slate-600">
                        BBA | BBA (Hons)
                      </a>

                      <a href="#" className="block text-sm text-slate-600">
                        BCA | BCA (Hons)
                      </a>

                      <a href="#" className="block text-sm text-slate-600">
                        B.Tech Programs
                      </a>
                    </div>
                  </div>

                  {/* Postgraduate */}
                  <div>
                    <h4 className="text-blue-600 font-semibold text-sm mb-2">
                      Postgraduate
                    </h4>

                    <div className="space-y-2">
                      <a href="#" className="block text-sm text-slate-600">
                        MBA
                      </a>

                      <a href="#" className="block text-sm text-slate-600">
                        MCA
                      </a>

                      <a href="#" className="block text-sm text-slate-600">
                        MSc IT
                      </a>
                    </div>
                  </div>

                  {/* Resources */}
                  <div>
                    <h4 className="text-blue-600 font-semibold text-sm mb-2">
                      Resources
                    </h4>

                    <div className="space-y-2">
                      <a href="#" className="block text-sm text-slate-600">
                        NEP 2020
                      </a>

                      <a href="#" className="block text-sm text-slate-600">
                        Question Bank
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 cursor-pointer font-medium hover:text-blue-600 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full font-medium shadow-md hover:scale-[1.02] transition duration-300">
              Explore Programs
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
