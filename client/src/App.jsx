import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Login, Signup } from "./pages/auth";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
