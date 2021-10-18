import React from "react";
import Preloader from "./Components/Preloader";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Testimonial from "./Components/Testimonial";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import ReturnToTop from "./Components/ReturnToTop";
import Cursor from "./Components/Cursor";

const App = () => {
  return (
    <div>
      <Preloader />
      <Header />
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
      <ReturnToTop />
      <Cursor />
    </div>
  );
};

export default App;
