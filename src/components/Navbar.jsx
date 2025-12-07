import SocialIcons from "./utilities/SocialIcons";
import { IoHome } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaRegFileLines } from "react-icons/fa6";
import { LuServer } from "react-icons/lu";
import { FaBullseye } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-5 right-5 text-white text-xl transition-all"
      >
        ☰
      </button>
      <nav className="hidden lg:flex flex-col fixed h-screen w-72 px-4  bg-[#03020A] text-[#CCCCCA] ">
        {/* Image and Name */}
        <div className="flex flex-col items-center py-5">
          <img
            src="https://t3.ftcdn.net/jpg/07/98/62/48/360_F_798624845_xAza5a8sM9RG89Qw6I4fEqte4X0qpIhL.webp"
            alt="thamaraikannan-image"
            className="rounded-full w-25 h-25 object-cover border-8"
          />
          <h3 className="mt-3 font-sirin text-2xl font-bold capitalize">
            <span className="text-[#F4BC84]">T</span>
            hamarai&nbsp;&nbsp;
            <span className="text-[#F4BC84]">K</span>
            annan
          </h3>
        </div>

        {/* social icons */}
        <SocialIcons />

        {/* Desktop Menu */}
        <ul className="flex flex-col flex-1 my-10 lg:mb-0 text-lg gap-y-5 xl:gap-y-8 font-poppins px-5">
          <li>
            <a href="#home" className="flex gap-x-3 hover:text-white group">
              <span className="text-xl group-hover:text-[#F76500]">
                <IoHome />
              </span>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="flex gap-x-3 hover:text-white group">
              <span className="text-xl group-hover:text-[#F76500]">
                <BsFillPersonLinesFill />
              </span>
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="flex gap-x-3 hover:text-white group">
              <span className="text-xl group-hover:text-[#F76500]">
                <FaBullseye />
              </span>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="flex gap-x-3 hover:text-white group">
              <span className="text-xl group-hover:text-[#F76500]">
                <FaRegFileLines />
              </span>
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="flex gap-x-3 hover:text-white group">
              <span className="text-xl group-hover:text-[#F76500]">
                <LuServer />
              </span>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="flex gap-x-3 hover:text-white group">
              <span className="text-xl group-hover:text-[#F76500]">
                <MdEmail />
              </span>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* Mobile Sidebar */}
      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-screen w-64 bg-[#03020A] text-[#CCCCCA] p-5 transform
  ${open ? "translate-x-0" : "-translate-x-full"}
  transition-transform duration-300 z-999`}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 text-white text-2xl"
        >
          ✕
        </button>

        {/* Image + Name */}
        <div className="flex flex-col items-center py-5">
          <img
            src="https://t3.ftcdn.net/jpg/07/98/62/48/360_F_798624845_xAza5a8sM9RG89Qw6I4fEqte4X0qpIhL.webp"
            alt="thamaraikannan-image"
            className="rounded-full w-25 h-25 object-cover border-8"
          />
          <h3 className="mt-3 font-sirin text-2xl font-bold capitalize">
            <span className="text-[#F4BC84]">T</span>
            hamarai&nbsp;&nbsp;
            <span className="text-[#F4BC84]">K</span>
            annan
          </h3>
        </div>

        <SocialIcons />

        {/* Mobile Menu */}
        <ul className="flex flex-col gap-y-5 mt-8 text-lg font-poppins">
          <li>
            <a href="#home" className="flex gap-x-3 hover:text-white group">
              <span className="text-xl group-hover:text-[#F76500]">
                <IoHome />
              </span>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="flex gap-x-3 hover:text-white group">
              <span className="text-xl group-hover:text-[#F76500]">
                <BsFillPersonLinesFill />
              </span>
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="flex gap-x-3 hover:text-white group">
              <span className="text-xl group-hover:text-[#F76500]">
                <FaBullseye />
              </span>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="flex gap-x-3 hover:text-white group">
              <span className="text-xl group-hover:text-[#F76500]">
                <FaRegFileLines />
              </span>
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="flex gap-x-3 hover:text-white group">
              <span className="text-xl group-hover:text-[#F76500]">
                <LuServer />
              </span>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="flex gap-x-3 hover:text-white group">
              <span className="text-xl group-hover:text-[#F76500]">
                <MdEmail />
              </span>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
