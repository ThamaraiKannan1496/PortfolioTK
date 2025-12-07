import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const outerRef = useRef(null);

  useEffect(() => {
    const outer = outerRef.current;

    // Hide cursor
    document.body.style.cursor = "none";

    let mouseX = 0;
    let mouseY = 0;
    let currX = 0;
    let currY = 0;

    const speed = 0.15; // smooth trailing

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currX += (mouseX - currX) * speed;
      currY += (mouseY - currY) * speed;

      outer.style.transform = `translate3d(${currX - 20}px, ${
        currY - 20
      }px, 0)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    animate();

    // Hover scaling for links/buttons
    const hoverTargets = document.querySelectorAll("a, button, .cursor-hover");

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        outer.style.transform += " scale(2)";
      });

      el.addEventListener("mouseleave", () => {
        outer.style.transform = outer.style.transform.replace(" scale(2)", "");
      });
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "default";
    };
  }, []);

  return (
    <>
      {/* OUTER CURSOR (Lens Effect) */}
      <div
        ref={outerRef}
        className="
          pointer-events-none fixed top-0 left-0 z-9999
          w-20 h-20 rounded-full 
          border border-white/90
          backdrop-blur-[0px] brightness-125
          transition-transform duration-100 ease-out
        "
      ></div>
    </>
  );
}
