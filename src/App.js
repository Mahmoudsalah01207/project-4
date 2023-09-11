import { Component } from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/css/all.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Logo from "./Logo";
import PORTFOLIO from "./PORTFOLIO";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/Logo" element={<Logo />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<PORTFOLIO />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </>
    );
  }
}

export default App;