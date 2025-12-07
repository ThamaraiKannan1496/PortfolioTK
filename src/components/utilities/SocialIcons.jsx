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
      <a
        href="https://www.linkedin.com/in/thamaraikannan1496/"
        className="no-underline text-xl hover:text-[#03020A] bg-[#9F9F9F]/30 hover:bg-[#F4BC84] transition-all rounded-full p-2.5"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/ThamaraiKannan1496"
        className="no-underline text-xl hover:text-[#03020A] bg-[#9F9F9F]/30 hover:bg-[#F4BC84] transition-all rounded-full p-2.5"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/thamaraikannan1496/"
        className="no-underline text-xl hover:text-[#03020A] bg-[#9F9F9F]/30 hover:bg-[#F4BC84] transition-all rounded-full p-2.5"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61582178098240"
        className="no-underline text-xl hover:text-[#03020A] bg-[#9F9F9F]/30 hover:bg-[#F4BC84] transition-all rounded-full p-2.5"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>
    </div>
  );
};

export default SocialIcons;
