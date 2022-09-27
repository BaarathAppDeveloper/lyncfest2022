import React from "react";

import Title from "./Title";
import Letter1 from "../imgs/letter box.png";
import { useEffect, useState } from "react";
import Hack from "../hack in hub.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { Component } from "react";
//import Blink from 'react-blink-text';
import Font, { Text } from "react-font";
import Shimmer from "react-shimmer-effect";
import { FaArrowCircleUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";

import Hack1 from "../hack_in_hub-removebg-preview.png";
import Fest from "../logo-removebg-preview.png";

const Letter = () => {
  return (
    <div>
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

              <div className="flex items-center justify-evenly h-16 py-11">
                <div className="flex  justify-evenly float-left">
                  <div className="hidden md:block py-3">
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
                        href="/#events"
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
                        href="#footer"
                        className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"
                      >
                        Contact
                      </a>
                      <a
                        href="/#sponsors"
                        className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"
                      >
                        Sponsors
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
                          href="#events"
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
      <div class="bg-black">
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              class=" mb-10 object-cover object-center rounded"
              alt="hero"
              src={Letter1}
              height={300}
              width={300}
            />
            <div class="text-center lg:w-2/3 w-full">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Loop up
              </h1>
              <p class="mb-8 leading-relaxed">
                <center class="text-white font-medium text-xl">
                  SPECIFICATIONS FOR PAPER PRESENTATION:
                </center>
                <p class="py-5 text-left flex-col items-center text-white text-lg font-semibold">
                  <ol>
                    <li>
                      1. Each presenter will get 20 min for presentation + 10
                      min for Q & A.
                    </li>
                    <li>
                      2. The presentation should be only in MS PowerPoint (ppt
                      /pptx) or PDF formats.
                    </li>
                    <li>
                      3. The first slide should display the title of the
                      presentation & name of the presenter.
                    </li>
                    <li>
                      4. Presentation time restrictions will be strictly
                      followed.
                    </li>
                    <li>
                      5. The presenter will be provided with an LED screen with
                      a USB drive (if required).
                    </li>
                    <li>
                      6. Presenters are requested to send your presentation in
                      advance to avoid any last-minute technology issues.
                    </li>
                  </ol>
                </p>

                <p class="py-5 text-left flex-col items-center text-white text-lg font-semibold">
                  <center class="text-white font-medium text-xl">
                    To make your presentation more attractive and also to get a
                    greater audience to your paper, we highly recommend you to
                    follow these steps:
                  </center>
                  <br />

                  <ol>
                    <li>
                      1. Kindly send us your introduction in 5 sentences
                      highlighting your research area.
                    </li>
                    <li>
                      2. Create a video for 1 minute which will be showcased
                      during the symposium and prior to that.
                    </li>
                    <li>
                      3. Note: Your paper presentation will be recorded during
                      the symposium.
                    </li>
                  </ol>
                </p>
                <p class="py-5 text-left flex-col items-center text-white text-lg font-semibold">
                  <center class="text-white font-medium text-xl">
                    Guidelines for creating a video :
                  </center>
                  <br />

                  <ol>
                    <li>
                      {" "}
                      1. Just stand in front of a video camera or decent webcam
                      with a plain background.
                    </li>
                    <li>
                      2. Kindly make sure that your voice is the clear and audio
                      quality is good.
                    </li>
                    <li>
                      3. The length of the video should not exceed more than 60
                      seconds.- just your introduction, the main theme of
                      research and a highlight of the paper in the English
                      language.
                    </li>
                  </ol>
                </p>
              </p>
              <div class="flex justify-center">
                <a href="https://forms.gle/ynHQpAtb4GqtVSTB7">
                  <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Register
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Letter;
