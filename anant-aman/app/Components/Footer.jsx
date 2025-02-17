import React from "react";
import flogo1 from "../assets/flogo1.png";
import Image from "next/image";
import { MessageCircle, PhoneCall, MapPin } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10">
      <div className="container max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8">
        {/* Anantaman Column (Expanded) */}
        <div className="lg:col-span-2 bg-[#000] px-4  max-md:px-[2rem]">
          <Image src={flogo1} alt="Logo" className="mb-4 w-50 h-50" />
          <p className="text-sm mt-1">
            Step into a world of compassion, hope, and endless possibilities. Together, let’s empower lives, spread awareness, and build a society of harmony and care. Your journey to make a difference begins here!
          </p>
        </div>

        {/* Home Column */}
        <div className="lg:col-span-1 max-md:px-[2rem] ml-[2rem]">
          <h3 className="text-lg font-semibold">Home</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li className="text-gray-400 pt-[1.2rem]">About us</li>
            <li className="text-gray-400 pt-[1.2rem]">Team</li>
            <li className="text-gray-400 pt-[1.2rem]">What we do</li>
            <li className="text-gray-400 pt-[1.2rem]">Contact</li>
          </ul>
        </div>

        {/* More Column */}
        <div className="lg:col-span-1  max-md:px-[2rem] ml-[2rem]">
          <h3 className="text-lg font-semibold">More</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li className="text-gray-400 pt-[1.2rem]">Projects</li>
            <li className="text-gray-400 pt-[1.2rem]">Events</li>
            <li className="text-gray-400 pt-[1.2rem]">Join</li>
            <li className="text-gray-400 pt-[1.2rem]">Blog</li>
          </ul>
        </div>

        {/* Connect Column */}
        <div className="lg:col-span-1  max-md:px-[2rem] ml-[2rem]">
          <h3 className="text-lg font-semibold">Connect</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li className="text-gray-400 pt-[1.2rem]">Facebook</li>
            <li className="text-gray-400 pt-[1.2rem]">Instagram</li>
            <li className="text-gray-400 pt-[1.2rem]">Twitter</li>
            <li className="text-gray-400 pt-[1.2rem]">LinkedIn</li>
          </ul>
        </div>

        {/* Contact Us Column (Expanded) */}
        <div className="lg:col-span-3  max-md:px-[2rem] px-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm mt-2 w-[80%] max-md:w-[100%]">
            If you have any questions or would like more information about how you can get involved, please
          </p>
          <ul className="mt-4 space-y-1 text-sm">
            <li> <PhoneCall className="inline-block mr-2 text-white w-5 h-5" /> +91-99070-46281, +91-777-199-7475</li>
            <li> <MessageCircle className="inline-block mr-2 text-white w-5 h-5" /> anantaman.sws@gmail.com</li>
            <li className="w-[80%] max-md:w-[100%]">  <MapPin className="inline-block mr-2 text-white w-5 h-5" /> 311, 3rd Floor, Apollo Square Mall, Janjeerwala Square, Race Course Road, Indore, M.P. 452001</li>
          </ul>
        </div>
      </div>

      <footer className="max-w-[1350px] pt-10 pb-10x bg-black text-white py-4 px-6 flex flex-col md:flex-row justify-center md:justify-evenly items-center text-sm">
  <div className="text-gray-300 text-center mb-2 md:mb-0 md:flex-1 ml-[20rem] max-md:ml-0">
    copyright@2023 Anant Aman All Right Reserved Created By Sarovi.Tech
  </div>
  <div className="flex items-center justify-center md:ml-auto space-x-2">
    <span className="text-gray-300">Terms & Condition</span>
    <span className="text-gray-300">||</span>
    <a href="#" className="text-gray-300 underline">Privacy Policy</a>
  </div>
</footer>



    </footer>
  );
};

export default Footer;
