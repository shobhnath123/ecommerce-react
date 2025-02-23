import React from "react";
import Img1 from "../../../blogs/blog1.jpg";
import Img2 from "../../../blogs/blog2.jpg";
import Img3 from "../../../blogs/blog3.jpg";
import Img4 from "../../../blogs/blog4.jpg";
import Img5 from "../../../blogs/blog5.jpg";
import Img6 from "../../../blogs/blog6.jpg";
import Img7 from "../../../blogs/blog7.jpg";
import Img8 from "../../../blogs/blog8.jpg";
import Img9 from "../../../blogs/blog9.jpg";
import Img10 from "../../../blogs/blog10.jpg";

const BlogsData = [
  {
    id: 1,
    img: Img1,
    title: "How to Style Ethnic Wear",
    author: "John Doe",
    description:
      "Discover the latest trends in ethnic wear and how to style them.",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Western Wear Guide",
    author: "Jane Smith",
    description: "Find out the best western wear trends for 2025.",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Best Sunglasses for Summer",
    author: "Michael Lee",
    description:
      "A guide to choosing the perfect sunglasses for summer outings.",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Top Printed T-Shirts to Buy",
    author: "Emma Wilson",
    description:
      "Check out the best-printed T-shirts for casual fashion lovers.",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Fashion Trends 2025",
    author: "David Brown",
    description:
      "A sneak peek into the fashion trends that will dominate 2025.",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Minimalist Fashion Tips",
    author: "Sophia Green",
    description: "Learn how to build a minimalist wardrobe that lasts.",
    aosDelay: "1000",
  },
  {
    id: 7,
    img: Img7,
    title: "How to Accessorize Like a Pro",
    author: "Lucas White",
    description: "Upgrade your outfits with the perfect accessories.",
    aosDelay: "1200",
  },
  {
    id: 8,
    img: Img8,
    title: "Best Fabrics for Summer Wear",
    author: "Olivia Adams",
    description: "Stay cool in summer with the right choice of fabrics.",
    aosDelay: "1400",
  },
  {
    id: 9,
    img: Img9,
    title: "Wardrobe Essentials for Women",
    author: "Ethan Scott",
    description: "The must-have wardrobe essentials for every woman.",
    aosDelay: "1600",
  },
  {
    id: 10,
    img: Img10,
    title: "How to Style Oversized Clothes",
    author: "Ava Martinez",
    description: "Learn how to style oversized clothes while looking chic.",
    aosDelay: "1800",
  },
];

const Blogs = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Latest Fashion & Style Tips
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Our Blogs
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Explore our latest articles on fashion, trends, and styling tips.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {/* Blog Cards */}
            {BlogsData.map((blog) => (
              <div
                data-aos="fade-up"
                data-aos-delay={blog.aosDelay}
                key={blog.id}
                className="space-y-3 p-4 border rounded-md shadow-md bg-white"
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="h-[180px] w-full object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{blog.title}</h3>
                  <p className="text-sm text-gray-600">By {blog.author}</p>
                  <p className="text-xs text-gray-500">{blog.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* View All Button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-6 rounded-md">
              View All Blogs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
