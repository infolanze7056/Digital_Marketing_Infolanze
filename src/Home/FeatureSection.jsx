    import React from "react";
    import img1 from "../assets/feat04.jpeg";
    import img2 from "../assets/feat05.jpeg";
    import img3 from "../assets/feat03.jpeg";
    import img4 from "../assets/feat02.jpeg";
    import img5 from "../assets/feat06.jpeg";
    import img6 from "../assets/feat01.jpeg";

    const features = [
        { id: 1, img: img1, title: "Custom Service with Image", desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis." },
        { id: 2, img: img2, title: "Custom Service with Image", desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis." },
        { id: 3, img: img3, title: "Custom Service with Image", desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis." },
        { id: 4, img: img4, title: "Custom Service with Image", desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis." },
        { id: 5, img: img5, title: "Custom Service with Image", desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis." },
        { id: 6, img: img6, title: "Custom Service with Image", desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis." },
    ];

    const FeatureSection = () => {
        return (
            <section className="relative px-6 lg:px-8 py-6 bg-[#EEEEEE]">
                {/* Section Heading */}
                <div className="flex justify-center">
                    <h1 className="relative inline-block text-3xl font-extrabold mb-12 text-transparent text-center bg-clip-text bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900
        after:content-[''] after:absolute after:bottom-[-6px] after:left-1/2 after:h-[3px] after:w-[60%] after:bg-gradient-to-br after:from-gray-800 after:via-gray-800 after:to-gray-900">
                        Our Features
                    </h1>
                </div>



                {/* Unique Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((item) => (
                        <div
                            key={item.id}
                            className="relative group rounded-xl overflow-hidden shadow-md bg-white border border-transparent bg-clip-padding transition transform hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {/* Gradient Border Glow */}
                            <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                            {/* Card Inner */}
                            <div className="relative rounded-xl bg-white">
                                {/* Image */}
                                <div className="relative h-64 w-full overflow-hidden rounded-t-xl">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="h-full w-full object-cover transform group-hover:scale-110 transition duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition"></div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h2 className="font-semibold text-lg text-gray-800 group-hover:text-indigo-600 transition font-sans">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm mt-2 font-sans">{item.desc}</p>
                                    <a
                                        href="#"
                                        className="mt-4 inline-block text-xs font-medium text-indigo-600 relative font-sans after:content-[''] after:block after:h-[2px] after:w-0 after:bg-gradient-to-r from-indigo-500 to-pink-500 after:transition-all after:duration-500 hover:after:w-full"
                                    >
                                        VIEW MORE →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    };

    export default FeatureSection;
