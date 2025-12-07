import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollPercentButton() {
  const [percent, setPercent] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setPercent(Math.round(scrolled));
      setShow(scrollTop > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-999 cursor-pointer transition-all duration-300 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <motion.div
        animate={{ rotate: percent * 3.6 }}
        transition={{ type: "tween", duration: 0.25 }}
        className="relative w-15 h-15 flex items-center justify-center"
      >
        {/* SVG Circular Text */}
        <svg
          viewBox="0 0 100 100"
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        >
          <defs>
            <path
              id="circlePath"
              d="
                M 50, 50
                m -40, 0
                a 40,40 0 1,1 80,0
                a 40,40 0 1,1 -80,0
              "
            />
          </defs>

          <text fill="white" fontSize="12" letterSpacing="2">
            <textPath href="#circlePath">
              SCROLL TOP • &nbsp; &nbsp;&nbsp; SCROLL TOP •
            </textPath>
          </text>
        </svg>

        {/* Center Percentage */}
        <span className="text-white font-bold text-lg z-10">{percent}%</span>
      </motion.div>
    </div>
  );
}
