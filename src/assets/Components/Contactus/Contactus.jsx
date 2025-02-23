import React from "react";

const ContactUs = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Contact Us
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 mt-2">
            Get in touch with us for any queries or support
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Map Section */}
          <div data-aos="fade-right">
            <img
              src="https://via.placeholder.com/500"
              alt="Location Map"
              className="w-full h-auto rounded-md"
            />
          </div>

          {/* Contact Details Section */}
          <div data-aos="fade-left">
            <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              123, Business Street, City, Country
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mt-2">
              Email: support@example.com
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mt-2">
              Phone: +123 456 7890
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-10 max-w-[600px] mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Send us a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-5 rounded-md cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
