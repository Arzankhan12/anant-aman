import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Foodsuply from '../assets/food.jpg';
import promiseImg from '../assets/education.jpg';

const Promise = () => {
  return (
    <div id='promise' className="min-h-screen bg-transparent lg:mt-[-6rem] max-md:mt-0 flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <motion.div 
          className="bg-[#F2C94C] py-4 rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-12">
            {/* Text Content */}
            <motion.div 
              className="space-y-6 flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-[3rem] font-semibold text-left text-black">
                A Promise You Can Believe In
              </h1>
              
              <p className="text-black/80 text-[16px]">
                "For 11+ years, Anant Aman Social Welfare Society has stood as a 
                beacon of hope and trust. Every campaign, every rupee, and every 
                effort is dedicated to making a real difference. Join us, and together, 
                we'll continue this legacy of change."
              </p>
              
              <div className="space-y-4">
                <h2 className="text-[1.5rem] md:text-3xl font-bold text-black">
                  Let's Create a Better Tomorrow
                </h2>
                <p className="text-black/80 text-[12px]">
                  Be the reason someone smiles, learns, or lives. Join Anant Aman 
                  Social Welfare Society today and be part of a story worth telling.
                </p>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div 
              className="order-first md:order-last"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="rounded-xl overflow-hidden h-[300px] md:h-[400px] w-full">
                <Image 
                  src={promiseImg}
                  alt="Community celebration"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Impact Section */}
      <motion.div 
        id='promise' 
        className="relative w-[80%] max-md:w-[90%] lg:h-[40vh] lg:py-[12rem] max-lg:py-[6rem] md:h-[27rem] promise-radius"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={Foodsuply}
            alt="Happy children"
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
        </div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col max-sm:h-[380px] items-center justify-center text-center px-4 md:px-8 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-[3rem] font-bold text-white mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Create Impact Today
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-[1.2rem] text-white mb-8 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            "Hunger can't wait. Neither can we. Join us today and be the reason someone survives tomorrow."
          </motion.p>

          <motion.button 
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Join as a volunteer
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Promise;
