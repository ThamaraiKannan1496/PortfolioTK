import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import InstagramButton from "./components/utilities/InstagramButton";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ScrollPercentButton from "./components/utilities/ScrollPercentButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CustomCursor from "./components/utilities/CustomCursor";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, //  allow animation every time you scroll
      mirror: true, // animate when scrolling up as well
      disable: "phone", // enable on all devices
    });

    // Refresh AOS when component updates or new elements appear
    AOS.refresh();
  }, []);
  return (
    <div className="flex">
      <CustomCursor />
      <Navbar />
      <main className="bg-black text-white w-full">
        <section className="ps-0 pr-0 lg:ps-72 lg:pr-2">
          {/* <Home /> */}
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
