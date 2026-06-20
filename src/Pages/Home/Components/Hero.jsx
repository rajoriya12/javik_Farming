import React from "react";

function Hero() {
    return (
        <section className="bg-hero bg-cover bg-center relative min-h-screen overflow-hidden">

            {/* SVG Background */}
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 600 700"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M580,40 C480,140 520,260 380,330 C260,390 300,480 180,560 C100,610 90,650 40,680"
                    stroke="#1F3D2B"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="2 10"
                    strokeLinecap="round"
                    opacity="0.35"
                />

                <circle cx="580" cy="40" r="6" fill="#D4A017" />
                <circle cx="380" cy="330" r="6" fill="#E08A2C" />
                <circle cx="40" cy="680" r="6" fill="#B5562E" />

                <ellipse
                    cx="430"
                    cy="280"
                    rx="220"
                    ry="170"
                    fill="#2A4D34"
                    opacity="0.12"
                />
            </svg>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto min-h-screen flex items-center px-6 sm:px-8 md:px-12 lg:px-16">

                <div className="max-w-3xl">

                    <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm sm:text-base">
                        🌱 100% Organic Farming
                    </span>

                    <h1 className="mt-6 font-bold text-[#1F3D2B] leading-tight
                        text-4xl
                        sm:text-5xl
                        md:text-6xl
                        lg:text-7xl">
                        Fresh Organic Products
                        <br />
                        Direct From Our Farm
                    </h1>

                    <p className="mt-6 text-gray-700 max-w-xl
                        text-base
                        sm:text-lg">
                        Healthy vegetables, A2 milk, nursery plants and
                        vermicompost produced using natural farming methods.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">

                        <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg transition">
                            View Products
                        </button>

                        <button className="border border-green-700 text-green-700 bg-gray-300 hover:bg-green-700 hover:text-white px-6 py-3 rounded-lg transition">
                            Contact Us
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;