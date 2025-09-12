import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "./../../assets/InfoLanze-Logo3.png"
import { IoMdSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#EEEEEE] text-black pt-12 pb-6 px-6 lg:px-16 shadow-md font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img
            src={logo}
            alt="Infolanze Logo"
            className=" mb-4"
          />
          <p className="text-sm leading-6">
            Infolanze is your trusted partner for business solutions and
            technology innovation.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Empowering businesses since 2020 🚀
          </p>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-black font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="relative text-black font-sans transition hover:text-blue-600 
                     after:absolute after:left-1/2 after:bottom-0 after:h-[1.5px] after:w-0 
                     after:bg-blue-600 after:transition-all after:duration-300 
                     hover:after:w-full hover:after:left-0">
                Help & Support
              </a>
            </li>
            <li>
              <a href="#" className="relative text-black font-sans transition hover:text-blue-600 
                     after:absolute after:left-1/2 after:bottom-0 after:h-[1.5px] after:w-0 
                     after:bg-blue-600 after:transition-all after:duration-300 
                     hover:after:w-full hover:after:left-0">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="relative text-black font-sans transition hover:text-blue-600 
                     after:absolute after:left-1/2 after:bottom-0 after:h-[1.5px] after:w-0 
                     after:bg-blue-600 after:transition-all after:duration-300 
                     hover:after:w-full hover:after:left-0">
                Plans
              </a>
            </li>
            <li>
              <a href="#" className="relative text-black font-sans transition hover:text-blue-600 
                     after:absolute after:left-1/2 after:bottom-0 after:h-[1.5px] after:w-0 
                     after:bg-blue-600 after:transition-all after:duration-300 
                     hover:after:w-full hover:after:left-0">
                Subscribe
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-black font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: infolanze.tech@gmail.com</li>
            <li>Phone: +91 7016160435</li>
            <li>Address: Nikol Ahmdabad-382350</li>
          </ul>
        </div>

        {/* Subscribe + Socials */}
        <div>
          <h3 className="text-black font-semibold mb-4">Subscribe Us</h3>
          {/* <div className="flex w-full max-w-sm">
            <input
              type="email"
              className="w-full border border-gray-300 focus:border-blue-600 bg-gray-50 text-black placeholder-gray-400 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="info@gmail.com"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-500 transition">
              <IoMdSend className="w-5 h-5" />
            </button>
          </div> */}

          <div className="flex space-x-4 mt-6">
            <a
              href="https://www.facebook.com/profile.php?id=61555278311151"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-md bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            {/* <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-md bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white transition"
            >
              <FaTwitter />
            </a> */}
            <a
              href="https://www.linkedin.com/company/infolanze24/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-md bg-gray-200 text-gray-700 hover:bg-blue-700 hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/infolanze/?igsh=OXR2d2I4Mm1mMDZt#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-md bg-gray-200 text-gray-700 hover:bg-pink-600 hover:text-white transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-300 mt-6 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Infolanze. All rights reserved.</p>
        <ul className="flex gap-4 mt-3 md:mt-0">
          <li>
            <a href="#" className="relative text-black font-sans transition hover:text-blue-600 
                     after:absolute after:left-1/2 after:bottom-0 after:h-[1.5px] after:w-0 
                     after:bg-blue-600 after:transition-all after:duration-300 
                     hover:after:w-full hover:after:left-0">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="relative text-black font-sans transition hover:text-blue-600 
                     after:absolute after:left-1/2 after:bottom-0 after:h-[1.5px] after:w-0 
                     after:bg-blue-600 after:transition-all after:duration-300 
                     hover:after:w-full hover:after:left-0">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="relative text-black font-sans transition hover:text-blue-600 
                     after:absolute after:left-1/2 after:bottom-0 after:h-[1.5px] after:w-0 
                     after:bg-blue-600 after:transition-all after:duration-300 
                     hover:after:w-full hover:after:left-0">
              Cookies
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
