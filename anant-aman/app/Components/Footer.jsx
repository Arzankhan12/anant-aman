import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import flogo from "../assets/flogo.png";

const Footer = () => {
    return (
        <footer className="bg-[#0B0706] p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Section */}
              <div className="md:w-1/4 mb-8 md:mb-0">
                <Image src={flogo} alt='logo' className='ml-[2.8rem] mb-2'/>
                <h2 className="text-2xl text-white font-[300] mb-4">ANANTAMAN</h2>
                <p className="text-white">Step into a world of compassion, hope, and endless possibilities. Together, let’s empower lives, spread awareness, and build a society of harmony and care. Your journey to make a difference begins here!</p>
              </div>
    
              {/* Grid Sections */}
              <div className="grid grid-cols-4 max-md:grid-cols-2 lg:grid-col-5 gap-2 w-full">
                {/* Home Column */}
                <div className="">
                  <h3 className="font-bold text-white mb-4 text-xl">Home</h3>
                  <ul className="space-y-2">
                    <li className='h-[50px]'><a href="#" className="text-gray-300 hover:text-blue-600 transition ">About us</a></li>
                    <li className='h-[50px]'><a href="#" className="text-gray-300 hover:text-blue-600 transition ">Team</a></li>
                    <li className='h-[50px]'><a href="#" className="text-gray-300 hover:text-blue-600 transition ">What we do</a></li>
                    <li className='h-[50px]'><a href="#" className="text-gray-300 hover:text-blue-600 transition ">Contact</a></li>
                  </ul>
                </div>
    
                {/* More Column */}
                <div className=" w-25">
                  <h3 className="font-bold text-white mb-4 text-xl">More</h3>
                  <ul className="space-y-2">
                    <li className='h-[50px]'><a href="#" className="text-gray-300 hover:text-blue-600 transition ">Projects</a></li>
                    <li className='h-[50px]'><a href="#" className="text-gray-300 hover:text-blue-600 transition ">Events</a></li>
                    <li className='h-[50px]'><a href="#" className="text-gray-300 hover:text-blue-600 transition ">Join</a></li>
                    <li className='h-[50px]'><a href="#" className="text-gray-300 hover:text-blue-600 transition ">Blog</a></li>
                  </ul>
                </div>
    
                {/* Connect Column */}
                <div className=" w-25">
                  <h3 className="font-bold text-white mb-4 text-xl">Connect</h3>
                  <ul className="space-y-2">
                    <li className='h-[50px]'><a href="#" className="text-gray-300 hover:text-blue-600 transition ">Facebook</a></li>
                    <li className='h-[50px]'><a href="#" className="text-gray-300 hover:text-blue-600 transition ">Instagram</a></li>
                    <li className='h-[50px]'><a href="#" className="text-gray-300 hover:text-blue-600 transition ">Twitter</a></li>
                    <li className='h-[50px]'><a href="#" className="text-gray-300 hover:text-blue-600 transition ">LinkedIn</a></li>
                  </ul>
                </div>
    
                {/* Contact Column */}
                <div className=" w-25">
                  <h3 className="font-bold text-white mb-4 text-xl">Contact Us</h3>
                  <div className="space-y-2 text-white">
                    <p>If you have any questions or would like more information about how you can get involved, please</p>
                    <div className="mt-4">
                      <p className="font-semibold">+91-99070-46281, +91-777-199-7475</p>
                      <p className="font-semibold">anantaman.sws <br  className='lg:hidden max-md:block'/> @gmail.com</p>
                    </div>
                    <p className="mt-4 font-semibold">
                    311, 3rd Floor, Apollo Square Mall, Janjeerwala Square, Race Course Road, Indore, M.P. 452001
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
};

export default Footer;