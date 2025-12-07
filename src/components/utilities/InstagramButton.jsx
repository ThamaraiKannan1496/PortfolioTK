import { FaInstagram } from "react-icons/fa";

const InstagramButton = () => (
  <a
    href="https://www.instagram.com/thamaraikannan1496/"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-[95px] right-[30px] lg:right-[30px]
                bg-linear-to-br from-purple-500 via-pink-500 to-orange-400
                hover:from-purple-600 hover:via-pink-600 hover:to-orange-500
                text-white rounded-full p-[11px] cursor-pointer
                shadow-md hover:shadow-lg transition-all duration-300 z-1000
                flex items-center justify-center
                active:transform-none active:translate-x-0 active:translate-y-0"
  >
    <FaInstagram className="text-xl" />
  </a>
);

export default InstagramButton;
