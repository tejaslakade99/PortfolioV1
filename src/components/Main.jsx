import About from "./About";
import Experience from "./Experience";
import Project from "./Project";

export default function Main() {
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
      <About />
      <Experience />
      <Project />
    </main>
  );
}
