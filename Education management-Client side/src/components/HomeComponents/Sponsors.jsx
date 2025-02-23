import React from "react";
import { motion } from "framer-motion";

import aws from "../../assets/logos/aws-educate-logo.png";
import brac from "../../assets/logos/brac-logo.png";
import iut from "../../assets/logos/iut-logo.png";
import khanAcademy from "../../assets/logos/khan-academy-logo.png";
import ph from "../../assets/logos/ph-logo.png";
import skillBuild from "../../assets/logos/skillBuild-logo.png";

const Sponsors = () => {
  const sponsors = [aws, brac, iut, khanAcademy, ph, skillBuild];
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors]; // Duplicate for smooth loop

  return (
    <div className="w-full py-8">
      <p className="max-w-[800px] mx-auto mb-6 px-4 text-lg md:text-xl text-dark/95 text-center font-bold"> Trusted By 5,000 companies and millions of learners around the world </p>
      <div className="relative w-full py-4 flex items-center overflow-hidden">
        <motion.div className="flex gap-12"
          initial={{ x: "5%" }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 50,
            ease: "linear",
          }}
        >
          {duplicatedSponsors.map((it, index) => (
            <motion.div key={index} className="h-16 w-16 sm:h-20 sm:w-20 md:w-28 md:h-28 flex items-center justify-center"
              animate={{
                y: [0, -10, 0, 10, 0], // Wave effect
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
                delay: index * 0.5, // Staggered wave effect
              }}
            >
              <img src={it} alt="" className="max-w-full max-h-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Sponsors;
