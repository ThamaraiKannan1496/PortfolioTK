import { useEffect, useRef, useState } from "react";
import { IoHome } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaRegFileLines, FaBullseye } from "react-icons/fa6";
import { LuServer } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import SocialIcons from "./utilities/SocialIcons";

// All menu links
const links = [
  // { id: "home", label: "Home", icon: <IoHome /> },
  { id: "about", label: "About", icon: <BsFillPersonLinesFill /> },
  { id: "skills", label: "Skills", icon: <FaBullseye /> },
  { id: "projects", label: "Projects", icon: <FaRegFileLines /> },
  { id: "services", label: "Services", icon: <LuServer /> },
  { id: "contact", label: "Contact", icon: <MdEmail /> },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const sideRef = useRef(null);

  // 📌 Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sideRef.current && !sideRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // 📌 Active section scroll detection (scroll-spy)
  useEffect(() => {
    const sections = links.map((item) => document.getElementById(item.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => sections.forEach((sec) => sec && observer.unobserve(sec));
  }, []);

  // Scroll and close mobile menu
  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-5 right-5 text-white text-2xl z-[1000]"
      >
        ☰
      </button>

      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex flex-col fixed h-screen w-72 px-4 bg-[#03020A] text-[#CCCCCA] shadow-xl">
        <div className="flex flex-col items-center py-5">
          <img
            src="/my6.jpg"
            // src="https://t3.ftcdn.net/jpg/07/98/62/48/360_F_798624845_xAza5a8sM9RG89Qw6I4fEqte4X0qpIhL.webp"
            className="rounded-full w-28 h-28 object-cover border-8 border-[#ffffff]/10"
          />
          <h3 className="mt-3 font-sirin text-2xl font-bold">
            {/* <span className="text-[#F4BC84]">T</span>hamarai{" "} */}
            <span className="text-[#F76500]">K</span>annan
          </h3>
        </div>

        <SocialIcons />

        <ul className="flex flex-col flex-1 mt-10 gap-y-6 font-poppins px-4">
          {links.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-3 cursor-pointer text-lg transition-all group 
                ${
                  active === item.id
                    ? "text-[#F76500] font-semibold"
                    : "hover:text-white"
                }`}
              >
                <span
                  className={`text-xl transition-all group-hover:text-[#F76500] 
                  ${active === item.id ? "text-[#F76500]" : ""}`}
                >
                  {item.icon}
                </span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Sidebar */}
      <div
        ref={sideRef}
        className={`lg:hidden fixed top-0 left-0 h-screen w-64 bg-[#03020A] text-[#CCCCCA] p-6 z-[999] 
        transform transition-all duration-300 ease-out 
        ${open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-white text-3xl"
        >
          ✕
        </button>

        {/* Image + Name */}
        <div className="flex flex-col items-center py-5">
          <img
            src="https://t3.ftcdn.net/jpg/07/98/62/48/360_F_798624845_xAza5a8sM9RG89Qw6I4fEqte4X0qpIhL.webp"
            className="rounded-full w-24 h-24 object-cover border-4 border-[#F4BC84]"
          />
          <h3 className="mt-3 font-sirin text-2xl font-bold">
            <span className="text-[#F4BC84]">T</span>hamarai{" "}
            <span className="text-[#F4BC84]">K</span>annan
          </h3>
        </div>

        <SocialIcons />

        {/* Mobile Menu */}
        <ul className="flex flex-col gap-6 mt-10 font-poppins">
          {links.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-3 text-lg transition-all group 
                ${
                  active === item.id
                    ? "text-[#F76500] font-semibold"
                    : "hover:text-white"
                }`}
              >
                <span
                  className={`text-xl group-hover:text-[#F76500] 
                  ${active === item.id ? "text-[#F76500]" : ""}`}
                >
                  {item.icon}
                </span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
