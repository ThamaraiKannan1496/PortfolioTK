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
      <h2 className="text-5xl font-bold text-center mb-14 font-bubblegum">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <MagneticBubble key={i} icon={skill.icon} title={skill.title} />
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------
      MAGNETIC FLOATING BUBBLE COMPONENT
------------------------------------------- */
function MagneticBubble({ icon, title }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);

    x.set(dx * 0.3);
    y.set(dy * 0.3);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x, y }}
      animate={{
        y: hovering ? y.get() : [0, -6, 0, 6, 0],
      }}
      transition={{
        duration: hovering ? 0.2 : 4,
        repeat: hovering ? 0 : Infinity,
        ease: "easeInOut",
      }}
      onMouseMove={(e) => {
        setHovering(true);
        handleMouseMove(e);
      }}
      onMouseLeave={handleMouseLeave}
      className="
        bg-white dark:bg-neutral-900 shadow-xl 
        rounded-full p-6 w-28 h-28 flex flex-col items-center justify-center
        hover:shadow-2xl transition-all cursor-pointer 
        border border-gray-200 dark:border-neutral-700
      "
    >
      <span className="text-4xl">{icon}</span>
      <p className="mt-2 text-sm font-medium text-center">{title}</p>
    </motion.div>
  );
}
