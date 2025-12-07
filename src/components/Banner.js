import React from "react";

const Banner = () => {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden rounded-b-2xl shadow-lg">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
        alt="Cancer Awareness"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-pink-600/40 backdrop-blur-[2px]"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Early Detection Saves Lives
        </h2>

        <p className="text-lg md:text-xl text-white mt-4 max-w-2xl mx-auto font-medium">
          Together, we can spread awareness, support fighters, and bring hope.
        </p>

        <button className="mt-6 px-6 py-3 bg-white text-pink-700 font-semibold rounded-xl shadow-lg hover:bg-pink-50 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Banner;
