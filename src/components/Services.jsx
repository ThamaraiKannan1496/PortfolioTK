import UiCard from "./utilities/UiCard";

const Services = () => {
  const services = [
    {
      title: "Website Development",
      tags: ["Web", "Frontend"],
      img: "/websitedev.png",
    },
    {
      title: "Frontend Development",
      tags: ["React", "Tailwind"],
      img: "frontenfd.png",
    },
    {
      title: "API Integration",
      tags: ["API", "Software"],
      img: "/api.png",
    },
    {
      title: "UI/UX Design to Code",
      tags: ["UI/UX", "Figma"],
      img: "/uiux.png",
    },
    {
      title: "Website Support",
      tags: ["Maintenance", "Support"],
      img: "/websuppoort.png",
    },
    {
      title: "2D AutoCAD Plans",
      tags: ["AutoCAD", "Architecture"],
      img: "/floorplan.png",
    },
  ];

  return (
    <section id="services" className="px-5 py-16 bg-black text-white">
      <div className="flex items-center justify-center gap-4 pt-1 mb-10">
        <span className="w-20 h-[3px] bg-[#F76500] rounded-full"></span>

        <h2
          className="text-5xl font-bold font-bubblegum text-white text-center"
          data-aos="zoom-in"
        >
          Services
        </h2>

        <span className="w-20 h-[3px] bg-[#F76500] rounded-full"></span>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">
        {services.map((item, i) => (
          <UiCard key={i} title={item.title} tags={item.tags} img={item.img} />
        ))}
      </div>
    </section>
  );
};

export default Services;
