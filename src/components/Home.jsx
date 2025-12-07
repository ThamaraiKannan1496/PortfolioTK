import SlideButton from "./utilities/SlideButton";

const Home = () => {
  return (
    <div
      className="px-4 sm:px-10 py-6 bg-black/50 min-h-screen flex items-center"
      id="home"
    >
      <div className="grid lg:grid-cols-2 items-center gap-y-10">
        {/* LEFT SECTION */}
        <h2 className="lg:hidden inline-block text-center text-7xl font-caveat py-5 text-white">
          Kannan
        </h2>
        <div className="flex flex-col items-center lg:w-[48%] w-full lg:items-start text-center lg:text-left">
          {/* MOBILE NAME */}

          {/* DESKTOP ANIMATED NAME */}
          <h2
            className="hidden lg:inline-block group relative m-0 ps- 
              text-white lg:text-8xl xl:text-9xl uppercase font-caveat"
          >
            {/* TOP LAYER */}
            <span
              className="believe-top absolute top-0 left-0 text-white 
                transition-all duration-500 overflow-hidden"
            >
              Kannan
            </span>

            {/* BOTTOM LAYER */}
            <span
              className="believe-bottom absolute top-0 left-0 text-white 
                transition-all duration-500 overflow-hidden"
            >
              Kannan
            </span>

            {/* MIDDLE HIGHLIGHT */}
            <span
              className="believe-middle absolute top-1/2 left-0 -translate-y-1/2 scale-y-0 
                w-[100%] text-black bg-yellow-300 text-[0.25em] font-medium tracking-[0.7em] 
                text-center transition-all duration-500"
            >
              Kannan
            </span>

            {/* FULL NAME ON HOVER */}
            <span
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 
                text-yellow-400 text-2xl absolute top-full left-55 -translate-x-1/2 
                mt-12 whitespace-nowrap font-bubblegum"
            >
              Thamarai &nbsp; Kannan &nbsp; Balasubramani
            </span>
          </h2>

          {/* SUBTITLE — BELOW NAME */}
          {/* <p className="lg:mt-40 text-lg bg-linear-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent animate-pulse">
            A passionate Web Developer
          </p> */}

          {/* BUTTONS */}
          <div className="mt-10 lg:mt-42 flex flex-col sm:flex-row items-center gap-6 lg:gap-10 text-nowrap">
            <SlideButton label="Hire me" href="#contact" />
            <SlideButton
              label="Download CV"
              href="/public/ThamaraiKannanResume.pdf"
            />
          </div>
        </div>
        {/* RIGHT SECTION IMAGE */}
        <div className="w-full lg:aspect-8/6 xl:aspect-9/6 flex justify-center">
          <img
            src="/BannerVideo.gif"
            alt="Personal Banner"
            className="w-full h-full object-cover rounded-lg shadow-[0px_0px_20px_10px_#4299e1]/50"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
