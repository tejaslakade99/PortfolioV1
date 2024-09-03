import Nav from "./Nav";
import Social from "./Social";

export default function Header() {
  return (
    <header className="lg:h-screen lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Tejas Lakade
        </h1>
        <h1 className="tracking-tight text-slate-200 sm:mt-4 sm:text-xl sm:font-medium">
          Senior Web Developer
        </h1>
        <p className="leading-normal sm:mt-4 sm:max-w-xs">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
        <Nav />
      </div>
      <Social />
    </header>
  );
}
