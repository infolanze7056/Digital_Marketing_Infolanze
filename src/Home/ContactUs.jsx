import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-16">
      
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
        <p className="text-gray-600 text-lg">
          We'd love to hear from you! Fill out the form or reach us through our contact info.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-5xl">
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
          <FaPhoneAlt className="text-blue-600 text-3xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">Phone</h3>
          <p className="text-gray-500">+1 234 567 890</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
          <FaEnvelope className="text-blue-600 text-3xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">Email</h3>
          <p className="text-gray-500">contact@company.com</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
          <FaMapMarkerAlt className="text-blue-600 text-3xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">Location</h3>
          <p className="text-gray-500">123 Main Street, City, Country</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Send Us a Message</h2>
        <form className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
