"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import CountUp from "react-countup";
const testimonials = [
  {
    name: "Aarav Sharma",
    role: "B.Tech Student",
    image: "/student2.avif",
    review:
      "JGUNI provided me with the perfect learning environment and industry exposure. The faculty support and practical learning experience helped me grow professionally.",
  },
  {
    name: "Priya Verma",
    role: "MBA Student",
    image: "/student1.avif",
    review:
      "The campus infrastructure, placement support, and modern curriculum made my academic journey truly amazing and career-focused.",
  },
  {
    name: "Tanya Mehta",
    role: "Computer Science Student",
    image: "/student3.avif",
    review:
      "I gained real-world project experience and confidence through workshops, mentorship, and collaborative learning opportunities.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-4 py-2 text-blue-700 text-sm font-medium mb-5">
            TESTIMONIALS
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            What Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Students Say
            </span>
          </h2>

          <p className="text-slate-600 text-lg mt-6 leading-relaxed">
            Hear from students who transformed their careers and learning
            experience through our modern education ecosystem.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              {/* Background Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-50 to-purple-50 transition duration-500" />

              {/* TOP CONTENT */}
              <div className="relative z-10 flex flex-col flex-1">
                {/* Stars + Quote */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-lg">
                    <Quote size={22} />
                  </div>
                </div>

                {/* Review */}
                <p className="text-slate-600 leading-relaxed mt-6 flex-1">
                  "{item.review}"
                </p>

                {/* User Section */}
                <div className="flex items-center gap-4 pt-8 mt-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0"
                  />

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">
                      {item.name}
                    </h4>

                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { number: 12, suffix: "K+", label: "Students" },
            { number: 250, suffix: "+", label: "Faculty Members" },
            { number: 95, suffix: "%", label: "Placement Rate" },
            { number: 100, suffix: "+", label: "Recruiters" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white rounded-[28px] border border-gray-100 shadow-sm p-8 text-center hover:shadow-2xl transition duration-300"
            >
              {/* Animated Number */}
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                <CountUp start={0} end={stat.number} duration={3} />
                {stat.suffix}
              </h3>

              {/* Label */}
              <p className="text-slate-600 mt-2 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
