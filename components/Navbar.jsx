"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  "Programmes ",
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

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
      
          <div className="hidden md:flex items-center gap-8 mx-auto">
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

        
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:scale-105 transition duration-300">
              Explore Programs
            </button>
          </div>

      
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>


      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="flex flex-col px-6 py-5 gap-5">
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 font-medium hover:text-blue-600 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            <button className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full font-medium shadow-md hover:scale-[1.02] transition duration-300">
              Explore Programs
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
