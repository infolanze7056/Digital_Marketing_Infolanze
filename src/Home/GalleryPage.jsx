import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img02.jpeg";
import img2 from "../assets/img11.jpeg";
import img3 from "../assets/feat04.jpeg";
import pop9 from "../assets/feat01.jpeg";
import pop10 from "../assets/feat02.jpeg";
import pop11 from "../assets/feat03.jpeg";
import pop12 from "../assets/feat05.jpeg";
import pop13 from "../assets/feat06.jpeg";
import img4 from "../assets/try01.jpeg";
import img5 from "../assets/img03.jpeg";
import img6 from "../assets/img10.jpeg";
import pop1 from "../assets/img01.jpeg"
import pop2 from "../assets/img04.jpeg"
import pop3 from "../assets/img05.jpeg"
import pop4 from "../assets/img06.jpeg"
import pop5 from "../assets/img07.jpeg"
import pop6 from "../assets/img08.jpeg"
import pop7 from "../assets/img10.jpeg"
import pop8 from "../assets/img09.jpeg"

const allImages = [
    img1, img5, img3, img6, img4, img2,pop1,pop2,pop3,pop4,pop5,pop6,pop7,pop8,pop9,pop10,pop11,pop12,pop13
];

const GalleryPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50">

            {/* Sticky Header */}
            <div className="sticky top-0 z-40 bg-white shadow-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center gap-2 border border-gray-800 text-gray-800 font-semibold px-5 py-2 rounded-full shadow hover:bg-gray-800 hover:text-white transition"
                    >
                        ← Back
                    </button>
                    <h1 className="text-xl md:text-2xl font-extrabold text-gray-800 text-center flex-1">
                        Explore Our Gallery
                    </h1>
                    <div className="w-28 md:w-32"></div>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="p-6 md:p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {allImages.map((img, i) => (
                    <div
                        key={i}
                        className="overflow-hidden rounded-3xl shadow-xl transform hover:scale-105 hover:shadow-2xl transition duration-300 bg-white"
                    >
                        <img
                            src={img}
                            alt={`Gallery ${i + 1}`}
                            className="w-full h-64 md:h-72 object-cover rounded-3xl"
                        />
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="text-center py-8 text-gray-600">
                © 2025 Your Company. All rights reserved.
            </div>
        </div>
    );
};

export default GalleryPage;
