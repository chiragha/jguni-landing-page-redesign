"use client";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";

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
        <TopBar />
        <Navbar />
        <Hero />
        <About />
      </>
    )}
  </>
);
}