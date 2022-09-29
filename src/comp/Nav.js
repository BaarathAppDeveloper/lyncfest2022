/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import ScrollToTop from "react-scroll-to-top";
import SIT from "../imgs/sit1.png";

import { useState } from "react";

const Nav = () => {  

  const [navbar,setNavbar] = useState(false);

  return (
    <div class="">
      <ScrollToTop
        smooth
        viewBox="0 0 24 24"
        svgPath="m15.29 5.29-7 7L9.7 13.7 15 8.41V27h2V8.41l5.29 5.29 1.41-1.41-7-7a1 1 0 0 0-1.41 0z"
      />
      <nav className="w-[100vw] bg-conic-to-tl from-white via-blue-200 to-black h-24  ">
        <div className="max-w-9xl mx-auto ">
          <div class="py-0">
            <div class="float-left grid grid-flow-col ">
              <a href="/">
                <img
                  className="ml-7 py-4 bg-black"
                  src={SIT}
                  height={70}
                  width={70}
                  alt="Workflow"
                />
              </a>
              <a href="/hackathon">
                <div class="py-8 px-3 text-3xl font-bold text-stone-100 font-nunito md:hidden">
                  Hack in Hub
                </div>
              </a>
            </div>
          </div>

          <div className="flex items-center h-16 justify-evenly md:justify-end md:float-right md:mr-10  font-bold text-white">
            <div className="flex justify-evenly ">

              {!navbar?
              <img alt="hamburger" className="2xl:invisible  md:visible sm:visible  cursor-pointer   flex md:justify-end md:ml-28 md:mt-6   w-10" onClick={() => setNavbar(!navbar)}  src = "https://img.icons8.com/external-febrian-hidayat-gradient-febrian-hidayat/2x/external-hamburger-ui-essential-febrian-hidayat-gradient-febrian-hidayat.png" />:
              <img alt="hamburger" className="hidden" onClick={() => setNavbar(!navbar)}  src = "https://img.icons8.com/external-febrian-hidayat-gradient-febrian-hidayat/2x/external-hamburger-ui-essential-febrian-hidayat-gradient-febrian-hidayat.png" />

            }

             {navbar?(
              <div className="mt-14">
                <div className=" flex space-x-4 text-lg md:flex-col md:mt-56 md:bg-white md:p-5 md:z-50 md:rounded-lg ">
                <h1 className="text-black ml-40 mt-[-10px] cursor-pointer"  onClick={() => setNavbar(!navbar)}>X</h1>
                  <a
                    href="/"
                    className="text-gray-100  md:text-black hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md font-semibold"
                  >
                    Lyncfest
                  </a>
                  <a
                    href="/hackathon/#hackathon-schedule"
                    className="text-gray-100  md:text-black hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md font-semibold"
                  >
                    Schedule
                  </a>
                  <a
                    href="hackathon/details#guidelines"
                    className="text-gray-100  md:text-black hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"
                  >
                    Guidelines
                  </a>
                  <a
                    href="/hackathon#domains"
                    className="text-gray-100  md:text-black hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"
                  >
                    Problem Statements
                  </a>

                  {/* <motion.div
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    class="md:bg-black p-2 md:p-1 md:rounded-md border-2 rounded-xl border-teal-200 shadow-sm shadow-white hover:bg-sky-500 hover:text-white"
                  >
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdMgKu3DoAywkaWTKTvxTVE3w6a5vDxExlL20cgUipYBnQSKQ/viewform?usp=sf_link"
                      className="text-gray-100 text-xl px-3 py-2 rounded-md  font-medium "
                    >
                      Register
                    </a>
                  </motion.div> */}
                </div>
              </div>

             ):
             
             (
                  <div className="md:hidden">
                <div className=" flex space-x-4 text-lg md:flex-col md:mt-56 md:bg-white  md:rounded-lg ">
                  <a
                    href="/"
                    className="text-gray-100  md:text-black hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md font-semibold"
                  >
                    Lyncfest
                  </a>
                  <a
                    href="/hackathon/#hackathon-schedule"
                    className="text-gray-100  md:text-black hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md font-semibold"
                  >
                    Schedule
                  </a>
                  <a
                    href="hackathon/details#guidelines"
                    className="text-gray-100  md:text-black hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"
                  >
                    Guidelines
                  </a>
                  <a
                    href="/hackathon#domains"
                    className="text-gray-100  md:text-black hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"
                  >
                    Problem Statements
                  </a>

                  {/* <motion.div
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    class="md:bg-black p-2 md:p-1 md:rounded-md border-2 rounded-xl border-teal-200 shadow-sm shadow-white hover:bg-sky-500 hover:text-white"
                  >
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdMgKu3DoAywkaWTKTvxTVE3w6a5vDxExlL20cgUipYBnQSKQ/viewform?usp=sf_link"
                      className="text-gray-100 text-xl px-3 py-2 rounded-md  font-medium "
                    >
                      Register
                    </a>
                  </motion.div> */}
                </div>
              </div>
             )
             }
             
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
