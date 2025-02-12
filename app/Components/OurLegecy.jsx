"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import suply from "../assets/suply.png";

const MilestoneCard = ({ year, description, imageUrl }) => (
  <motion.div
    className="relative group overflow-hidden rounded-lg cursor-pointer"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    {/* Dark overlay that becomes more transparent on hover */}
    <motion.div
      className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 z-10"
      initial={{ opacity: 0.7 }}
      whileHover={{ opacity: 0.4 }}
      transition={{ duration: 0.3 }}
    ></motion.div>

    {/* Image */}
    <div className="relative h-[400px] w-full">
      <Image
        src={imageUrl}
        alt={`Milestone ${year}`}
        fill
        className="object-cover transform transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
      {/* Year */}
      <motion.h3
        className="text-white text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {year}
      </motion.h3>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-white text-lg mb-4">{description}</p>
        <motion.button
          className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn more
        </motion.button>
      </motion.div>
    </div>
  </motion.div>
);

const OurLegecy = () => {
  const milestones = [
    {
      year: "2012",
      description: "Anant Aman Social Welfare Society was founded.",
      imageUrl: suply,
    },
    {
      year: "2015",
      description: "Launched Babu Ki Rasoi, serving 50,000+ meals.",
      imageUrl: suply,
    },
    {
      year: "2018",
      description: "Organized the first Cancer Awareness Drive, impacting 10,000+ people.",
      imageUrl: suply,
    },
  ];

  return (
    <motion.section
      id="our-legacy"
      className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="h-0.5 w-12 bg-gray-400"></div>
          <h2 className="uppercase tracking-wider text-sm font-semibold text-gray-600">
            OUR LEGACY OF CHANGE
          </h2>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          We are creating Milestones<br />at a Glance
        </h1>
      </motion.div>

      {/* Milestones Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {milestones.map((milestone, index) => (
          <MilestoneCard
            key={index}
            year={milestone.year}
            description={milestone.description}
            imageUrl={milestone.imageUrl}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default OurLegecy;
