import React from 'react'
import img1 from "../assets/feat01.jpeg"
import img2 from "../assets/feat02.jpeg"
import img3 from "../assets/feat03.jpeg"
import img4 from "../assets/try01.jpeg"
import img5 from "../assets/try023.jpeg"
import img6 from "../assets/feat06.jpeg"
import { IoCreateSharp, IoRocketSharp } from 'react-icons/io5'

const HeroSection = () => {
    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col justify-center items-center text-start px-3">
                    <div className="max-w-xl">
                        <h1 className="text-6xl font-bold font-sans text-white leading-tight">
                            Discover, find,<br /><h1 className="text-6xl font-bold font-['Funnel_Sans'] outline-text gradient-bg">
                                Sell extraordinary
                            </h1>
                            Monster NFTs
                        </h1>
                        <p className="pt-5 text-white text-lg font-sans">
                            Marketplace For Monster Character Collections And Non-Fungible Token NFTs.
                        </p>
                        <div className="space-x-4 pt-8 flex">
                            <button className="flex gap-2 border font-semibold font-sans rounded-full border-white  text-white px-6 py-2 transition hover:bg-white hover:text-blue-600">
                                <IoRocketSharp className='mt-1' /><span>Explore</span>
                            </button>
                            <button className="flex gap-2 border font-semibold font-sans rounded-full border-white px-6 py-2 transition text-white hover:bg-white hover:text-blue-600">
                                <IoCreateSharp className='mt-1' /><span>Create</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="gallery-container w-full max-w-6xl mx-auto">
                        <div className="gallery-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-4">
                            <div className="relative h-48">
                                <img
                                    src={img1}
                                    alt="Image 1"
                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="relative h-48">
                                <img
                                    src={img5}
                                    alt="Image 2"
                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="relative h-48">
                                <img
                                    src={img3}
                                    alt="Image 3"
                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="relative h-48">
                                <img
                                    src={img4}
                                    alt="Image 4"
                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="relative h-48">
                                <img
                                    src={img5}
                                    alt="Image 5"
                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="relative h-48">
                                <img
                                    src={img6}
                                    alt="Image 6"
                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="relative h-48">
                                <img
                                    src={img4}
                                    alt="Image 7"
                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="relative h-48">
                                <img
                                    src={img2}
                                    alt="Image 8"
                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="relative h-48">
                                <img
                                    src={img1}
                                    alt="Image 9"
                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="relative h-48">
                                <img
                                    src={img6}
                                    alt="Image 1"
                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="relative h-48">
                                <img
                                    src={img5}
                                    alt="Image 2"
                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="relative h-48">
                                <img
                                    src={img3}
                                    alt="Image 3"
                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="relative h-48">
                                <img
                                    src={img6}
                                    alt="Image 4"
                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="relative h-48">
                                <img
                                    src={img2}
                                    alt="Image 5"
                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="relative h-48">
                                <img
                                    src={img1}
                                    alt="Image 6"
                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="relative h-48">
                                <img
                                    src={img2}
                                    alt="Image 7"
                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="relative h-48">
                                <img
                                    src={img5}
                                    alt="Image 8"
                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="relative h-48">
                                <img
                                    src={img4}
                                    alt="Image 9"
                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default HeroSection