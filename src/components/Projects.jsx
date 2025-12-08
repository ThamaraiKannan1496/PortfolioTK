import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // ← NEW

const images = [
  { src: "/p1.png", alt: "IMG1", link: "https://restotk.netlify.app/" },
  { src: "/p2.png", alt: "IMG2", link: "https://aima-demo.netlify.app/" },
  { src: "/p3.png", alt: "IMG3", link: "https://moderna-vite.netlify.app/" },
  { src: "/p4.png", alt: "IMG4", link: "https://presento.netlify.app/" },
  { src: "/p5.png", alt: "IMG5", link: "https://fractaltk.netlify.app/" },
  { src: "/p6.png", alt: "IMG6", link: "https://flexortk.netlify.app/" },
];

export default function Projects() {
  const [active, setActive] = useState(2);

  const move = (dir) => {
    setActive((p) =>
      dir === "next"
        ? (p + 1) % images.length
        : p === 0
        ? images.length - 1
        : p - 1
    );
  };

  const positions = (i, active) => {
    const r = (i - active + images.length) % images.length;

    const mobileCenter = "left-1/2 -translate-x-1/2";
    const mobileSide = "left-1/2 -translate-x-1/2 opacity-40 scale-75";

    if (window.innerWidth < 640) {
      if (r === 0) return { class: `z-20 w-66 h-66 ${mobileCenter}` };
      if (r === 1 || r === images.length - 1)
        return { class: `z-10 w-44 h-44 ${mobileSide}` };
      return { class: "opacity-0 scale-50" };
    }

    if (r === 0) return { class: "z-20 w-90 h-90 left-1/2 -translate-x-1/2" };
    if (r === 1) return { class: "z-10 w-72 h-72 left-[70%] -translate-x-1/2" };
    if (r === 2)
      return {
        class: "z-0 w-60 h-60 left-[60%] -translate-x-1/3 brightness-75",
      };
    if (r === images.length - 1)
      return { class: "z-10 w-72 h-72 left-[30%] -translate-x-1/2" };
    if (r === images.length - 2)
      return {
        class: "z-0 w-60 h-60 left-[40%] -translate-x-2/3 brightness-75",
      };

    return { class: "opacity-0 scale-50" };
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-black flex flex-col pt-0 pb-5 items-center min-h-screen"
      id="projects"
    >
      <div className="flex items-center justify-center gap-4 pt-16">
        <span className="w-20 h-[3px] bg-[#F76500] rounded-full"></span>

        <h2
          className="text-5xl font-bold font-bubblegum text-white"
          data-aos="zoom-in"
        >
          Projects
        </h2>

        <span className="w-20 h-[3px] bg-[#F76500] rounded-full"></span>
      </div>

      <div className="relative w-full max-w-full h-[450px] sm:h-[450px] overflow-visible">
        {images.map((img, i) => {
          const pos = positions(i, active);
          return (
            <div
              key={i}
              className={`absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-out ${pos.class}`}
              style={{
                clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              }}
            >
              <a href={img.link} target="_blank" rel="noopener noreferrer">
                <div
                  className="w-full h-full overflow-hidden transition duration-500"
                  style={{
                    clipPath:
                      "polygon(31% 1%, 69% 1%, 99% 31%, 99% 69%, 69% 99%, 31% 99%, 1% 69%, 1% 31%)",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 hover:brightness-75"
                  />
                </div>
              </a>
            </div>
          );
        })}
      </div>

      {/* ARROWS UPDATED */}
      <div className="flex gap-8 mt-6">
        {/* LEFT ARROW */}
        <button
          onClick={() => move("prev")}
          className="p-3 hover:scale-110 transition cursor-pointer"
        >
          <FiChevronLeft size={52} color="#F76500" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => move("next")}
          className="p-3 hover:scale-110 transition cursor-pointer"
        >
          <FiChevronRight size={52} color="#F76500" />
        </button>
      </div>
    </section>
  );
}
