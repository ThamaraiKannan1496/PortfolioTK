import ImageCube from "./utilities/ImageCube";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full px-4 sm:px-10 pt-20 py-5 bg-black"
    >
      {/* HEADING ON TOP */}
      <h2 className="mb-24 text-5xl font-bold text-center font-bubblegum text-white">
        About
      </h2>

      {/* 2-COLUMN LAYOUT BELOW HEADING */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 items-center">
        {/* LEFT — TEXT */}
        <div className="text-white order-2 font-poppins">
          <p className="text-lg  leading-loose tracking-wider mb-6">
            I’m &nbsp;
            <span className="text-[#F76500] font-bold text-xl">
              Thamarai Kannan Balasubramani
            </span>
            &nbsp; - a frontend React developer who builds clean, modern, and
            intuitive web applications.
          </p>

          <p className="text-lg sm:text-xl leading-relaxed">
            I focus on smooth user experiences, minimal design, and development
            using
            <b className="text-[#F76500]"> React JS </b> ,
            <b className="text-[#F76500]"> Next JS </b> ,
            <b className="text-[#F76500]"> Tailwind</b> , and modern frontend
            tools.
          </p>
        </div>

        {/* RIGHT — IMAGE */}
        <div>
          <ImageCube
            size={260}
            images={[
              "/1.jpg",
              "/2.jpg",
              "/3.jpg",
              "/4.jpg",
              "/5.jpg",
              "/6.jpg",
            ]}
            autoRotate={true}
            rotateSpeed={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
