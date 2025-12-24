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
import { motion } from "framer-motion";

/* ---------------- SKILLS DATA ---------------- */
const skills = [
  { icon: <SiHtml5 className="text-orange-500" />, title: "HTML5" },
  { icon: <SiCss3 className="text-blue-500" />, title: "CSS3" },
  { icon: <SiBootstrap className="text-purple-600" />, title: "Bootstrap" },
  { icon: <SiTailwindcss className="text-sky-400" />, title: "Tailwind CSS" },
  { icon: <SiJavascript className="text-yellow-400" />, title: "JavaScript" },
  { icon: <SiReact className="text-cyan-400" />, title: "React" },
  { icon: <SiNextdotjs className="text-white" />, title: "Next.js" },
  { icon: <RiBearSmileFill className="text-white" />, title: "Zustand" },
  { icon: <SiOracle className="text-[#C74634]" />, title: "Oracle" },
  { icon: <SiGit className="text-red-500" />, title: "Git" },
  { icon: <SiGithub className="text-white" />, title: "GitHub" },
  { icon: <BiLogoVisualStudio className="text-blue-500" />, title: "VS Code" },
  { icon: <SiCanva className="text-[#3969E7]" />, title: "Canva" },
];

/* ---------------- MAIN COMPONENT ---------------- */
export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-[#03020A]">
      {/* HEADER */}
      <div className="flex items-center justify-center gap-3 mb-12">
        <span className="w-12 h-[3px] bg-[#F76500] rounded-full" />
        <h2 className="text-4xl font-bold font-bubblegum text-white">Skills</h2>
        <span className="w-12 h-[3px] bg-[#F76500] rounded-full" />
      </div>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-3
          sm:grid-cols-4
          md:grid-cols-5
          lg:grid-cols-6
          gap-4
          max-w-6xl
          mx-auto
        "
      >
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
}

/* ---------------- SKILL CARD ---------------- */
function SkillCard({ icon, title }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="
        h-28
        rounded-xl
        bg-white/5
        border border-white/10
        backdrop-blur-sm
        flex flex-col items-center justify-center
        text-white
        cursor-pointer
      "
    >
      <span className="text-3xl">{icon}</span>
      <p className="mt-1 text-xs font-medium opacity-80">{title}</p>
    </motion.div>
  );
}
