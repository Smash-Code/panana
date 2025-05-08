import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="" >
      <Hero />
      <div className="relative mt-[140px] xl:mt-[66px]" >
        <Projects />
      </div>
    </div>
  );
}
