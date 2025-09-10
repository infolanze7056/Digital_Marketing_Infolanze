import React from "react";

const PlanSection = () => {
    return (
        <section className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 py-16 px-6">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-sm font-semibold tracking-widest text-white font-sans">
                    AI-ENHANCED PRODUCT PHOTOGRAPHY
                </h2>
                <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-white font-sans">
                    Turn Your Phone Photos Into <br /> Studio-Grade Visuals
                </h1>
            </div>

            {/* Plans */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                {/* STARTER */}
                <div className="border border-black bg-white relative rounded-xl shadow-md overflow-hidden flex flex-col font-sans cursor-pointer">
                    <div className="p-6 text-center">
                        <h3 className="text-lg font-bold text-gray-900">STARTER</h3>
                        <p className="mt-2 text-3xl font-extrabold text-gray-900">₹2,499</p>
                        <p className="mt-2 text-sm text-gray-600">
                            For small brands & startups
                        </p>
                    </div>
                    <ul className="flex-1 px-6 pb-6 space-y-3 text-gray-700">
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 font-bold">✓</span>
                            5 AI-enhanced product photos
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 font-bold">✓</span>
                            Studio-style background
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 font-bold">✓</span>
                            Basic retouching & corrections
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 font-bold">✓</span>
                            E-commerce optimized (Amazon/Flipkart)
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 font-bold">✓</span>
                            Delivery 2–3 days
                        </li>
                    </ul>
                </div>

                {/* GROWTH */}
                <div className="border border-black bg-white relative rounded-xl shadow-xl overflow-hidden flex flex-col font-sans scale-105 cursor-pointer">
                    <div className="absolute top-1 right-1 flex items-center gap-1 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-orange-300 font-bold text-xs px-3 py-1 rounded-full shadow-md border border-orange-400/40">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-orange-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l2.09 6.26L20 9.27l-5 3.64 1.91 6.09L12 16.9l-4.91 2.1L9 12.91 4 9.27l5.91-.99L12 2z" />
                        </svg>
                        <span className="tracking-wide">MOST POPULAR</span>
                    </div>
                    <div className="p-6 text-center">
                        <h3 className="text-lg font-bold text-gray-900">GROWTH</h3>
                        <p className="mt-2 text-3xl font-extrabold text-gray-900">₹5,999</p>
                        <p className="mt-2 text-sm text-gray-600">
                            For growing D2C brands & Instagram stores
                        </p>
                    </div>
                    <ul className="flex-1 px-6 pb-6 space-y-3 text-gray-700">
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 font-bold">✓</span>
                            15 AI-enhanced product photos
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 font-bold">✓</span>
                            Mix of studio + lifestyle backgrounds
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 font-bold">✓</span>
                            Premium editing (shadows, reflections)
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 font-bold">✓</span>
                            1 Instagram-ready reel/ad
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 font-bold">✓</span>
                            Optimized for social media e-commerce
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 font-bold">✓</span>
                            Delivery 4–5 days
                        </li>
                    </ul>
                </div>

                {/* PREMIUM */}
                <div className="border border-black bg-white relative rounded-xl shadow-md overflow-hidden flex flex-col font-sans cursor-pointer">
                    <div className="p-6 text-center">
                        <h3 className="text-lg font-bold text-gray-900">PREMIUM</h3>
                        <p className="mt-2 text-3xl font-extrabold text-gray-900">₹11,999</p>
                        <p className="mt-2 text-sm text-gray-600">
                            For established brands & campaigns
                        </p>
                    </div>
                    <ul className="flex-1 px-6 pb-6 space-y-3 text-gray-700">
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 font-bold">✓</span>
                            30 AI-enhanced product photos
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 font-bold">✓</span>
                            Multiple styles (studio, luxury, lifestyle, seasonal)
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 font-bold">✓</span>
                            Advanced effects (splashes, 3D props)
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 font-bold">✓</span>
                            3 Instagram reels/ads
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 font-bold">✓</span>
                            Product catalog mockups (carousel/posts)
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                            <span className="text-green-500 font-bold">✓</span>
                            Free brand style consultation
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Note */}
            <div className="text-center mt-10 text-white text-xs font-sans font-semibold">
                DM us your product photo & we’ll show you the magic
            </div>
        </section>
    );
};

export default PlanSection;
