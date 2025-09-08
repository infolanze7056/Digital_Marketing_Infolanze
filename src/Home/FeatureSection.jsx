import React from "react";
import img1 from "../assets/feat04.jpeg";
import img2 from "../assets/feat05.jpeg";
import img3 from "../assets/img11.jpeg";
import img4 from "../assets/img02.jpeg";
import img5 from "../assets/feat06.jpeg";
import img6 from "../assets/img10.jpeg";
import { FaArrowRight } from "react-icons/fa";

const features = [
    { id: 1, img: img1, title: "Tailored Marketing Strategy", desc: "We craft strategies that align perfectly with your business goals." },
    { id: 2, img: img2, title: "Search Engine Optimization", desc: "Rank higher and attract quality traffic with powerful SEO techniques." },
    { id: 3, img: img3, title: "Social Media Growth", desc: "Engage audiences and build loyal communities with content-driven campaigns." },
    { id: 4, img: img4, title: "Paid Ads Campaigns", desc: "Maximize ROI with high-converting, laser-focused ad campaigns." },
    { id: 5, img: img5, title: "Creative Branding", desc: "From logo to identity, we create brands that inspire trust & loyalty." },
    { id: 6, img: img6, title: "Analytics & Reporting", desc: "Track performance with transparent reporting & real-time insights." },
];

const FeatureSection = () => {
    return (
        <section className="relative px-6 lg:px-12 py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Section Heading */}
            <div className="flex justify-center">
                <h1 className="relative inline-block text-3xl font-extrabold mb-12 text-transparent text-center bg-clip-text bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900
        after:content-[''] after:absolute after:bottom-[-6px] after:left-1/2 after:h-[3px] after:w-[60%] after:bg-gradient-to-br after:from-gray-800 after:via-gray-800 after:to-gray-900">
                    Our Features
                </h1>
            </div>

            {/* Features Grid */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((item) => (
                    <div
                        key={item.id}
                        className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
                    >
                        {/* Image with gradient overlay */}
                        <div className="relative h-72 w-full overflow-hidden">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition duration-500" />
                        </div>

                        {/* Floating content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-12 group-hover:translate-y-0 transition-all duration-500">
                            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                            <p className="text-sm text-gray-200 mb-9">{item.desc}</p>
                            {/* <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-[#EEEEEE] px-4 py-2 rounded-full shadow-md hover:bg-black hover:text-white transition"
              >
                View More <FaArrowRight size={12} />
              </a> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureSection;
