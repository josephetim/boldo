"use client"
import React, { useState } from "react";

const CallToAction = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-[#0A2640] py-12 px-4 sm:px-8 md:px-16 lg:px-24 text-white text-center relative">
        <div className="absolute w-[200px] rounded-bl-full z-0  top-0 h-[140px] right-0 text-amber-300 bg-[#1C3D5B]"></div>
      <div className="max-w-2xl mx-auto ">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-6 z-10 relative">
          An enterprise template to ramp up your company website
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            value={email}
            
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full bg-white sm:w-auto flex-1 py-3 px-6 rounded-full border-2 border-white text-black"
          />
          <button
  onClick={() => alert("Pressed!")}
  className="bg-[#65E4A3] cursor-pointer text-[#0A2640] font-bold px-8 py-3 rounded-full border-2 border-[#65E4A3] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
>
  Start now
</button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;