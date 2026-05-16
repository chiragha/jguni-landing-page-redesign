"use client";
import { motion } from "framer-motion";
import { Clock3, Users, ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Undergraduate Programs",
    image: "/program1.avif",
    description:
      "Build strong academic foundations with career-oriented undergraduate studies.",
    duration: "4 Years",
    students: "12K+ Students",
  },
  {
    title: "Graduate Programs",
    image: "/program2.avif",
    description:
      "Advance your expertise through research-focused graduate education.",
    duration: "2 Years",
    students: "8K+ Students",
  },
  {
    title: "Doctoral Programs",
    image: "/program3.avif",
    description:
      "Pursue innovation and advanced research with doctoral opportunities.",
    duration: "3-5 Years",
    students: "2K+ Students",
  },
  {
    title: "Certificate Courses",
    image: "/program4.avif",
    description:
      "Gain industry-ready skills with short-term certification programs.",
    duration: "3-12 Months",
    students: "15K+ Students",
  },
];

export default function Programs() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-20 overflow-hidden">
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
            OUR PROGRAMS
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Explore Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Academic Programs
            </span>
          </h2>

          <p className="text-slate-600 mt-5 text-lg leading-relaxed">
            Choose from world-class undergraduate, graduate, doctoral, and
            certification programs designed for career success.
          </p>
        </motion.div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

            
              <div className="p-6 flex flex-col flex-1">
            
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-slate-900">
                    {program.title}
                  </h3>

                  <p className="text-slate-600 text-sm mt-3 leading-relaxed min-h-[72px]">
                    {program.description}
                  </p>
                </div>

             
                <div className="mt-auto">
               
                  <div className="flex justify-between text-sm text-slate-500 border-t border-gray-100 pt-5 mb-5">
                    <div className="flex items-center gap-2">
                      <Clock3 size={16} />
                      {program.duration}
                    </div>

                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      {program.students}
                    </div>
                  </div>

              
                  <button className="w-full cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full font-medium hover:scale-[1.03] transition duration-300">
                    Explore Program
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
