"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const facultyMembers = [
  {
    name: "Dr. Emily Watson",
    role: "Professor of Computer Science",
    image: "/faculty2.avif",
  },
  {
    name: "Dr. Michael Brown",
    role: "Professor of Business Studies",
    image: "/faculty1.avif",
  },
  {
    name: "Dr. Sophia Wilson",
    role: "Professor of Engineering",
    image: "/faculty3.avif",
  },
  {
    name: "Dr. James Anderson",
    role: "Professor of Data Science",
    image: "/faculty5.avif",
  },
  {
    name: "Dr. Olivia Martin",
    role: "Professor of Law",
    image: "/faculty4.avif",
  },
  {
    name: "Dr. William Scott",
    role: "Professor of Medicine",
    image: "/faculty6.avif",
  },
];

export default function Faculty() {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-4 py-2 text-blue-700 text-sm font-medium mb-5">
            FACULTY MEMBERS
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Meet Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Expert Faculty
            </span>
          </h2>

          <p className="text-slate-600 mt-5 text-lg leading-relaxed">
            Learn from experienced professors and industry experts.
          </p>
        </motion.div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Navigation, EffectCoverflow]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          speed={900}
          grabCursor={true}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 220,
            modifier: 2,
            scale: 0.85,
            slideShadows: false,
          }}
          className="faculty-slider"
        >
          {facultyMembers.map((faculty, index) => (
            <SwiperSlide
              key={index}
              className="!w-[260px] md:!w-[320px]"
            >
              <div className="faculty-card bg-white rounded-[28px] overflow-hidden shadow-xl border border-gray-100 transition-all duration-500">

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-[340px] object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5 text-center">
                  <h3 className="text-xl font-bold text-slate-900">
                    {faculty.name}
                  </h3>

                  <p className="text-slate-500 mt-2">
                    {faculty.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .faculty-slider {
          padding: 40px 0;
        }

        .faculty-slider .swiper-slide {
          opacity: 0.35;
          transform: scale(0.82);
          transition: all 0.5s ease;
        }

        .faculty-slider .swiper-slide-active {
          opacity: 1 !important;
          transform: scale(1.1);
          z-index: 20;
        }

        .faculty-slider .swiper-button-next,
        .faculty-slider .swiper-button-prev {
          color: #2563eb;
          background: white;
          width: 48px;
          height: 48px;
          border-radius: 999px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
        }

        .faculty-slider .swiper-button-next:after,
        .faculty-slider .swiper-button-prev:after {
          font-size: 18px;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .faculty-slider .swiper-slide-active {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}