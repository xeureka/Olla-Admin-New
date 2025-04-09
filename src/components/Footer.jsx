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
    <div className="mt-10 bottom-0 w-full bg-white bg-opacity-30 backdrop-blur-md">
      <div className="mx-auto text-white pb-10 px-4">
        <div
          className={`flex w-full ${
            isWindowSmall
              ? "flex-col justify-center items-center"
              : "justify-between"
          }`}
        >
          <h1
            className={`text-3xl text-white flex flex-row items-center ${
              isWindowSmall ? "justify-center" : ""
            }`}
          >
            <img src={Logo} className="w-[10%]" alt="Logo" />
            <span className="ml-2">Admin Page</span>
          </h1>

          <div className="flex justify-center flex-wrap mt-10 md:mt-0">
            {/* Google Play */}
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
              <Store className="w-7 h-7 md:w-8 md:h-8 text-white" />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Google Play Store</p>
              </div>
            </div>

            {/* Apple Store */}
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
              <Apple className="w-7 h-7 md:w-8 md:h-8 text-white" />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Apple Store</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0 ml-3">
            &copy; Olla, {new Date().getFullYear()}.
          </p>
          <div className="order-1 md:order-2">
            <span className="px-2 cursor-pointer hover:underline">About us</span>
            <span className="px-2 border-l cursor-pointer hover:underline">
              Contact us
            </span>
            <span className="px-2 border-l mr-3 cursor-pointer hover:underline">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Footer;