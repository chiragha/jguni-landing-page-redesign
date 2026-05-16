"use client";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import Programs from "@/components/Programs";
import Strength from "@/components/Strength";
import AdmissionPopup from "@/components/AdmissionPopup";
import Leaders from "@/components/Leaders";
import Faculty from "@/components/Faculty";
import Partners from "@/components/Partners";
import Campus from "@/components/Campus";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";


export default function Home() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2200);

  return () => clearTimeout(timer);
}, []);
 return (
  <>
    <Preloader loading={loading} />

    {!loading && (
      <>
        <AdmissionPopup />
        <TopBar />
        <Navbar />
        <Hero />
        <About />
        <Programs />
        <Strength />
        <Leaders />
        <Faculty />
        <Partners />
        <Campus />
        <Testimonials />
        <Footer />
      </>
    )}
  </>
);
}