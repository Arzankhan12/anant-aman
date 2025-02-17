import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";  
import Image from "next/image";
import child from "../assets/bgimg.png";
import l1 from "../assets/1.png";
import l2 from "../assets/2.png";
import l3 from "../assets/3.png";
import l4 from "../assets/4.png";
import l5 from "../assets/5.png";

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const logos = [
    { id: 1, alt: "Supporter 1", src: l1 },
    { id: 2, alt: "Supporter 2", src: l2 },
    { id: 3, alt: "Supporter 3", src: l3 },
    { id: 4, alt: "Supporter 4", src: l4 },
    { id: 5, alt: "Supporter 5", src: l4 },
    { id: 6, alt: "Supporter 6", src: l5 },
  ];

  return (
    <div id="about" className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-[2rem]">
      <div className="grid lg:grid-cols-2 gap-8 items-center w-[81%] mx-auto">
        {/* Left Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 lg:ml-[-6rem] max-md:ml-[0] my-[2rem]">
            <div className="border-t-2 border-black w-[5rem]" />
            <h2 className="text-sm text-black font-bold tracking-wider uppercase">
              THE LIVES WE'VE TOUCHED
            </h2>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#105A98] my-[2rem]">
            Real Stories of Transformation
          </h1>
      
          <div className="space-y-6">
            <motion.blockquote
              className="text-[#525560] flex mt-[2rem]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
             <li></li> "I didn't know if my family would survive another day without
              food. Then Anant Aman's Babu Ki Rasoi came into our lives. Today,
              I have hope for tomorrow."
              — Sunita, Slum Resident
            </motion.blockquote>

            <motion.blockquote
              className="text-[#525560] flex my-[2rem]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
             <li></li> "I was scared when I found a lump in my breast, but thanks to
              Anant Aman's Cancer Awareness Drive, I got the support and
              information I needed. Early detection saved my life." — Priya, Community Member
            </motion.blockquote>

            <motion.button
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors duration-200 "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Learn more
            </motion.button>
          </div>
        </motion.div>

        {/* Right Video Section */}
        <motion.div
          className="relative aspect-square w-full max-w-lg mx-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            {isPlaying ? (
              <video
                src={child}
                controls
                autoPlay
                className="w-full h-full rounded-lg object-cover"
              />
            ) : (
              <>
                <Image
                  src={child}
                  alt="Children holding artwork"
                  width={500}
                  height={400}
                  unoptimized={true}
                  className="rounded-2xl object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="bg-white rounded-full p-4 cursor-pointer hover:bg-gray-100 transition-colors flex justify-center items-center duration-200"
                    onClick={() => setIsPlaying(true)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaPlay className="w-5 h-5"/>
                  </motion.div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>

      {/* Supporters Section */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex justify-left items-center h-auto gap-2 my-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-black font-bold uppercase">Our Supporters</p>
            <div className="w-[80%] bg-gray-100 h-[2px] flex-1" />
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {logos.map((logo) => (
              <motion.div
                key={logo.id}
                className="w-full max-w-[160px] flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
