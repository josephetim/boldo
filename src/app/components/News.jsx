"use client"
import Image from "next/image";
import { articles } from "../data/newsData";

export default function NewsSection() {
    return (
      <div className="bg-white px-4 py-8 md:px-8">
        <h2 className="text-3xl md:text-5xl font-semibold mb-10">Latest news</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
          {articles.map((article, idx) => (
            <div
            key={idx}
            className=" cursor-pointer flex flex-col bg-white rounded-lg shadow-md overflow-hidden min-h-[350px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
              <Image
                
                src={article.image}
                alt={article.title}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span className="text-[#0A2640] font-bold mr-4">{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-black text-base md:text-lg font-semibold mb-4">
                  {article.title}
                </h3>
  
                <div className="flex items-center mb-4">
                  <Image
                    src={article.author.image}
                    alt={article.author.name}
                    className="w-8 h-8 object-cover rounded-full mr-2"
                  />
                  <span className="text-black text-sm">{article.author.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div className="flex justify-center">
          <button
            onClick={() => alert("Pressed!")}
            className="px-8 cursor-pointer py-3 border-2 border-[#0A2640] text-[#0A2640] rounded-full font-bold hover:bg-[#0A2640] hover:text-white transition"
          >
            Load more
          </button>
        </div>
      </div>
    );
  }