import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="bg-white sticky top-0 z-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between py-[25px]">
          <img
            src="/Ileero-logo-concept-03.svg"
            alt=""
            className="h-[44px] w-[165px]"
          />
          <div className="flex justify-around items-center">
            <a
              href="#"
              class="p-2 lg:px-3 md:mx-1 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#"
              class="p-2 lg:px-3 md:mx-1 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              How it Works
            </a>
            <a
              href="#"
              class="p-2 lg:px-3 md:mx-1 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Help
            </a>

            <div className="flex items-center justify-center divide-x relative">
              <a
                href="#"
                class="p-2 lg:px-3 md:mx-1 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                FAQs
              </a>
              <button className="flex group items-center space-x-2 p-2 lg:px-3 md:mx-1 peer hover:bg-gray-100 hover:shadow-xl">
                <MdOutlineAccountCircle className="h-6 w-6" />
                <span>Account</span>
                <FaCaretDown className="h-6 w-6 group-hover:hidden" />
                <FaCaretUp className="h-6 w-6 hidden group-hover:inline-block" />
              </button>
              <div
                class="flex peer-hover:flex hover:flex
         w-[400px] absolute top-[40px] right-0 p-5 px-3
         flex-col bg-white drop-shadow-lg"
              >
                <p className="text-[#34344E] text-xl  my-2 text-left">
                  Welcome to Ileero remit!
                </p>

                <div className="flex items-center justify-between">
                  <div className="bg-[#178CFC] rounded flex items-center justify-center font-semibold text-white w-[180px] h-[40px]">
                    Create Account
                  </div>
                  <div className="bg-white border border-[#178CFC] rounded flex items-center justify-center font-semibold text-[#1894F8] w-[180px] h-[40px]">
                    Get Started
                  </div>
                </div>

                {/* <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  About Us
                </a>
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  Contact Us
                </a>
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  Privacy Policy
                </a> */}
              </div>
              {/* class="hidden peer-hover:flex hover:flex
         w-[400px] absolute top-[40px] right-0
         flex-col bg-white drop-shadow-lg" */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
