import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typography, Box, Button } from "@mui/material";

const Hero = () => {
  const heading =
    "11+ Years of Trust. Countless Lives Touched. Join the Movement That Makes a Difference.";
  const para_hero =
    "Anant Aman Social Welfare Society is more than an NGO—it’s a legacy of hope, action, and change. For over a decade, we’ve been transforming lives with honesty, dedication, and an unwavering commitment to the underprivileged. Be a part of this change.";
  const priscrib = "230 children under our care";

  return (
    <motion.div
      className="h-[100dvh] bg-hero flex items-center"
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Box className="px-[2vw] max-sm:px-[5vw] w-[100%] ">
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <Typography
            variant="h1"
            sx={{ fontSize: { md: "3rem", xs: "2rem" }, color: "white", letterSpacing: "1px", fontWeight: "bold", width: { lg: "60%", sm: "70%", md: "70%" } }}
          >
            {heading}
          </Typography>
          <Typography
            component="p"
            variant="subtitle1"
            sx={{ color: "white", fontSize: { md: "1rem", xs: "1rem" }, my: 2, width: { lg: "60%", sm: "100%", md: "100%" } }}
          >
            {para_hero}
          </Typography>
        </motion.div>
        <Box sx={{ display: "flex", justifyContent: { lg: "left", md: "left", sm: "left" }, alignItems: "center", gap: 2, my: 5 }}>
          <motion.button
            className="bg-white text-black px-6 py-3 rounded-md"
            whileHover={{ scale: 1.1 }}
          >
            What we do
          </motion.button>
          <motion.button
            className="text-white border border-white px-6 py-3 rounded-md"
            whileHover={{ scale: 1.1 }}
          >
            Play Video
          </motion.button>
        </Box>
        <motion.div className="flex justify-left items-center h-auto gap-2 " initial={{ width: "0%" }} animate={{ width: "80%" }} transition={{ duration: 1 }}>
          <p className="text-white">{priscrib}</p>
          <div className="w-[80%] bg-white h-[2px] flex-1" />
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default Hero;
