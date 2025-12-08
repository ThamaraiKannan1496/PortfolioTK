import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiOracle,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiCanva,
} from "react-icons/si";

import { BiLogoVisualStudio } from "react-icons/bi";
import { RiBearSmileFill } from "react-icons/ri";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

const skills = [
  { icon: <SiHtml5 className="text-orange-500 text-4xl" />, title: "HTML5" },
  { icon: <SiCss3 className="text-blue-500 text-4xl" />, title: "CSS3" },
  {
    icon: <SiBootstrap className="text-purple-600 text-4xl" />,
    title: "Bootstrap",
  },
  {
    icon: <SiTailwindcss className="text-sky-500 text-4xl" />,
    title: "Tailwind CSS",
  },
  {
    icon: <SiJavascript className="text-yellow-400 text-4xl" />,
    title: "JavaScript",
  },
  { icon: <SiReact className="text-cyan-400 text-4xl" />, title: "React.js" },
  {
    icon: <SiNextdotjs className="text-black dark:text-white text-4xl" />,
    title: "Next.js",
  },
  { icon: <RiBearSmileFill className="text-4xl" />, title: "Zustand" },
  { icon: <SiOracle className="text-[#C74634] text-4xl" />, title: "Oracle" },
  { icon: <SiGit className="text-red-500 text-4xl" />, title: "Git" },
  {
    icon: <SiGithub className="text-gray-800 dark:text-white text-4xl" />,
    title: "GitHub",
  },
  {
    icon: <BiLogoVisualStudio className="text-blue-600 text-4xl" />,
    title: "VS Code",
  },
  { icon: <SiCanva className="text-[#3969E7] text-4xl" />, title: "Canva" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-10">
      <div className="flex items-center justify-center gap-4 pt-10 mb-10">
        <span className="w-20 h-[3px] bg-[#F76500] rounded-full"></span>

        <h2
          className="text-5xl font-bold font-bubblegum text-white text-center"
          data-aos="zoom-in"
        >
          Skills
        </h2>

        <span className="w-20 h-[3px] bg-[#F76500] rounded-full"></span>
      </div>

      {/* RESPONSIVE GRID */}
      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-4 
          lg:grid-cols-4 
          xl:grid-cols-5
          gap-8 
          max-w-6xl 
          mx-auto
        "
      >
        {skills.map((skill, i) => (
          <MagneticBubble key={i} icon={skill.icon} title={skill.title} />
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
      COSMIC MAGNETIC BUBBLE (Tilt + Glow + Orbit + Float)
--------------------------------------------------------- */
function MagneticBubble({ icon, title }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-30, 30], [10, -10]);
  const rotateY = useTransform(x, [-30, 30], [-10, 10]);

  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);

    x.set(dx * 0.4);
    y.set(dy * 0.4);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY }}
      animate={{
        y: hovering ? y.get() : [0, -10, 0, 8, 0],
        boxShadow: hovering
          ? [
              "0 0 0px rgba(255,255,255,0)",
              "0 0 20px rgba(0,212,255,0.5)",
              "0 0 30px rgba(0,212,255,0.7)",
            ]
          : "0 4px 20px rgba(0,0,0,0.15)",
      }}
      transition={{
        duration: hovering ? 0.25 : 4,
        repeat: hovering ? 0 : Infinity,
        ease: "easeInOut",
      }}
      onMouseMove={(e) => {
        setHovering(true);
        handleMouseMove(e);
      }}
      onMouseLeave={handleMouseLeave}
      className="
        relative 
        bg-white dark:bg-neutral-900 
        rounded-full p-6 w-28 h-28 
        flex flex-col items-center justify-center
        cursor-pointer border border-gray-200 dark:border-neutral-700
        transition-all hover:scale-[1.12]
      "
    >
      {/* ORBIT RING */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-cyan-400/40"
        animate={{
          rotate: hovering ? 360 : 0,
          scale: hovering ? 1.15 : 1,
          opacity: hovering ? 1 : 0.4,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <span className="text-4xl relative z-10">{icon}</span>
      <p className="mt-2 text-sm font-medium text-center z-10">{title}</p>
    </motion.div>
  );
}
