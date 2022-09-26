/* eslint-disable no-unused-vars */
import React from "react";

import Hack1 from "../hack_in_hub-removebg-preview.png";

import venue from "../imgs/placeholder.png";
import team from "../imgs/group.png";
import money from "../imgs/euros-money-bag.png";

const Title = () => {
  return (
    <div class="py-10 bg-black" id="Title">
      <center class="">
        <div class="">
          <img src={Hack1} height="500" width="500" alt="as" />

          <header class="max-w-full md:w-1/2 mx-auto">
            <div class="relative flex flex-col justify-center items-center space-y-3 mx-10">
              <svg
                viewBox="0 0 80 120"
                fill="currentColor"
                class="absolute bottom-0 left-0 z-0 w-32 text-white"
              >
                <defs>
                  <pattern id="1" x="0" y="0" width=".1" height=".1">
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect fill="url(#1)" width="80" height="120"></rect>
              </svg>
              <svg
                viewBox="0 0 80 120"
                fill="currentColor"
                class="absolute top-10 right-0 z-0 w-32 text-yellow-500"
              >
                <defs>
                  <pattern id="2" x="0" y="0" width=".1" height=".1">
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect fill="url(#2)" width="80" height="120"></rect>
              </svg>

              <h1 class="text-3xl font-bold text-center text-teal-500 ">
                <h1 class="py-2">Join ~ Build ~ Learn</h1>
                <br />{" "}
                <span class="text-blue-300">
                  Bring-out your hidden tech genius in this{" "}
                  <text class="text-4xl font-bold text-blue-300">24</text> hours
                  hackathon by solving difficult problems faced by the folks.
                </span>
              </h1>
              {/*<p class="text-lg font-medium text-center">
                            Join. Build. Learn. Tryhard in Hack in Hub ‘22. Bring-out your hidden tech genius in this 24 hours hackathon by solving difficult problems faced by the folks.
    </p>*/}
              <div class="py-5">
                <div class="flex items-center space-x-5 text-md font-semibold font-3xl p-4">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdMgKu3DoAywkaWTKTvxTVE3w6a5vDxExlL20cgUipYBnQSKQ/viewform?usp=sf_link"
                    class="px-5 py-2 bg-blue-600 text-2xl text-white rounded-md hover:bg-gray-900"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </header>

          <div class="py-10">
            <div class="flex justify-center space-x-10 m-10 font-semibold">
              <div
                class="bg-teal-500 text-white px-8 py-2 rounded-md flex items-center space-x-2"
                href="re"
              >
                <div class="flex">
                  <span class="text-2xl text-slate-700 px-2 ">
                    <img src={venue} height={50} width={50} />
                  </span>
                  <span class="text-2xl text-slate-700 py-2">
                    : Sairam Institutions{" "}
                  </span>
                  {/*<p class="font-bold text-xl py-0 px-0 text-slate-700"><br />
                                        {'\n'}
                                        @<br />
                                        Sairam Institute

</p>*/}
                </div>
              </div>
              <a
                class="bg-teal-500 text-white px-8 py-2 rounded-md flex items-center space-x-2"
                href="re"
              >
                <span class="text-2xl text-slate-700 px-2 ">
                  <img src={team} height={50} width={50} />
                </span>

                <span>
                  <text class="text-2xl py-2 text-slate-800">
                    : 2 ~ 4 per Team
                    <br />
                  </text>
                </span>
              </a>
              <a
                class="bg-teal-500 text-white px-4 py-2 rounded-md flex items-center space-x-2"
                href="re"
              >
                <span class="text-2xl text-slate-700 px-2">
                  <img src={money} height={50} width={50} />
                </span>

                <span>
                  <text class="text-2xl py-2 text-slate-800">
                    : Free Registration
                    <br />
                  </text>
                </span>
              </a>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};
export default Title;
