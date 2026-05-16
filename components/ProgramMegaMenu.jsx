"use client";

import { motion, AnimatePresence } from "framer-motion";

const programsData = {
  undergraduate: [
    "BBA | BBA (Hons)",
    "Integrated BBA + MBA",
    "BCA | BCA (Hons)",
    "B.Tech Programs",
    "B.Com | B.Com (Hons)",
    "Integrated BSc + MSc",
  ],

  postgraduate: ["MBA", "MCA", "MSc IT", "M.Com", "LL.M", "Masters in Finance"],

  doctoral: ["Management", "Commerce", "Computing", "Law", "Interdisciplinary"],

  resources: [
    "MBA Question Bank",
    "MCA Question Bank",
    "NEP 2020",
    "Code Of Conduct",
  ],
};

export default function ProgramMegaMenu({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.25 }}
          className="
absolute top-12 left-0
w-[1000px]
bg-white
border border-gray-100
rounded-[32px]
shadow-2xl
p-8 lg:p-10
z-50
"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Undergraduate */}
            <div>
              <h3 className="text-blue-600 font-bold text-lg mb-5">
                Undergraduate
              </h3>

              <div className="space-y-3">
                {programsData.undergraduate.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-slate-600 hover:text-blue-600 transition duration-300 text-sm leading-relaxed hover:translate-x-1"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Postgraduate */}
            <div>
              <h3 className="text-blue-600 font-bold text-lg mb-5">
                Postgraduate
              </h3>

              <div className="space-y-3">
                {programsData.postgraduate.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-slate-600 hover:text-blue-600 transition duration-300 text-sm leading-relaxed hover:translate-x-1"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Doctoral */}
            <div>
              <h3 className="text-blue-600 font-bold text-lg mb-5">
                Doctoral Programmes
              </h3>

              <div className="space-y-3">
                {programsData.doctoral.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-slate-600 hover:text-blue-600 transition duration-300 text-sm leading-relaxed hover:translate-x-1"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-blue-600 font-bold text-lg mb-5">
                Resources
              </h3>

              <div className="space-y-3">
                {programsData.resources.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-slate-600 hover:text-blue-600 transition duration-300 text-sm leading-relaxed hover:translate-x-1"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
