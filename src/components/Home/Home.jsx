import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import "./home.css";
import MainContent from "./MainContent";
import Footer from "./footer";
import Services from "./services";
import ContactSection from "./ContactSection";

const Home = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-container">
      {/* Carousel Section */}
      <section className="carousel-section">
        <Carousel fade interval={3000} pause="hover" indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/1.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/2.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/3.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Main Content Section */}
      <motion.section
        id="main"
        className="main-content-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <MainContent />
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="services-content-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Services />
      </motion.section>
      <motion.section
        id="services"
        className="services-content-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <ContactSection />
      </motion.section>
      {/* Footer Section */}
      <motion.footer
        id="footer"
        className="footer-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.footer>
    </div>
  );
};

export default Home;
