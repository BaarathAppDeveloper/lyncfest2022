/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import ScrollToTop from "react-scroll-to-top";
import SIT from "../imgs/sit1.png";

const Nav = () => {
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
                  className="py-4 bg-black"
                  src={SIT}
                  height={70}
                  width={70}
                  alt="Workflow"
                />
              </a>
              <a href="/hackathon">
                <div class="py-8 px-3 text-3xl font-bold text-stone-100 font-nunito">
                  Hack in Hub
                </div>
              </a>
            </div>
          </div>

          <div className="flex items-center h-16 justify-evenly  font-bold text-white">
            <div className="flex justify-evenly  float-left">
              <div className="">
                <div className=" flex items-baseline space-x-4 text-lg">
                  <a
                    href="/"
                    className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md font-semibold"
                  >
                    Lyncfest
                  </a>
                  <a
                    href="/hackathon/#hackathon-schedule"
                    className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md font-semibold"
                  >
                    Schedule
                  </a>
                  <a
                    href="hackathon/details#guidelines"
                    className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"
                  >
                    Guidelines
                  </a>
                  <a
                    href="/hackathon#domains"
                    className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"
                  >
                    Problem Statements
                  </a>

                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    class="p-2 border-2 rounded-xl border-teal-200 shadow-sm shadow-white hover:bg-sky-500 hover:text-white"
                  >
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdMgKu3DoAywkaWTKTvxTVE3w6a5vDxExlL20cgUipYBnQSKQ/viewform?usp=sf_link"
                      className="text-gray-100 text-xl px-3 py-2 rounded-md  font-medium"
                    >
                      Register
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
