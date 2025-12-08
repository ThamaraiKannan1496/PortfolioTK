import React, { useEffect, useRef, useState } from "react";
import SlideButton from "./utilities/SlideButton";
import { motion, useMotionValue, useTransform } from "framer-motion";

/**
 * FUTURISTIC ABOUT SECTION
 */

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const roles = ["Frontend Developer", "React JS Developer", "UI Engineer"];

export default function AboutSection() {
  // Typewriter
  const [roleIndex, setRoleIndex] = useState(0);
  const [typeText, setTypeText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Parallax
  const wrapperRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-1, 1], [8, -8]);
  const rotateY = useTransform(x, [-1, 1], [-8, 8]);

  // Typewriter logic
  useEffect(() => {
    let timer;
    const full = roles[roleIndex];
    const speed = isDeleting ? 40 : 90;

    timer = setTimeout(() => {
      setTypeText((prev) =>
        isDeleting
          ? full.substring(0, prev.length - 1)
          : full.substring(0, prev.length + 1)
      );

      if (!isDeleting && typeText === full) {
        setTimeout(() => setIsDeleting(true), 800);
      } else if (isDeleting && typeText === "") {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typeText, isDeleting, roleIndex]);

  // Parallax mouse movement
  const handleMove = (e) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const nx = (e.clientX - cx) / (rect.width / 2);
    const ny = (e.clientY - cy) / (rect.height / 2);

    x.set(Math.max(-1, Math.min(1, nx)));
    y.set(Math.max(-1, Math.min(1, ny)));
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      className="w-full bg-black relative overflow-hidden py-7 md:py-14  px-6 sm:px-10"
      id="about"
    >
      {/* BACKGROUND BLOBS */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-16 top-10 w-72 h-72 rounded-full bg-[#f4a82520] blur-3xl animate-blob" />
        <div className="absolute right-40 bottom-10 w-48 h-48 rounded-full bg-[#f4a82515] blur-2xl animate-blob delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT AREA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          transition={{ staggerChildren: 0.16 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h3
            variants={fadeUp}
            className="text-3xl md:text-5xl text-white font-caveat"
          >
            Hy! I Am
          </motion.h3>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-extrabold font-bubblegum text-[#f4a825]"
          >
            Thamarai Kannan
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-300 max-w-lg leading-relaxed font-poppins"
          >
            “I design things, code things, break things — and then fix them
            prettier.”
          </motion.p>

          {/* TYPEWRITER */}
          <motion.div variants={fadeUp} className="font-poppins">
            <p className="text-gray-400">I am a</p>
            <p className="text-white text-2xl">
              <span className="text-[#f4a825]">▌ </span>
              {typeText}
            </p>
          </motion.div>

          {/* EXPERIENCE */}
          <motion.div variants={fadeUp} className="pt-6">
            <h2 className="text-5xl font-bold font-poppins text-white">
              02<span className="text-3xl">+</span>
            </h2>
            <p className="text-gray-400 uppercase">
              Years of <br /> Experience
            </p>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex items-center gap-6"
          >
            <SlideButton label="Hire me" href="#contact" />
            <SlideButton label="Download CV" href="/ThamaraiKannanResume.pdf" />
          </motion.div>
        </motion.div>

        {/* RIGHT — IMAGE + ORBITS + ARROW */}
        <motion.div
          ref={wrapperRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center"
        >
          {/* ⭐ PERFECT CURVED ARROW (TOUCHES RING) */}
          <motion.svg
            width="300"
            height="300"
            viewBox="0 0 480 400"
            fill="none"
            className="absolute -left-40 top-44 z-30 pointer-events-none"
          >
            <motion.path
              d="M40 240 C200 120, 330 120, 440 180"
              stroke="#f4a825"
              strokeWidth="4"
              strokeDasharray="10 14"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{
                filter: "drop-shadow(0 0 6px #f4a825)",
              }}
            />
            <motion.polygon
              points="440,180 422,170 428,190"
              fill="#f4a825"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.3, 1], opacity: [0, 1, 1] }}
              transition={{ delay: 1.7, duration: 0.6, ease: "backOut" }}
              style={{ filter: "drop-shadow(0 0 8px #f4a825)" }}
            />
          </motion.svg>

          {/* GOLD SPOTLIGHT */}
          <motion.div
            style={{ rotateX, rotateY }}
            className=" absolute w-[420px] h-[420px] rounded-full -right-6 top-6 z-0"
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side,#f4a82540,transparent 45%)",
                filter: "blur(35px)",
              }}
            />
          </motion.div>

          {/* INNER RING */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute w-[360px] h-[360px] rounded-full border border-[#f4a82533]"
          />

          {/* PARTICLES */}
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#f4a825]"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2 + i, repeat: Infinity }}
              style={{
                top: `${20 + i * 12}%`,
                left: `${50 + i * 4}px`,
                filter: "drop-shadow(0 0 6px #f4a825)",
              }}
            />
          ))}

          {/* PROFILE IMAGE */}
          <motion.div
            style={{ rotateX, rotateY }}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#f4a825] shadow-[0_0_60px_#f4a82555] bg-black z-20 relative"
          >
            <img
              src="/kannanbg.png"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* KEYFRAMES */}
      <style jsx>{`
        .animate-blob {
          animation: blob 8s infinite;
        }
        @keyframes blob {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.9;
          }
          33% {
            transform: translateY(-12px) scale(1.05);
            opacity: 0.85;
          }
          66% {
            transform: translateY(6px) scale(0.98);
            opacity: 0.9;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.9;
          }
        }
      `}</style>
    </section>
  );
}
