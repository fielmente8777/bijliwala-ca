import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import About from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import OurWork from "./pages/OurWrok/OurWork";
import { Privacy } from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";
import RenderChatBot from "./components/LeadChatbot/RenderChatBot";

function App() {
  return (
    <>
      {/* <div className="scroll-watcher"></div> */}

      <Navbar />
      <RenderChatBot />
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
