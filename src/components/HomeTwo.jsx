import SlideButton from "./utilities/SlideButton";
const HomeTwo = () => {
  return (
    <div className="min-h-screen px-5 py-10 bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SECTION */}
        <div className="space-y-6">
          <h2 className="lg:hidden inline-block text-center text-7xl font-caveat py-5 text-white">
            Kannan
          </h2>
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
                w-[91%] text-black bg-yellow-300 text-[0.25em] font-medium tracking-[0.7em] 
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
          <p className="text-gray-300 md:text-lg">
            Frontend Developer • React • Tailwind • Next.js
          </p>

          <div className="flex gap-4 flex-wrap">
            <SlideButton label="Hire me" />
            <SlideButton label="Download CV" />
          </div>
        </div>

        {/* RIGHT SECTION - IMAGE */}
        <div className="flex justify-center">
          <img
            src="/BannerVideo.gif"
            alt="Profile"
            className="w-full rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeTwo;
