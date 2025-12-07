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

const skills = [
  {
    icon: <SiHtml5 className="text-orange-500 text-4xl" />,
    title: "HTML5",
    desc: "Semantic & accessible markup",
  },
  {
    icon: <SiCss3 className="text-blue-500 text-4xl" />,
    title: "CSS3",
    desc: "Flexbox • Grid • Responsive",
  },
  {
    icon: <SiBootstrap className="text-purple-600 text-4xl" />,
    title: "Bootstrap",
    desc: "UI components & layout",
  },
  {
    icon: <SiTailwindcss className="text-sky-500 text-4xl" />,
    title: "Tailwind CSS",
    desc: "Utility-first styling",
  },
  {
    icon: <SiJavascript className="text-yellow-400 text-4xl" />,
    title: "JavaScript",
    desc: "ES6+ features & logic",
  },
  {
    icon: <SiReact className="text-cyan-400 text-4xl" />,
    title: "React.js",
    desc: "UI • Components • State",
  },
  {
    icon: <SiNextdotjs className="text-black dark:text-white text-4xl" />,
    title: "Next.js",
    desc: "SSR • SSG ",
  },
  {
    icon: <RiBearSmileFill className="text-4xl" />,
    title: "Zustand",
    desc: "State management",
  },
  {
    icon: <SiOracle className="text-[#C74634] text-4xl" />,
    title: "Oracle",
    desc: "SQL - Database",
  },
  {
    icon: <SiGit className="text-red-500 text-4xl" />,
    title: "Git",
    desc: "Version control",
  },
  {
    icon: <SiGithub className="text-gray-800 dark:text-white text-4xl" />,
    title: "GitHub",
    desc: "Repositories & workflow",
  },
  {
    icon: <BiLogoVisualStudio className="text-blue-600 text-4xl" />,
    title: "VS Code",
    desc: "Code editor & extensions",
  },
  {
    icon: <SiCanva className="text-[#3969E7] text-4xl" />,
    title: "Canva",
    desc: "Design & social creatives",
  },
];

export default function Skills() {
  return (
    <section className="py-12 px-10" id="skills">
      <h2 className="text-5xl font-bold text-center mb-10 font-bubblegum">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white dark:bg-neutral-900 py-5 rounded-tl-4xl rounded-br-4xl shadow-md shadow-[#CCCCCA]/80 hover:shadow-md transition-all group"
          >
            <span className="group-hover:scale-180 transition-all duration-200">
              {skill.icon}
            </span>
            <h3 className="mt-3 text-lg font-medium font-raleway">
              {skill.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-1">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
