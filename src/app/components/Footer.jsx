"use client"

const Footer = () => (
    <footer className="bg-white py-12 px-6 sm:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Logo and description */}
        <div className="max-w-sm">
          <div className="flex items-center mb-6">
            <div className="flex flex-col items-center mr-3">
              <div className="bg-[#0A2640] w-4 h-3 mb-1 rounded-tr-lg rounded-br-lg"></div>
              <div className="bg-[#0A2640] w-6 h-4 rounded-tr-lg rounded-br-lg"></div>
            </div>
            <h3 className="text-[#0A2640] text-2xl font-bold">Boldo</h3>
          </div>
          <p className="text-[#777777] mb-6">
            Social media validation business model canvas graphical user interface
            launch party creative facebook iPad twitter.
          </p>
          <p className="text-[#777777]">All rights reserved.</p>
        </div>
  
        {/* Footer links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-[#777777] text-base">
          <div>
            <h4 className="text-black font-bold mb-2">Landings</h4>
            <ul>
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Products</li>
              <li className="cursor-pointer">Services</li>
            </ul>
          </div>
          <div>
            <h4 className="text-black font-bold mb-2">Company</h4>
            <ul>
              <li className="cursor-pointer">Home</li>
              <li className="flex cursor-pointer items-center gap-2">
                Careers{" "}
                <button
                  onClick={() => alert("Pressed!")}
                  className="text-[#0A2640] bg-[#65E4A3] cursor-pointer text-xs px-3 py-1 rounded-full font-bold"
                >
                  Hiring!
                </button>
              </li>
              <li className="cursor-pointer">Services</li>
            </ul>
          </div>
          <div>
            <h4 className="text-black font-bold mb-2">Resources</h4>
            <ul>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Products</li>
              <li className="cursor-pointer">Services</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );

  export default Footer;
