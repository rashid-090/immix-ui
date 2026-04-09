import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import HomePage from "./pages/index";
import AboutPage from "./pages/About";
import ServicePage from "./pages/Services";
import ServicesInner from "./pages/ServicesInner";
import CareerPage from "./pages/Careers";
import BlogPage from "./pages/Blogs";
import ContactPage from "./pages/Contact";

import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";



const Layout = () => {
  return (
    <>
       
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};







function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="font-Inter">
      {/* 1. Add the component here */}
      <ScrollToTop /> 
      
       <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<p className="py-60">not found</p>} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/services/:slug" element={<ServicesInner />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
