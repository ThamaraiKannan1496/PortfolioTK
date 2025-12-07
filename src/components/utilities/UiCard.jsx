import { motion } from "framer-motion";
import { useState } from "react";

const UiCard = ({ title, tags, img }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: -5,
        transition: { type: "spring", stiffness: 120 },
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative w-[230px] rounded-[20px] bg-[#141414] p-[5px] 
                 shadow-lg shadow-black/40 cursor-pointer group"
    >
      {/* IMAGE WRAPPER */}
      <div className="relative h-[150px] rounded-[15px] overflow-hidden">
        {/* Pixel → Sharp Animation */}
        <motion.div
          animate={{
            filter: hover ? "blur(0px)" : "blur(0px)",
            scale: hover ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
          style={{ backgroundImage: `url(${img})` }}
          className="absolute inset-0 bg-cover bg-center"
        />

        {/* Shine Sweep */}
        <motion.div
          initial={{ x: "-120%" }}
          animate={hover ? { x: "120%" } : { x: "-120%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r 
          from-transparent via-white/20 to-transparent 
          w-[120%] skew-x-12"
        />

        {/* TAGS */}
        <div className="absolute top-2 left-2 flex gap-1 z-20">
          {tags.map((t, i) => (
            <span
              key={i}
              className="text-[9px] border border-amber-500 px-2 py-[2px] 
              bg-black/70 rounded-full text-white backdrop-blur-xl"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* TITLE */}
      <div className="mt-2 py-2">
        <span className="block text-center text-[14px] font-medium text-white">
          {title}
        </span>
      </div>
    </motion.div>
  );
};

export default UiCard;
