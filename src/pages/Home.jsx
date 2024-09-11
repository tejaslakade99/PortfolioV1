import CursorTracker from "../components/home/CursorTracker";
import Header from "../components/home/Header";
import Main from "../components/home/Main";

export default function Home() {
  return (
    <>
      <div
        className="fixed right-0 top-0 h-screen w-screen overflow-auto bg-slate-900 bg-cover bg-center text-slate-400 selection:bg-teal-400 selection:text-slate-700"
        style={{
          backgroundImage: "url('../src/assets/black-wallpaper.jpg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <CursorTracker />
        <div className="max-w-screen mx-8 flex flex-col gap-4 px-6 py-12 md:px-12 md:py-12 lg:mx-24 lg:min-h-screen lg:flex-row lg:px-24 lg:py-0">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
}
