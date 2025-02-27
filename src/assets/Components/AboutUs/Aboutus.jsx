import React from "react";
import Abouus from "../../../aboutus/aboutus.webp";
const AboutUs = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            About Us
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 mt-2">
            Learn more about our journey and values
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div data-aos="fade-right">
            <img
              src={Abouus}
              alt="About Us"
              className="w-full h-auto rounded-md"
            />
          </div>

          {/* Text Section */}
          <div data-aos="fade-left">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Welcome to our e-commerce platform, where we bring you the best
              and latest trends in fashion, accessories, and more. Our journey
              started with a vision to provide high-quality products at
              affordable prices.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We aim to make online shopping a seamless experience for everyone
              by offering a wide range of products, secure payment options, and
              excellent customer service. Your satisfaction is our priority.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-600 text-sm leading-relaxed">
              <li>High-quality products curated with care</li>
              <li>Affordable pricing with exciting offers</li>
              <li>Fast and reliable delivery</li>
              <li>Excellent customer support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
