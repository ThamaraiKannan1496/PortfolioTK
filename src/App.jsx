import { useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import InstagramButton from "./components/utilities/InstagramButton";
import Projects from "./components/Projects";
import ScrollPercentButton from "./components/utilities/ScrollPercentButton";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true, //  allow animation every time you scroll
      mirror: true, // animate when scrolling up as well
      disable: "phone", // enable on all devices
    });

    // Refresh AOS when component updates or new elements appear
    AOS.refresh();
  }, []);
  return (
    <div className="flex">
      <Navbar />
      <main className="bg-black text-white w-full">
        <section className="ps-0 pr-0 lg:ps-72 lg:pr-2">
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
        </section>
        <InstagramButton />
        <ScrollPercentButton />
      </main>
    </div>
  );
}

export default App;
