import Image from "next/image";
import React from "react";
import { images } from "../assets/images";

const BlogSection = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* Header Section */}
      <div className="w-full max-w-screen-xl mx-auto px-4 py-10 text-center">
        <span className="text-[#0A2640] text-lg md:text-xl font-medium mb-2 block">
          Blog
        </span>
        <h2 className="text-[#0A2640] text-3xl md:text-5xl font-bold">
          Thoughts and words
        </h2>
      </div>

      {/* Content Section */}
      <div className="w-full cursor-pointer max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-16 pb-10">
        {/* Blog Image */}
        <Image
          src={images.blogImage}
          alt="blog preview"
          className="w-full md:w-[50%] h-auto object-cover rounded-lg"
        />

        {/* Blog Text */}
        <div className="flex-1 flex flex-col justify-between gap-6">
          <div>
            <div className="flex flex-wrap text-sm md:text-base text-[#0A2640] font-bold mb-2">
              <span className="mr-4">Category</span>
              <span className="text-[#777777] font-normal">November 22, 2021</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-black leading-snug">
              Pitch termsheet backing validation focus release.
            </h3>
          </div>

          <div className="flex items-center mt-4">
            <Image
              src={images.chandlerBling}
              alt="Author"
              className="w-8 h-8 rounded-full mr-3 object-cover"
            />
            <span className="text-base text-black font-medium">Chandler Bing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
