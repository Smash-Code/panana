"use client";
import { useEffect } from "react";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Topic from "./components/Topic";
import Work from "./components/Work";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="h-[300px]"></div>
      <Projects />
      <Work />
      <Topic />
      <GetStarted />
      <Footer />
    </div>
  );
}
