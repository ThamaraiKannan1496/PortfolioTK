import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import InstagramButton from "./components/utilities/InstagramButton";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ScrollPercentButton from "./components/utilities/ScrollPercentButton";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
      <AnimatedCursor
        innerSize={0}
        outerSize={40} // large lens
        outerScale={2} // lens scale on hover
        outerAlpha={0.25} // transparency
        trailingSpeed={3}
        color="255, 255, 255"
        outerStyle={{
          backdropFilter: "blur(0px) brightness(1.3)", // zoom + brighten
          WebkitBackdropFilter: "blur(0px) brightness(1.3)",
          border: "1px solid rgba(255,255,255,0.4)",
        }}
        showSystemCursor={false}
      />

      <Navbar />
      <main className="bg-black text-white w-full">
        <section className="ps-0 pr-0 lg:ps-72 lg:pr-2">
          <Home />
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
