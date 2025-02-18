"use client";
import React, { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Line from "../assets/Line.png";
import Image from "next/image";
import vector from "../assets/Vector.png";
import vector1 from "../assets/Vector1.png";
import vector2 from "../assets/Vector2.png";
import vector3 from "../assets/Vector3.png";
import suply from "../assets/suply.png";

const ImpactCard = ({ icon, title, description }) => (
  <div className="flex gap-4 mb-6">
    <div className="flex-shrink-0 w-8 h-8 text-green-500 ml-[2rem]">
      <Image
        src={icon}
        alt={title}
        width={32}
        height={32}
        className="w-full h-full object-contain bg-white p-[.3rem] rounded-lg"
      />
    </div>
    <div>
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm text-base/6">{description}</p>
    </div>
  </div>
);

const WhyChooseUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: suply,
      title: "Impact 1",
    },
    {
      image: suply,
      title: "Impact 2",
    },
    {
      image: suply,
      title: "Impact 3",
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const impacts = [
    {
      icon: vector,
      title: "Babu Ki Rasoi",
      description: "Feeding thousands in slum areas with dignity and care.",
    },
    {
      icon: vector1,
      title: "Cancer Awareness Drives",
      description: "Educating communities and supporting early detection.",
    },
    {
      icon: vector2,
      title: "Educational Projects",
      description:
        "Bringing light to orphanages and underprivileged children through innovative teaching techniques.",
    },
    {
      icon: vector3,
      title: "Therapy",
      description:
        "Therapy is a guided process of healing and self-improvement that helps individuals manage emotions, behaviors, and mental health challenges.",
    },
  ];

  return (
    <section id="why-choose-us" className="bg-[#1a237e] min-h-screen">
      <div className="container mx-auto py-16 px-12 max-md:px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:w-[80%] ml-[20%] max-md:ml-[0] max-md:w-[w-100%]">
            <div className="flex items-center gap-4 mb-8 ml-[-13%] max-md:ml-[0]">
              <div className="h-0.5 w-12 bg-white"></div>
              <h2 className="text-white uppercase tracking-wider text-sm font-semibold">
                WHY CHOOSE US
              </h2>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrevSlide}
                  className="w-[3.5rem] h-[3.5rem] text-center rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-6 h-6 text-black" />
                </button>
                <span className="text-white text-4xl font-bold">
                  {currentSlide + 1}
                </span>
                <button
                  onClick={handleNextSlide}
                  className="w-[3.5rem] h-[3.5rem] text-center rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
                  aria-label="Next slide"
                >
                  <ArrowRight  className="w-6 h-6 text-black" />
                </button>
              </div>
            </div>

            <h1 className="text-white text-4xl lg:text-5xl font-bold mb-6">
              Our Proven Impact
            </h1>
            <p className="text-gray-300 mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>

            <div className="space-y-6 relative">
              <Image src={Line} alt="line" className="absolute h-[100%] left-0 " />
              {impacts.map((impact, index) => (
                <ImpactCard
                  key={index}
                  icon={impact.icon}
                  title={impact.title}
                  description={impact.description}
                />
              ))}
            </div>
          </div>

          {/* Right Image Slider */}
          <div className="relative rounded-lg overflow-hidden">
            <div className="relative w-full aspect-square overflow-hidden flex justify-center items-center">
              <div className="whychooseus-slide-css w-[65%] h-[100%] max-md:w-[100%] lg:ml-[5.3rem] max-md:ml-0">
                <div className="blue-border"></div>
                <div className="yellow-border"></div>
                {/* Background decorative elements */}

                {/* Image slider */}
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {slides.map((slide, index) => (
                      <div key={index} className="flex-shrink-0 w-full h-full">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          width={600}
                          height={600}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pagination dots */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
