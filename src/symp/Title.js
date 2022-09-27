import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import ScrollToTop from "react-scroll-to-top";
import Fest from "../logo-removebg-preview.png";

const Title = () => {
  return (
    <div>
      <div class="bg-black">
        <ScrollToTop
          smooth
          viewBox="0 0 24 24"
          svgPath="m15.29 5.29-7 7L9.7 13.7 15 8.41V27h2V8.41l5.29 5.29 1.41-1.41-7-7a1 1 0 0 0-1.41 0z"
        />
        <nav className=" bg-conic-to-tl from-yellow-700 via-blue-500 to-black h-24">
          <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8  py-0">
            <div class="py-0">
              <div class="float-left grid grid-flow-col">
                <a href="/">
                  <img
                    className="py-1"
                    src={Fest}
                    height={90}
                    width={90}
                    alt="Workflow"
                  />
                </a>

                <div class="py-8 px-3 text-3xl font-bold text-white font-nunito">
                  Lync Fest 2022 @ SIT
                </div>
              </div>
            </div>

            <div className="flex items-center justify-evenly h-16 py-11 md:hidden">
              <div className="flex  justify-evenly float-left">
                <div className="">
                  <div className="ml-10 flex items-baseline space-x-4 text-lg font-nunito font-bold">
                    <a
                      href="/"
                      className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md font-semibold"
                    >
                      Home
                    </a>

                    <a
                      href="#aboutus"
                      className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"
                    >
                      About Us
                    </a>

                    <a
                      href="#events"
                      className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"
                    >
                      Events
                    </a>

                    <a
                      href="/hackathon"
                      className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"
                    >
                      Hackathon
                    </a>
                    <a
                      href="/#footer"
                      className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"
                    >
                      Contact
                    </a>
                    <a
                      href="/#sponsers"
                      className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"
                    >
                      Sponsers
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
                        href="/#events"
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
    </div>
  );
};
export default Title;
