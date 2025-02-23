import React from "react";
import BannerImg from "../../../assets/images/wintersale.webp";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="banner img"
              className="max-w-[400px] h-[350px] w-full mx-auto object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text -3xl sm:text-4xl font-bold">
              Winter Sale up to 50% off
            </h1>
            <p data-aos="fade-up">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni a
              labore suscipit optio error mollitia quaerat quasi. Maiores, quia
              nam quaerat obcaecati magni voluptatibus totam fugit ab
              repellendus, alias vel repellat culpa!
            </p>
            <div className="flex gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shdow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shdow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Fast Delivery</p>
              </div>
              <div className="flex items-center gap-4" data-aos="fade-up">
                <GiFoodTruck className="text-gap-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Easy Payment method</p>
              </div>
              <div className="flex items-center gap-4" data-aos="fade-up">
                <GiFoodTruck className="text-gap-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
