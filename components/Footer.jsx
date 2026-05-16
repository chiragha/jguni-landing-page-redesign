"use client";

import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Send,
} from "lucide-react";

const quickLinks = [
  "About Us",
  "Programs",
  "Admissions",
  "Campus Life",
  "Placements",
  "Contact Us",
];

const programs = [
  "B.Tech",
  "MBA",
  "BCA",
  "MCA",
  "Design",
  "Data Science",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-6">

        {/* CTA */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/10 backdrop-blur-xl p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">

          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">

            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Start Your Journey With
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}JGUNI
                </span>
              </h2>

              <p className="text-slate-300 mt-4 text-lg max-w-2xl">
                Join a future-ready university with industry exposure,
                innovation-driven learning, and limitless career opportunities.
              </p>
            </div>

            <button className="group shrink-0 rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2">
              Apply Now
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        {/* Footer Grid */}
       <div className="grid gap-10 mt-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="space-y-4">

            <div className="flex items-center gap-4 justify-center lg:justify-start">

              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl">
                <GraduationCap size={30} />
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  JGUNI
                </h3>

                <p className="text-slate-400 text-sm">
                  Modern Education
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-center lg:text-left">
              Empowering students through innovation, global exposure,
              industry-driven education, and future-ready learning.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">
              Quick Links
            </h3>

            <div className="space-y-4">
              {quickLinks.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="group flex items-center text-slate-400 transition-all duration-300 hover:text-white"
                >
                  <span className="h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-5 mr-0 group-hover:mr-3" />
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">
              Programs
            </h3>

            <div className="space-y-3">
              {programs.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="group flex items-center text-slate-400 transition-all duration-300 hover:text-white"
                >
                  <span className="h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-5 mr-0 group-hover:mr-3" />
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">
              Stay Connected
            </h3>

            <div className="space-y-3">

              {[
                {
                  icon: MapPin,
                  text: "New Delhi, India",
                },
                {
                  icon: Phone,
                  text: "+91 9876543210",
                },
                {
                  icon: Mail,
                  text: "info@jguni.edu",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-blue-500 hover:bg-white/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                      <Icon size={18} />
                    </div>

                    <p className="text-slate-300 text-sm">
                      {item.text}
                    </p>
                  </div>
                );
              })}

              {/* Newsletter */}
              <div className="mt-6">
                <p className="text-sm text-slate-400 mb-3">
                  Subscribe to updates
                </p>

                <div className="flex overflow-hidden rounded-full border border-white/10 bg-white/5">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full bg-transparent px-5 py-3 outline-none text-sm"
                  />

                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-5">
                    <Send size={18} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-5 border-t border-white/10 pt-8">

          <p className="text-sm text-slate-500 text-center">
            © 2026 JGUNI. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}