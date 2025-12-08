import {
  FaFacebook,
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className="social-links flex gap-x-4 items-center justify-center">
      {/* LINKEDIN */}
      <a
        href="https://www.linkedin.com/in/thamaraikannan1496/"
        className="no-underline text-xl bg-[#9F9F9F]/30 rounded-full p-2.5
          transition-all hover:bg-[#0A66C2] hover:text-white hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>

      {/* GITHUB */}
      <a
        href="https://github.com/ThamaraiKannan1496"
        className="no-underline text-xl bg-[#9F9F9F]/30 rounded-full p-2.5
          transition-all hover:bg-[#181717] hover:text-white hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>

      {/* INSTAGRAM - REAL GRADIENT */}
      <a
        href="https://www.instagram.com/thamaraikannan1496/"
        className="no-underline text-xl bg-[#9F9F9F]/30 rounded-full p-2.5 text-white
          transition-all hover:scale-110 
          hover:bg-[linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>

      {/* FACEBOOK */}
      <a
        href="https://www.facebook.com/profile.php?id=61582178098240"
        className="no-underline text-xl bg-[#9F9F9F]/30 rounded-full p-2.5
          transition-all hover:bg-[#1877F2] hover:text-white hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>
    </div>
  );
};

export default SocialIcons;
