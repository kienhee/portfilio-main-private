/** @format */

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Marquee from "../../components/Marquee/Marquee";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";
import Projects from "../../components/Projects/Projects";
import { Contact } from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const listSkill = ["html", "scss", "boostrap", "javascript", "reactjs", "nodejs", "mongodb", "mysql", "figma"];

  return (
    <>
      <Header />
      <Hero />
      <Marquee Skills={listSkill} />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
