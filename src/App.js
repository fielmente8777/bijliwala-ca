import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { Contact } from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Blog from "./pages/Blogs/Blog";
import OurWork from "./pages/OurWrok/OurWork";
import { Privacy } from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";
function App() {
  return (
    <>
      {/* <div className="scroll-watcher"></div> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/work" element={<OurWork />} />
        {/* <Route path="/Blogs" element={<Blog />} /> */}
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Terms" element={<Terms />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
