import React from 'react'
import img1 from "../assets/img02.jpeg"
import img2 from "../assets/img11.jpeg"
import img3 from "../assets/feat04.jpeg"
import img4 from "../assets/try01.jpeg"
import img5 from "../assets/img03.jpeg"
import img6 from "../assets/img10.jpeg"
import { IoCreateSharp, IoRocketSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router'
const images = [
    img1, img5, img3, img4, img5, img6, img4, img2, img1,
    img6, img5, img3, img6, img2, img1, img2, img5, img4,
];

const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 grid grid-cols-1 md:grid-cols-2 min-h-screen">
                <div className="flex flex-col justify-center items-center text-start px-3">
                    <div className="max-w-xl">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                            {/* Grow Your <span className="gradient-bg outline-text">Traffic</span>, <br /> */}
                            Boost Your <span className="gradient-bg outline-text">Leads</span>, <br />
                            Scale Your <span className="gradient-bg outline-text">Sales</span>
                        </h1>

                        <p className="pt-5 text-white text-lg font-sans">
                            We are a full-service digital marketing agency helping businesses drive
                            measurable results with SEO, Social Media, Paid Ads, and Content Marketing.
                        </p>
                        <div className="space-x-4 pt-8 flex">
                            <button onClick={() => navigate("/gallery")} className="flex gap-2 border font-semibold font-sans rounded-full border-white  text-white px-6 py-2 transition hover:bg-white hover:text-blue-600">
                                <IoRocketSharp className='mt-1' /><span>Explore</span>
                            </button>
                            {/* <button className="flex gap-2 border font-semibold font-sans rounded-full border-white px-6 py-2 transition text-white hover:bg-white hover:text-blue-600">
                                <IoCreateSharp className='mt-1' /><span>Create</span>
                            </button> */}
                        </div>
                    </div>
                </div>

                {/* Right Scrolling Gallery */}
                <div className="flex items-stretch justify-center h-full px-3">
                    <div className="gallery-container w-full max-w-6xl mx-auto h-full">
                        <div className="gallery-content">
                            {/* First batch */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                                {images.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt={`Image ${i + 1}`}
                                        className="w-full h-48 object-cover rounded-lg shadow-md"
                                    />
                                ))}
                            </div>
                            {/* Duplicate batch for smooth looping */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                                {images.map((img, i) => (
                                    <img
                                        key={`dup-${i}`}
                                        src={img}
                                        alt={`Image dup ${i + 1}`}
                                        className="w-full h-48 object-cover rounded-lg shadow-md"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection