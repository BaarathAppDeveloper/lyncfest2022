import React from "react";
import AI from "../AI";

import AR from "./AR";
import BC from "./BC";
import IOT from "./IOT";
import Web from "./Web";
import Nav from "./Nav";

import { motion } from "framer-motion";

import Footer from "../symp/Footer";
import sdg from "../imgs/sdgs-removebg-preview.png";

const Table = () => {
  return (
    <div className="bg-black">
      <Nav />
      <div class="w-[100%] bg-black flex items-center justify-center mt-20">
        <img
          src="https://i0.wp.com/yeppeurope.org/wp-content/uploads/2020/01/8.png?fit=970%2C256&ssl=1"
          class="bg-black"
          className="w-[70%] object-contain"
          alt="sdg"
        />
      </div>
      <div class="bg-black">
        <div class="bg-black" id="Table">
          <div className="container px-2 py-7 mx-auto sm:p-4  dark:text-gray-100">
            <h2 className="mb-4 text-5xl py-4 font-semibold leading-tight text-slate-300">
              Problem Statements
            </h2>
            <br />
            <br />
            <div class="flex items-center justify-evenly h-16 py-11  font-bold">
              <div class=" container h-20 w-48 py-20">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.5 }}
                  class="py-3  px-4 border-2 rounded-xl border-teal-200 shadow-sm shadow-white hover:bg-slate-500 hover:text-white"
                >
                  <a
                    href="/hackathon/PS/#AI"
                    className="text-gray-100 text-3xl py-2 rounded-md  font-bold"
                  >
                    AI & DA
                  </a>
                </motion.div>
              </div>
              <div class=" container h-20 w-48 py-20">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.5 }}
                  class="py-3  px-4 border-2 rounded-xl border-teal-200 shadow-sm shadow-white hover:bg-slate-500 hover:text-white"
                >
                  <a
                    href="/hackathon/PS/#AR"
                    className="text-gray-100 text-3xl py-2 rounded-md  font-bold"
                  >
                    AR & VR
                  </a>
                </motion.div>
              </div>
              <div class=" container h-20 w-48 py-20">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.5 }}
                  class="py-3  px-15 border-2 rounded-xl border-teal-200 shadow-sm shadow-white hover:bg-slate-500 hover:text-white"
                >
                  <a
                    href="/hackathon/PS/#BC"
                    className="text-gray-100 text-3xl py-2 rounded-md  font-bold"
                  >
                    Blockchain
                  </a>
                </motion.div>
              </div>
              <div class=" container h-20 w-48 py-20">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.5 }}
                  class="py-3  px-10 border-2 rounded-xl border-teal-200 shadow-sm shadow-white hover:bg-slate-500 hover:text-white"
                >
                  <a
                    href="/hackathon/PS/#IOT"
                    className="text-gray-100 text-3xl py-2 rounded-md  font-bold"
                  >
                    IOT
                  </a>
                </motion.div>
              </div>

              <div class=" container h-20 w-48 py-20 px-0">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.5 }}
                  class="py-3  px-0 border-2 rounded-xl border-teal-200 shadow-sm shadow-white hover:bg-slate-500 hover:text-white"
                >
                  <a
                    href="/hackathon/PS/#Web"
                    className="text-gray-100 text-2xl py-2 rounded-md  font-bold"
                  >
                    Web & App <br /> Development
                  </a>
                </motion.div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="overflow-x-auto mb-20">
              <text
                id="AI"
                class="font-bold font-nunito text-4xl text-white py-8"
              >
                AI & Data Analytics
              </text>
              <br />
              <br />
              <table className="min-w-full text-1xl border-4 py-7  border-l-slate-500">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead className="bg-black text-white">
                  <tr className="text-left  bg-black">
                    <th className="p-3 font-semibold  text-2xl text-center">
                      S.No
                    </th>
                    <th className="p-3 font-semibold  text-2xl text-center">
                      PS #
                    </th>
                    <th className="p-3 text-center font-semibold text-2xl">
                      Statement
                    </th>
                    <th className="p-3 text-center text-2xl font-semibold">
                      Description
                    </th>
                    <th className="p-3 text-right text-2xl font-semibold">
                      SDG Goals
                    </th>
                  </tr>
                </thead>
                <br />
                <tbody class="border-gray-400 bg-black font-medium">
                  {AI.map((detail, key) => (
                    <tr className=" border-white border-2 bg-black text-slate-300">
                      <td className="py-3 px-8">
                        <p>{detail["S.no."]}</p>
                      </td>
                      <td className="py-3 px-8">
                        <p>{detail["Problem Id"]}</p>
                      </td>
                      <td className="py-3 px-32">
                        <p class="text-left flex-col items-center">
                          {detail["Problem Statement"]}
                        </p>
                      </td>
                      <td className="py-3 px-8 text-right">
                        <p class="text-left flex-col items-center">
                          {detail["Description"]}
                        </p>
                      </td>
                      <td className="py-8 px-8 text-right">
                        <p>{detail["SDG"]}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <br />
              <br />
            </div>
            <text id="AR" class="font-bold font-nunito text-3xl text-white">
              AR & VR
            </text>
            <br />
            <br />
            <table className="min-w-full text-1xl border-4  border-l-slate-500">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead className="dark:bg-slate-500 text-teal-700">
                <tr className="text-left  bg-gray-800">
                  <th className="p-3 font-semibold  text-2xl text-center">
                    S.No
                  </th>
                  <th className="p-3 font-semibold  text-2xl text-center">
                    PS #
                  </th>
                  <th className="p-3 text-center font-semibold text-2xl">
                    Statement
                  </th>
                  <th className="p-3 text-center text-2xl font-semibold">
                    Description
                  </th>
                  <th className="p-3 text-right text-2xl font-semibold">
                    SDG Goals
                  </th>
                </tr>
              </thead>

              <tbody class="border-gray-400 bg-black font-medium text-white border-2">
                {AR.map((detail, key) => (
                  <tr className=" border-gray-700 border-2 text-white">
                    <td className="py-3 px-8">
                      <p>{detail["S.no."]}</p>
                    </td>
                    <td className="py-3 px-8">
                      <p>{detail["Problem Id"]}</p>
                    </td>
                    <td className="py-3 px-32">
                      <p class="text-left flex-col items-center">
                        {detail["Problem Statement"]}
                      </p>
                    </td>
                    <td className="py-3 px-8 text-right">
                      <p class="text-left flex-col items-center">
                        {detail["Description"]}
                      </p>
                    </td>
                    <td className="py-3 px-8 text-right">
                      <p>{detail["SDG"]}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <br />
            <text id="IOT" class="font-bold font-nunito text-3xl text-white">
              Internet of Things
            </text>
            <br />
            <br />
            <table className="min-w-full text-1xl border-4  border-l-slate-500">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead className="dark:bg-slate-500 text-teal-700">
                <tr className="text-left  bg-gray-800">
                  <th className="p-3 font-semibold  text-2xl text-center">
                    S.No
                  </th>
                  <th className="p-3 font-semibold  text-2xl text-center">
                    PS #
                  </th>
                  <th className="p-3 text-center font-semibold text-2xl">
                    Statement
                  </th>
                  <th className="p-3 text-center text-2xl font-semibold">
                    Description
                  </th>
                  <th className="p-3 text-right text-2xl font-semibold">
                    SDG Goals
                  </th>
                </tr>
              </thead>
              <tbody class="border-gray-400 bg-black font-medium text-white border-2">
                {IOT.map((detail, key) => (
                  <tr className=" border-gray-700 border-2 text-white">
                    <td className="py-3 px-8">
                      <p>{detail["S.no."]}</p>
                    </td>
                    <td className="py-3 px-8">
                      <p>{detail["Problem Id"]}</p>
                    </td>
                    <td className="py-3 px-32">
                      <p class="text-left flex-col items-center">
                        {detail["Problem Statement"]}
                      </p>
                    </td>
                    <td className="py-3 px-8 text-right">
                      <p class="text-left flex-col items-center">
                        {detail["Description"]}
                      </p>
                    </td>
                    <td className="py-3 px-8 text-right">
                      <p>{detail["SDG"]}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <text
              id="BC"
              class="font-bold font-nunito text-3xl text-white py-24"
            >
              Blockchain
            </text>
            <br />
            <br />
            <table className="min-w-full text-1xl border-4 py-12  border-l-slate-500">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />

                <col className="w-24" />
              </colgroup>
              <thead className="dark:bg-slate-500 text-teal-700">
                <tr className="text-left  bg-gray-800">
                  <th className="p-3 font-semibold  text-2xl text-center">
                    S.No
                  </th>
                  <th className="p-3 font-semibold  text-2xl text-center">
                    PS #
                  </th>
                  <th className="p-3 text-center font-semibold text-2xl">
                    Statement
                  </th>
                  <th className="p-3 text-center text-2xl font-semibold">
                    Description
                  </th>
                  <th className="p-3 text-right text-2xl font-semibold">
                    SDG Goals
                  </th>
                </tr>
              </thead>

              <tbody class="border-gray-400 bg-black font-medium text-white border-2">
                {BC.map((detail, key) => (
                  <tr className=" border-gray-700 border-2 text-white">
                    <td className="py-3 px-8">
                      <p>{detail["S.no."]}</p>
                    </td>
                    <td className="py-3 px-8">
                      <p>{detail["Problem Id"]}</p>
                    </td>
                    <td className="py-3 px-32">
                      <p class="text-left flex-col items-center">
                        {detail["Problem Statement"]}
                      </p>
                    </td>
                    <td className="py-3 px-8 text-right">
                      <p class="text-left flex-col items-center">
                        {detail["Description"]}
                      </p>
                    </td>
                    <td className="py-3 px-8 text-right">
                      <p>{detail["SDG"]}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <br />
            <br />
            <text
              id="Web"
              class="font-bold font-nunito text-3xl text-white py-24"
            >
              Web & App Development
            </text>
            <br />
            <br />
            <table className="min-w-full text-1xl border-4 py-12  border-l-slate-500">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead className="dark:bg-slate-500 text-teal-700">
                <tr className="text-left  bg-gray-800">
                  <th className="p-3 font-semibold  text-2xl text-center">
                    S.No
                  </th>
                  <th className="p-3 font-semibold  text-2xl text-center">
                    PS #
                  </th>
                  <th className="p-3 text-center font-semibold text-2xl">
                    Statement
                  </th>
                  <th className="p-3 text-center text-2xl font-semibold">
                    Description
                  </th>
                  <th className="p-3 text-right text-2xl font-semibold">
                    SDG Goals
                  </th>
                </tr>
              </thead>

              <tbody class="border-gray-400 bg-black font-medium ">
                {Web.map((detail, key) => (
                  <tr className=" border-gray-700 bg-black border-2 text-white">
                    <td className="py-3 px-8">
                      <p>{detail["S.no."]}</p>
                    </td>
                    <td className="py-3 px-8">
                      <p>{detail["Problem Id"]}</p>
                    </td>
                    <td className="py-3 px-32">
                      <p class="text-left flex-col items-center">
                        {detail["Problem Statement"]}
                      </p>
                    </td>
                    <td className="py-3 px-8 text-right">
                      <p class="text-left flex-col items-center">
                        {detail["Description"]}
                      </p>
                    </td>
                    <td className="py-3 px-8 text-right">
                      <p>{detail["SDG"]}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Table;
