import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/THUCAVT.png";
import { motion } from "framer-motion";

// Animation container definition
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Adding motion to the name */}
            <motion.h1
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
              variants={container(0.2)} // Animation delay
              initial="hidden"
              animate="visible"
            >
              Duy Thuc Le Dinh
            </motion.h1>
            {/* Adding motion to the subtitle */}
            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
              variants={container(0.4)} // Animation delay
              initial="hidden"
              animate="visible"
            >
              Full Stack Developer
            </motion.span>
            {/* Adding motion to the description */}
            <motion.p
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
              variants={container(0.6)} // Animation delay
              initial="hidden"
              animate="visible"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            {/* Adding motion to the profile image */}
            <motion.img
              src={profilePic}
              alt="Duy Thuc"
              className="rounded-2xl"
              variants={container(0.8)} // Animation delay
              initial="hidden"
              animate="visible"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
