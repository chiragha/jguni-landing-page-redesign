"use client";
import { Search, Phone, GraduationCap } from "lucide-react";

export default function TopBar() {
  return (
    <header className="w-full border-b bg-white/90 backdrop-blur-lg border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">

      
          <div className="hidden md:flex flex-1 max-w-xs">
            <div className="relative w-full">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search programs..."
                className="w-full rounded-full border border-gray-300 bg-gray-50 py-2.5 pl-11 pr-4 text-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

       
          <div className="flex items-center gap-2 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-full text-white">
              <GraduationCap size={22} />
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-900 tracking-wide">
                JGUNI
              </h1>
              <p className="text-xs text-gray-500">
                Modern Education
              </p>
            </div>
          </div>

       
          <div className="flex items-center gap-3">

            {/* Phone */}
            <div className="hidden lg:flex items-center gap-2 text-gray-700">
              <Phone size={18} className="text-blue-600" />
              <span className="text-sm font-medium">
                +91 9876543210
              </span>
            </div>

            <button className="hidden sm:block border cursor-pointer text-black border-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gradient-to-r  from-blue-600 to-purple-600 transition duration-300">
              Enquiry
            </button>

            <button className="cursor-pointer bg-gradient-to-r  from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:scale-105 transition duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}