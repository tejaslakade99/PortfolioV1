import "./App.css";
import Home from "./pages/Home";
import User from "./pages/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user-account/login" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
