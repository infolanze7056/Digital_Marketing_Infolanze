import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactForm, resetState } from "../redux/features/contactSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUser, FaEnvelope, FaTag, FaRegCommentDots } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const ContactUs = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.contact);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(contactForm(formData));
  };

  useEffect(() => {
    if (success) {
      toast.success(success, { position: "top-right", autoClose: 5000 });
      setFormData({ name: "", email: "",phone: "", subject: "", description: "" });
      dispatch(resetState());
    }
    if (error) {
      toast.error(error, { position: "top-right", autoClose: 5000 });
      dispatch(resetState());
    }
  }, [success, error, dispatch]);

  return (
    <div className="relative bg-white flex flex-col items-center py-10 px-4 sm:px-6 lg:px-16 overflow-hidden">
      <ToastContainer />
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        {/* Layer 1 */}
        <path
          fill="#1e3a8a"
          fillOpacity="0.03"
          d="M0,160L48,149.3C96,139,192,117,288,112C384,107,480,117,576,138.7C672,160,768,192,864,186.7C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
        {/* Layer 2 */}
        <path
          fill="#2563eb"
          fillOpacity="0.03"
          d="M0,128L48,117.3C96,107,192,85,288,80C384,75,480,85,576,106.7C672,128,768,160,864,154.7C960,149,1056,107,1152,96C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
        {/* Layer 3 */}
        <path
          fill="#1e40af"
          fillOpacity="0.03"
          d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,69.3C672,85,768,107,864,112C960,117,1056,107,1152,101.3C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
        {/* Layer 4 */}
        <path
          fill="#4338ca"
          fillOpacity="0.03"
          d="M0,64L48,53.3C96,43,192,21,288,16C384,11,480,21,576,37.3C672,53,768,75,864,80C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>


      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
        {/* Left Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Boost Your Business with Digital Marketing
          </h1>
          <p className="text-gray-600 text-lg">
            We help brands grow online with targeted strategies in SEO, social
            media, content, and ads. Connect with us today to take your digital
            presence to the next level.
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 text-sm">
            {/* Name */}
            <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full outline-none text-sm"
                required
              />
            </div>

            {/* Email */}
            <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Your Email"
                onChange={handleChange}
                className="w-full outline-none text-sm"
                required
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-blue-500">
              <IoIosCall  className="text-gray-400 mr-2" />
              <input
                type="phone"
                name="phone"
                value={formData.phone}
                placeholder="Your Phone Number"
                onChange={handleChange}
                className="w-full outline-none text-sm"
                required
              />
            </div>

            {/* Subject */}
            <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaTag className="text-gray-400 mr-2" />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                placeholder="Subject"
                onChange={handleChange}
                className="w-full outline-none text-sm"
                required
              />
            </div>

            {/* Message */}
            <div className="flex items-start border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaRegCommentDots className="text-gray-400 mr-2 mt-2" />
              <textarea
                name="description"
                value={formData.description}
                placeholder="Your Message"
                rows={5}
                onChange={handleChange}
                className="w-full outline-none text-sm"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
