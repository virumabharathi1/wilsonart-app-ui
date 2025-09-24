import React, { useState, useEffect } from "react";
import {
  FiShoppingCart,
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import video1 from "./assets/videos/bg1.mp4";
import video2 from "./assets/videos/bg2.mp4";
import video3 from "./assets/videos/bg3.mp4";
import video4 from "./assets/videos/imgbg.jpg";
import video5 from "./assets/videos/nlogo.jpeg";
import img1 from "./assets/videos/1.jpg";
import img2 from "./assets/videos/2.jpg";
import img3 from "./assets/videos/3.jpg";
import img4 from "./assets/videos/4.jpg";
import img5 from "./assets/videos/5.jpg";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Sample video URLs - replace with your actual video URLs
  const heroVideos = [video1, video2, video3];

  // Auto-advance videos every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) =>
        prevIndex === heroVideos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroVideos.length]);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === heroVideos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? heroVideos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Top Utility Bar */}
      <div className="bg-black text-white text-xs py-2 px-6 flex justify-center items-center fixed top-0 left-0 w-full z-50">
        {/* Left Links */}
        <div className="flex space-x-4">
          {[
            "ORDER SAMPLES",
            "WHERE TO BUY",
            "FIND A REP",
            "SUBSCRIBE",
            "CONTACT",
            "FIND YOUR COLOR",
            "SIGN IN",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-gray-300 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          {/* Cart */}
          <button className="hover:text-gray-300 transition-colors">
            <FiShoppingCart size={16} />
          </button>

          {/* Search Box */}
          <div className="flex items-center border border-white">
            <input
              type="text"
              placeholder="Search"
              className="px-2 py-1 bg-black text-white text-xs focus:outline-none"
            />
            <button className="px-2">
              <FiSearch size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white w-full border-b border-gray-200 px-6 py-3 mt-10 flex justify-center gap-33 items-center">
        {/* Logo + tagline */}
        <div className="flex items-center space-x-2">
          <img src={video5} alt="Nestscape Logo" className="h-15" />
          <span className="text-xl text-gray-600 tracking-widest ml-2">
            Nestscape
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-8 text-sm font-medium text-gray-700">
          {[
            "PRODUCTS",
            "PROJECTS",
            "INSPIRATION",
            "WHY Nestscape",
            "SUSTAINABILITY",
            "RESOURCES",
          ].map((item) => (
            <button
              key={item}
              className="flex items-center space-x-1 hover:text-black transition-colors"
            >
              <span>{item}</span>
              <span className="text-xs">▼</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Hero Section with background image */}
      <section className="h-[800px] relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          {heroVideos.map((video, index) => (
            <video
              key={index}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentVideoIndex ? "opacity-100" : "opacity-0"
              }`}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>

        {/* Overlay - Made darker for better text readability */}
        <div className=" bg-opacity-40 absolute inset-0"></div>

        {/* Content - Changed to left alignment */}
        <div className="relative z-10 max-w-xl px-6 ml-80 text-white h-full flex items-center">
          <div className="text-left">
            <h2 className="text-5xl font-light leading-tight mb-6">
              Your vision, <br />
              <span className="italic font-medium">delivered.</span>
            </h2>
            <p className="text-lg mb-8 max-w-2xl ">
              We deliver customer visions with surfaces we love, service you can
              count on, and people who care. From home to hospitality to
              healthcare, there is a Nestscape® surface solution engineered for
              any environment.
            </p>
            <button className="bg-transparent border-white border-2 text-white px-10 py-3 font-medium hover:bg-gray-200 transition">
              WHY Nestscape?
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}

        {/* Video Indicators */}
      </section>

      <div className="mb-18">
        {/* Top Image Grid */}
        <div className="bg-black">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 py-8">
            {/* Item 1 */}
            <div className="relative">
              <img
                src={img1}
                alt="High Pressure Laminate"
                className="w-full h-52 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center text-sm py-2">
                HIGH PRESSURE LAMINATE (HPL)
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative">
              <img
                src={img2}
                alt="Thermally Fused Laminate"
                className="w-full h-52 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center text-sm py-2">
                THERMALLY FUSED LAMINATE (TFL)
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative">
              <img
                src={img3}
                alt="Nestscape Woodgrains"
                className="w-full h-52 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center text-sm py-2">
                Nestscape WOODGRAINS™
              </div>
            </div>

            {/* Item 4 */}
            <div className="relative">
              <img
                src={img4}
                alt="Compact Laminate"
                className="w-full h-52 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center text-sm py-2">
                COMPACT LAMINATE
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Black Section */}
        <div className="bg-black text-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left side */}
            <div>
              {/* Mock Logo */}
              <div className="mb-6">
                <div className="w-10 h-10 bg-white flex items-center justify-center rounded">
                  <span className="text-black font-bold text-xl">N</span>
                </div>
              </div>

              <h2 className="text-3xl font-semibold leading-snug mb-4">
                Your style, engineered to perform.
              </h2>
              <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition">
                EXPLORE SURFACES
              </button>
            </div>

            {/* Right side */}
            <div>
              <p className="text-gray-300 leading-relaxed">
                The Nestscape® portfolio is broad and diverse. Explore solutions
                that elevate contemporary or traditional styles with stunning
                visual appeal and craftsmanship that stands up to everyday life.
                No matter your project, there's a Nestscape® surface prepared to
                perform.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative w-full h-[800px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${video4})`, // replace with your image path
        }}
      >
        {/* Overlay (optional, for readability of text) */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative text-center text-white ">
          <h1 className="text-4xl font-serif mb-2">New Quartz Designs</h1>
          <p className="tracking-widest text-sm mb-6">WATCH VIDEO</p>

          {/* Play Button */}
          <div className="flex justify-center">
            <button className="flex items-center justify-center w-25 h-25  rounded-full bg-red-600 hover:bg-red-700 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-10 h-10 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="h-18"></div>
      <div
        className="relative w-full h-[800px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${img5})`, // replace with your image path
        }}
      >
        {/* Overlay (optional, for readability of text) */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative text-center text-white">
          <h1 className="text-4xl font-serif mb-2">
            New Solid Surface Designs
          </h1>
          <p className="tracking-widest text-sm mb-6">WATCH VIDEO</p>

          {/* Play Button */}
          <div className="flex justify-center">
            <button className="flex items-center justify-center w-25 h-25  rounded-full bg-red-600 hover:bg-red-700 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                className="w-10 h-10 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Section */}
          <div>
            {/* Mock Logo */}
            <div className="mb-6">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded">
                <span className="text-white font-bold text-xl">N</span>
              </div>
            </div>

            {/* Text */}
            <h2 className="text-3xl font-semibold text-gray-800 leading-snug mb-4">
              Your legacy, more sustainable.
            </h2>
            <p className="text-gray-600 mb-8">
              At Nestscape, Mother Nature guides our purpose. Sustainability
              isn't an aspect of what we do. It's part of who we are. By
              creating better, stronger, more sustainable surfaces, we are
              engineering a better way.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <button className="px-5 py-2 border border-gray-400 text-gray-800 hover:bg-gray-100 transition rounded">
                OUR COMMITMENT
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-400 text-gray-800 rounded hover:bg-gray-100 transition">
                <div className="w-6 h-6 flex items-center justify-center border border-gray-500 rounded-full">
                  ▶
                </div>
                WATCH
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80"
              alt="Hands together on tree"
              className="rounded shadow-md"
            />
          </div>
        </div>

        {/* Stay Connected Section */}
        <div className="border-t border-b border-red-500 py-12 px-6 text-center md:text-left max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="col-span-1">
              <h3 className="text-3xl font-semibold text-red-600 leading-snug">
                Stay <br /> Connected.
              </h3>
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row md:items-center gap-4">
              <p className="text-gray-600 flex-1">
                Sign up to get interesting news and updates about new products,
                tools, and inspiration delivered to your inbox.
              </p>
              <button className="bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold italic text-red-600">
                Nestscape
              </h1>
              <span className="text-xs text-gray-600 tracking-widest">
                ENGINEERED SURFACES
              </span>
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="text-2xl">
              ×
            </button>
          </div>

          <nav className="space-y-6">
            {[
              "PRODUCTS",
              "PROJECTS",
              "INSPIRATION",
              "WHY Nestscape",
              "SUSTAINABILITY",
              "RESOURCES",
            ].map((item) => (
              <button
                key={item}
                className="block w-full text-left text-lg font-medium py-3 border-b border-gray-200"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* START YOUR PROJECT Column */}
            <div>
              <h3 className="font-semibold text-sm mb-4 uppercase tracking-wide">
                START YOUR PROJECT
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Nestscape Space Visualizer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Order Samples
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Place Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Find a Rep
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Where to Buy
                  </a>
                </li>
              </ul>
            </div>

            {/* COMPANY Column */}
            <div>
              <h3 className="font-semibold text-sm mb-4 uppercase tracking-wide">
                COMPANY
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Why Nestscape
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Brands
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Service You Can Count On
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Press Room
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Leadership
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Nestscape Global - Investor Relations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Global Supplier Code of Conduct
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACT Column */}
            <div>
              <h3 className="font-semibold text-sm mb-4 uppercase tracking-wide">
                CONTACT
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Office & Distribution Locations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* STAY CONNECTED Column */}
            <div>
              <h3 className="font-semibold text-sm mb-4 uppercase tracking-wide">
                STAY CONNECTED
              </h3>
              <p className="text-sm mb-4 text-gray-200">
                Sign up to get interesting news and updates about new products,
                tools, and inspiration delivered to your inbox.
              </p>
              <button className="border border-white text-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Bottom Copyright Section */}
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-xs text-gray-400">
              Copyright © 2025 Nestscape LLC. All Rights Reserved.{" "}
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              .{" "}
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
