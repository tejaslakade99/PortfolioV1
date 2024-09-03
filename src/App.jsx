import "./App.css";

import CursorTracker from "./components/CursorTracker";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <CursorTracker />
      <div className="mx-8 lg:mx-24 lg:min-h-screen max-w-screen px-6 py-12 md:px-12 md:py-12 lg:px-24 lg:py-0 flex flex-col lg:flex-row gap-4">
        <Header />
        <Main / >
      </div>
    </>
  );
}

export default App;
