import React from "react";

import IOT from "../imgs/iot.jpg";
import ARVR from "../imgs/arvr.jpg";
import Dev from "../imgs/application-dev-banner@2x.png";
import ML from "../imgs/ml.jpg";
import Chain from "../imgs/blockchain.png";

const Domains = () => {
  return (
    <div id="domains" class="bg-black px-5 py-28">
      <text
        id="domains"
        class="py-32 text-4xl font-nunito font-bold text-slate-300"
      >
        Domains
      </text>
      <div class=" py-20 px-7 w-full grid grid-cols-3 gap-y-10 md:grid-cols-1 sm:grid-cols-1">
        <div class="flex justify-center hover:scale-105  transition duration-150 ease-in-out ">
          <div class="rounded-lg shadow-lg bg-slate-800 max-w-sm">
            <a href="hackathon/PS#IOT">
              <img class="rounded-t-lg" src={IOT} alt="" />
            </a>
            <div class="p-6">
              {/*<h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>*/}
              <a href="hackathon/PS#IOT">
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 text-white font-medium text-base leading-tight uppercase rounded   "
                >
                  IOT
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="flex justify-center hover:scale-105  transition duration-150 ease-in-out">
          <div class="rounded-lg shadow-lg bg-slate-800 max-w-sm">
            <a href="hackathon/PS#AI">
              <img class="rounded-t-lg" src={ML} alt="" />
            </a>
            <div class="p-6">
              {/*<h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>*/}
              <a href="hackathon/PS#AI">
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 text-white font-medium text-base leading-tight uppercase rounded    transition duration-150 ease-in-out"
                >
                  AI & ML
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="flex justify-center hover:scale-105  transition duration-150 ease-in-out">
          <div class="rounded-lg shadow-lg bg-slate-800 max-w-sm">
            <a href="hackathon/PS#Web">
              <img
                class="rounded-t-lg px-2 py-4 bg-sky-800"
                height={500}
                src={Dev}
                alt=""
              />
            </a>
            <div class="px-2 py-5">
              {/*<h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>*/}
              <a href="hackathon/PS#Web">
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 text-white font-medium text-base leading-tight uppercase rounded    transition duration-150 ease-in-out"
                >
                  Mobile and Web Development
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="flex justify-center hover:scale-105  transition duration-150 ease-in-out">
          <div class="rounded-lg shadow-lg bg-slate-800 max-w-sm">
            <a href="hackathon/PS#AR">
              <img class="rounded-t-lg" src={ARVR} alt="" />
            </a>
            <div class="p-6">
              {/*<h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>*/}
              <a href="hackathon/PS#AR">
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 text-white font-medium text-base leading-tight uppercase rounded    transition duration-150 ease-in-out"
                >
                  Ar & VR
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="flex justify-center hover:scale-105  transition duration-150 ease-in-out">
          <div class="rounded-lg shadow-lg bg-slate-800 max-w-sm">
            <a href="hackathon/PS#BC">
              <img class="rounded-t-lg" src={Chain} alt="" />
            </a>
            <div class="p-6">
              {/*<h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>*/}
              <a href="hackathon/PS#BC">
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 text-white font-medium text-base leading-tight uppercase rounded    transition duration-150 ease-in-out"
                >
                  Blockchain
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Domains;
