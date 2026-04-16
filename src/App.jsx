import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom"; // Added useLocation
import { AnimatePresence } from "framer-motion"; // Added AnimatePresence
import Lenis from "lenis";

// Components

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import ScrollToTop from "./components/ScrollToTop";

import NotFound from "./components/NotFound";

import Loader from "./components/Loader";

// Pages

import HomePage from "./pages/index";

import AboutPage from "./pages/About";

import ServicePage from "./pages/Services";

import ServicesInner from "./pages/ServicesInner";

import CareerPage from "./pages/Careers";

import BlogPage from "./pages/Blogs";

import BlogsInner from "./pages/BlogsInner";

import ContactPage from "./pages/Contact";

import PageTransition from "./components/PageTransition"; // Import the transition

// Small wrapper to inject the transition layers into pages
const PageWrapper = ({ children }) => (
  <>
    <PageTransition />
    {children}
  </>
);

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
  const [siteLoading, setSiteLoading] = useState(true);
  const location = useLocation(); // Hook to track route changes

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

    const timer = setTimeout(() => {
      setSiteLoading(false);
    }, 1000);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Loader isLoading={siteLoading} />

      <div
        className={`font-Inter ${siteLoading ? "h-screen overflow-hidden" : ""}`}
      >
        <ScrollToTop />

        {/* AnimatePresence manages the lifecycle of the transition */}
        <AnimatePresence mode="wait">
          {/* Pass location and key so Framer knows when the route changes */}
          <Routes location={location} key={location.pathname}>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <HomePage />
                  </PageWrapper>
                }
              />
              <Route
                path="/about-us"
                element={
                  <PageWrapper>
                    <AboutPage />
                  </PageWrapper>
                }
              />
              <Route
                path="/services"
                element={
                  <PageWrapper>
                    <ServicePage />
                  </PageWrapper>
                }
              />
              <Route
                path="/services/:slug"
                element={
                  <PageWrapper>
                    <ServicesInner />
                  </PageWrapper>
                }
              />
              <Route
                path="/careers"
                element={
                  <PageWrapper>
                    <CareerPage />
                  </PageWrapper>
                }
              />
              <Route
                path="/blog"
                element={
                  <PageWrapper>
                    <BlogPage />
                  </PageWrapper>
                }
              />
              <Route
                path="/blog/:slug"
                element={
                  <PageWrapper>
                    <BlogsInner />
                  </PageWrapper>
                }
              />
              <Route
                path="/contact-us"
                element={
                  <PageWrapper>
                    <ContactPage />
                  </PageWrapper>
                }
              />
              <Route
                path="*"
                element={
                  <PageWrapper>
                    <NotFound />
                  </PageWrapper>
                }
              />
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
