const SlideButton = ({ label, href }) => {
  return (
    <a
      href={href}
      target="_blank" // <-- opens PDF in new tab
      rel="noopener noreferrer"
      className="relative inline-block text-center
      rounded-tl-2xl rounded-br-2xl
      bg-white px-6 py-2 font-medium text-[#212529]
      transition-all duration-300 border border-black
      hover:border-white hover:text-white
      cursor-pointer group overflow-hidden"
    >
      {/* TEXT */}
      <span className="relative z-10 text-lg font-poppins tracking-wider">
        {label}
      </span>

      {/* SLIDE BLACK BG */}
      <span
        className="absolute left-0 top-0 h-full w-0 bg-black 
        transition-all duration-300 group-hover:w-full"
      ></span>
    </a>
  );
};

export default SlideButton;
