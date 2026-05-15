"use client";

import { motion } from "framer-motion";

const leaders = [
  {
    name: "Dr. Robert Williams",
    role: "Chancellor",
    image: "/leader1.avif",
    description:
      "Committed to transforming education through innovation and excellence.",
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Vice Chancellor",
    image: "/leader3.avif",
    description:
      "Focused on empowering students with future-ready education.",
  },
  {
    name: "Prof. David Miller",
    role: "Dean of Academics",
    image: "/leader2.avif",
    description:
      "Driving academic excellence with research and practical learning.",
  },
];

export default function Leaders() {
  return (
    <section className="py-20 bg-white overflow-hidden">
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
            OUR LEADERS
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Meet Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Visionary Leaders
            </span>
          </h2>

          <p className="text-slate-600 mt-5 text-base md:text-lg leading-relaxed">
            Experienced educators and visionaries shaping the future
            of education with leadership and innovation.
          </p>
        </motion.div>

        {/* Leader Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group bg-slate-50 rounded-[28px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-[340px] object-cover  transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900">
                  {leader.name}
                </h3>

                <p className="text-blue-600 font-medium mt-1">
                  {leader.role}
                </p>

                <p className="text-slate-600 text-sm mt-4 leading-relaxed">
                  {leader.description}
                </p>

                {/* Button */}
                <button className="mt-5 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:scale-105 transition duration-300">
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}