"use client"
import { useEffect } from "react";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Topic from "./components/Topic";
import Work from "./components/Work";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init(
      {
        once: true
      }
    );
  }, []);

  return (
    <div className="overflow-hidden" >
      <Hero />
      <div className="relative mt-[280px] lg:mt-[96px] xl:mt-[86px]" >
        <Projects />
      </div>
      <Work />
      <Topic />

      <GetStarted />
      <Footer />
    </div>
  );
}
