import React from "react";
import { motion } from "framer-motion";
import { Typography, Box } from "@mui/material";
import { FaPlayCircle } from "react-icons/fa";
import backgroundImage from "../assets/bg.png"; // Adjust the path accordingly
import Image from "next/image";

const Hero = () => {
  const heading =
    "11+ Years of Trust. Countless Lives Touched. Join the Movement That Makes a Difference.";
  const para_hero =
    "Anant Aman Social Welfare Society is more than an NGO—it’s a legacy of hope, action, and change. For over a decade, we’ve been transforming lives with honesty, dedication, and an unwavering commitment to the underprivileged. Be a part of this change.";
  const priscrib = "230 children under our care";

  return (
    <motion.div
      className="h-[110dvh] relative overflow-hidden flex items-center"
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Content */}
      <Box className="px-[2vw] max-sm:px-[5vw] w-[100%] px-[6.7rem] max-md:px-[1rem] relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { md: "3rem", xs: "2rem" },
              color: "white",
              letterSpacing: "1px",
              fontWeight: "bold",
              width: { lg: "60%", sm: "70%", md: "70%" },
            }}
          >
            {heading}
          </Typography>
          <Typography
            component="p"
            variant="subtitle1"
            sx={{
              color: "white",
              fontSize: { md: "1.5rem", xs: "1rem" },
              my: 2,
              width: { lg: "80%", sm: "100%", md: "100%" },
              lineHeight: "28.13px",
              mb: "4rem",
              fontWeight: "500",
              my: "2rem",
            }}
          >
            {para_hero}
          </Typography>
        </motion.div>
        <Box
          sx={{
            display: "flex",
            justifyContent: { lg: "left", md: "left", sm: "left" },
            alignItems: "center",
            gap: 2,
            my: 8,
          }}
        >
          <motion.button
            className="bg-white text-black px-6 py-3 rounded-md"
            whileHover={{ scale: 1.1 }}
            onClick={() => window.open('https://drive.google.com/file/d/1x5oQz8nDRV8QaaUCL3SW59NRgauwzZ8E/view?usp=sharing ', '_blank', 'noopener,noreferrer')}
          >
            What we do
          </motion.button>
          {/* <motion.button
            className="text-white px-6 py-3 rounded-md flex justify-center items-center gap-2"
            whileHover={{ scale: 1.1 }}
          >
            <FaPlayCircle className="w-5 h-5" />
            Play Video
          </motion.button> */}
        </Box>
        <motion.div
          className="flex justify-left items-center h-auto gap-2 mt-[8.8rem]"
          initial={{ width: "0%" }}
          animate={{ width: "80%" }}
          transition={{ duration: 1 }}
        >
          <p className="text-white">{priscrib}</p>
          <div className="w-[100%] bg-white h-[1px] flex-1" />
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default Hero;
