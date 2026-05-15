"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GraduationCap } from "lucide-react";

export default function AdmissionPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2500); // popup after 2.5 sec

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showPopup && (
        <>
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.35 }}
            className="fixed left-1/2 top-1/2 z-[110] w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative bg-white rounded-[30px] shadow-2xl overflow-hidden">

              {/* Close Button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition"
              >
                <X size={20} />
              </button>

              {/* Content */}
              <div className="p-8 text-center">
                {/* Icon */}
                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg mb-5">
                  <GraduationCap size={38} />
                </div>

                <h2 className="text-3xl font-bold text-slate-900">
                  Admissions Open
                </h2>

                <p className="text-slate-600 mt-3 leading-relaxed">
                  Join JGUNI and shape your future with world-class education,
                  expert mentorship, and industry-ready programs.
                </p>

                {/* Buttons */}
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full font-medium hover:scale-[1.02] transition duration-300">
                    Apply Now
                  </button>

                  <button
                    onClick={() => setShowPopup(false)}
                    className="flex-1 border border-slate-300 py-3 rounded-full font-medium hover:bg-slate-100 transition"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}