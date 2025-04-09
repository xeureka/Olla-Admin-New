import React, { useEffect, useState } from "react";
import Logo from "../public/images/logo.png";
import { Store, Apple } from "lucide-react";

export const Footer = () => {
  const [isWindowSmall, setIsWindowSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWindowSmall(window.innerWidth < 1004);
    };

    handleResize(); // Initial screen size check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mt-10 bottom-0 w-full bg-slate-900 p-6 bg-opacity-30 backdrop-blur-md">
      <div className="mx-auto text-white pb-10 px-4">
        <div
          className={`flex w-full ${
            isWindowSmall
              ? "flex-col justify-center items-center"
              : "justify-between items-center"
          }`}
        >
          {/* Logo and Title */}
          <h1
            className={`text-3xl text-white flex items-center ${
              isWindowSmall ? "justify-center mb-6" : ""
            }`}
          >
            <img src={Logo} className="w-10 h-10 mr-3" alt="Logo" />
            <span className="font-semibold">Admin Dashboard</span>
          </h1>

          {/* App Store Links */}
          <div className="flex justify-center flex-wrap mt-4 md:mt-0">
            {/* Google Play */}
            <button className="flex items-center border border-gray-400 hover:border-white transition rounded-xl px-4 py-3 mx-2 bg-slate-800/40 backdrop-blur-md">
              <Store className="w-6 h-6 text-white" />
              <div className="text-left ml-3">
                <p className="text-[11px] text-gray-300">GET IT ON</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </button>

            {/* App Store */}
            <button className="flex items-center border border-gray-400 hover:border-white transition rounded-xl px-4 py-3 mx-2 bg-slate-800/40 backdrop-blur-md">
              <Apple className="w-6 h-6 text-white" />
              <div className="text-left ml-3">
                <p className="text-[11px] text-gray-300">Download on the</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-10 flex flex-col md:flex-row md:justify-between items-center text-sm text-white font-bold border-t border-white/10 pt-4">
          <p className="order-2 md:order-1 mt-4 md:mt-0">&copy; Olla, {new Date().getFullYear()}</p>
          <div className="order-1 md:order-2 space-x-4">
            <span className="cursor-pointer hover:underline">About Us</span>
            <span className="border-l pl-4 cursor-pointer hover:underline">Contact Us</span>
            <span className="border-l pl-4 cursor-pointer hover:underline">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
