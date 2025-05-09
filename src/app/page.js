import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Topic from "./components/Topic";
import Work from "./components/Work";

export default function Home() {
  return (
    <div className="" >
      <Hero />
      <div className="relative mt-[280px] xl:mt-[96px]" >
        <Projects />
      </div>
      <Work />
      <Topic />

      <GetStarted />
      <Footer />
    </div>
  );
}
