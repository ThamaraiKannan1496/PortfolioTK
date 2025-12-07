import { useState } from "react";

const images = [
  {
    src: "/p1.png",
    alt: "IMG1",
    link: "https://restotk.netlify.app/",
  },
  {
    src: "/p2.png",
    alt: "IMG2",
    link: "https://aima-demo.netlify.app/",
  },
  {
    src: "/p3.png",
    alt: "IMG3",
    link: "https://moderna-vite.netlify.app/",
  },
  {
    src: "/p4.png",
    alt: "IMG4",
    link: "https://presento.netlify.app/",
  },
  {
    src: "/p5.png",
    alt: "IMG5",
    link: "https://fractaltk.netlify.app/",
  },
  {
    src: "/p6.png",
    alt: "IMG5",
    link: "https://flexortk.netlify.app/",
  },
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

  // RESPONSIVE POSITION PRESETS
  const positions = (i, active) => {
    const r = (i - active + images.length) % images.length;

    // --- MOBILE SIZES ---
    const mobileCenter = "left-1/2 -translate-x-1/2";
    const mobileSide = "left-1/2 -translate-x-1/2 opacity-40 scale-75";

    if (window.innerWidth < 640) {
      if (r === 0) return { class: `z-20 w-56 h-56 ${mobileCenter}` };
      if (r === 1 || r === images.length - 1)
        return { class: `z-10 w-44 h-44 ${mobileSide}` };
      return { class: "opacity-0 scale-50" };
    }

    // --- DESKTOP POSITIONS ---
    if (r === 0) return { class: "z-20 w-80 h-80 left-1/2 -translate-x-1/2" };

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
    <div
      className="relative w-full overflow-hidden bg-black flex flex-col pt-0 pb-10 items-center min-h-screen"
      id="projects"
    >
      <h2 className="text-5xl font-bold text-center pt-16 font-bubblegum text-white">
        Projects
      </h2>
      <div className="relative w-full max-w-full h-[400px] sm:h-[450px] overflow-visible">
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
              <a
                href={img.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
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

      <div className="py-1 flex gap-8">
        <button
          onClick={() => move("prev")}
          className="p-3 hover:scale-110 transition cursor-pointer"
        >
          <img
            src="https://i.postimg.cc/jwWs9zZ1/arrow-L.png"
            className="w-10"
          />
        </button>

        <button
          onClick={() => move("next")}
          className="p-3 hover:scale-110 transition cursor-pointer"
        >
          <img
            src="https://i.postimg.cc/k6kndBHg/arrow-R.png"
            className="w-10"
          />
        </button>
      </div>
    </div>
  );
}
