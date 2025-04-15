import React, { useRef, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Logo from "../public/images/logo.png";
import {Link } from 'react-router-dom'

const Navbar = (props) => {
  const { brandText, searchbar } = props;

  const dropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`sticky w-full p-1 mb-8 top-0 z-40 flex flex-row flex-wrap items-center justify-between bg-white/10 dark:bg-white backdrop-blur-lg border-b border-gray-200/30 text-black  text-3xl`}
      style={{ borderRadius: "10px" }}
    >
      
      <Link to='/'>
        <img className="h-16 w-16 ml-4 rounded-full" src={Logo} alt="logo"  />
      </Link>
      {/* {searchbar ? (
        <div className="relative mt-[3px] flex h-[61px] w-1/2 flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[395px] md:flex-grow-0 md:gap-1 xl:w-[395px] xl:gap-2">
          <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[355px] border border-solid border-[#93cc4e] border-[0.15rem]">
            <div className="pl-3 pr-2 text-xl">
              <FiSearch className="h-4 w text-black-400 dark:text-black" />
            </div>
            <input
              type="text"
              placeholder={`search ${brandText}`}
              className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-black-400 dark:bg-navy-900 dark:text-black dark:placeholder:!text-black"
            />
          </div>
        </div>
      ) : (
        <p style={{ fontWeight: 900, fontSize: 22 }}>{brandText}</p>
      )} */}

      <div className="text-bold font-mono text-2xl">
        <h1>Dashboard</h1>
      </div>

      {/* Inline Dropdown */}
      <div ref={dropdownRef} className="relative flex">
        <div
          className="flex cursor-pointer"
          onMouseDown={() => setDropdownOpen(!dropdownOpen)}
        >
          <img
            className="h-10 w-10 mt-[-20%] mr-[1vw] rounded-full"
            src="https://olla-bucket.s3.us-west-004.backblazeb2.com/user.png"
            alt="user"
          />
        </div>


        <div
          className={`py-2 top-8 -left-[180px] w-max absolute z-10 origin-top-right transition-all duration-300 ease-in-out ${
            dropdownOpen ? "scale-100" : "scale-0"
          }`}
        >
          <div className="flex h-48 w-56  flex-col justify-start rounded-[20px] bg-white  border-gray-200 border-[0.2px] shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
            <div className="mt-3   ml-4">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-navy-700 dark:text-black">
                  👋 Hey, User
                </p>
              </div>
            </div>
            <div className="mt-3 h-px w-full bg-black-200 dark:bg-black/20" />
            <div className="mt-3 ml-4 flex flex-col">
              <a
                href="#"
                className="text-sm text-black-800 dark:text-black hover:dark:text-black"
              >
                Profile Settings
              </a>
              <a
                href="#"
                className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
              >
                Log Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar