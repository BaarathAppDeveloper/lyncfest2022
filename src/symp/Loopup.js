import React from "react";

import Title from "./Title";
import loopup from "../imgs/loop up.png";
import Footer from "./Footer";


import Letter1 from "../imgs/letter box.png";
import { useEffect, useState } from "react";
import Hack from "../hack in hub.png"
import { motion } from "framer-motion";

// Import the functions you need from the SDKs you need
import { Component } from "react";
//import Blink from 'react-blink-text';
import Font, { Text } from 'react-font';
import Shimmer from "react-shimmer-effect";
import { FaArrowCircleUp } from 'react-icons/fa';
import ScrollToTop from "react-scroll-to-top";

import Hack1 from "../hack_in_hub-removebg-preview.png";
import Fest from "../logo-removebg-preview.png";

const Loopup=()=>{
    return(
        <div>
            <div>
                <div class="bg-black">
                    <ScrollToTop smooth
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
                                        Lync Fest 2022 @ SIT</div>
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
                                                class="p-2 border-2 rounded-xl border-teal-200 shadow-sm shadow-white hover:bg-sky-500 hover:text-white">
                                                <a
                                                    href="#events"
                                                    className="text-gray-100 text-xl px-3 py-2 rounded-md  font-medium"
                                                >
                                                    Register
                                                </a></motion.div>

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
                        <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={loopup} height={300} width={300}/>
                            <div class="text-center lg:w-2/3 w-full">
                            <h1 class="title-font sm:text-4xl text-4xl mb-4 font-medium text-white">Loop up</h1>
                            <p class="mb-8 leading-relaxed py-5 text-left flex-col items-center text-white text-lg font-semibold">
                                <text class="text-2xl py-5 text-left flex-col items-center text-white text-lg font-semibold">
                                    <center>A warm welcome to all the participants over there.
                                        <br /><br />
                                        We are eagerly waiting to see you all in the event
                                        <br /><br />
                                        <text class="text-slate-200">
                                            Date : 20th October <br />
                                            Time : 11:00 am ~ 11.45 am and 1:15 pm  ~ 2.00 pm
                                        </text></center>

                                    <br />
                                    {/*To participate in this event we have some rules over there*/}

                                    <br /><br />
                                </text>
                                <center class="text-2xl py-5 text-left flex-col items-center text-white text-lg font-semibold">This is an Individual participant event.</center>
                                <p>
                                    There are two rounds:<br /><br />
                                    Round 1- Debugging round<br /><br />
                                    You will be given problems in C, C++ and JAVA. The logic should not be changed.<br />
                                    This round will be evaluated based on your debugging skills and time taken.<br />
                                    You will be evaluated and shortlisted for the second round.<br />
                                    Timing: 11:00 am to 11:45 am<br /><br />
                                    Round 2- Coding round<br /><br />
                                    You will be given a problem statement. You are free to use any of the following languages. C, C++, JAVA and Python.<br />
                                    This round will be evaluated based on your approach in solving the problem and the time taken to solve it.<br />
                                    
                                </p>
                                
                                </p>
                                <div class="flex justify-center">
                                <a href="https://forms.gle/E7YCbJiyakyj8bb79"><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</button></a>
                                    </div>
                            </div>
                    </div>
                </section>

            </div>
            <Footer/>
        </div>
    )
}
export default Loopup;