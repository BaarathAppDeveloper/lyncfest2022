import React from "react";
import Location from "../imgs/icons8-location-update-50.png";
const Footer = () => {
  return (
    <div id="footer" class="py-16 bg-slate-800">
      <footer className="px-4   text-gray-400">
        <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <div className="max-w-md px-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
              <div className="flex flex-col justify-center space-y-3">
                <div>
                  <h2 className="text-xl font-semibold">Contact</h2>
                </div>
                <div class="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-label="Email address"
                    className="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                    ></path>
                  </svg>
                  <span class="text-lg font-nunito">
                    <a href="mailto:lyncfest2022@gmail.com">
                      lyncfest2022@gmail
                    </a>
                  </span>
                </div>

                <div className="space-y-1 font-nunito">
                  <span className="flex items-center space-x-2">
                    <span className="dark:text-gray-400">
                      Symposium - Srinivasan G
                    </span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      aria-label="Phonenumber"
                      className="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                      ></path>
                    </svg>
                    <span className="dark:text-gray-400">9840799884</span>
                  </span>
                </div>
                <br />
                <div className="space-y-1 font-nunito">
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      aria-label="Email address"
                      className="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                      ></path>
                    </svg>
                    <span className="dark:text-gray-400">
                      Hackathon - Vihas S
                    </span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      aria-label="Phonenumber"
                      className="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                      ></path>
                    </svg>
                    <span className="dark:text-gray-400">8778433024</span>
                  </span>
                </div>
                <div></div>
              </div>
            </div>
            <div class="px-40">
              <img
                class="bg-gray-800 px-36 py-4"
                src={Location}
                height={350}
                width={350}
                alt=""
              />
              <text class="text-2xl font-nunito font-bold text-white">
                Sri Sairam Institute of Technology
              </text>
              <br />
              <text class="text-xl font-nunito font-bold text-white">
                Sai Leo Nagar, West Tambaram,
                <br />
                Chennai - 600044
              </text>
            </div>
          </div>
          <div class="py-2 px-2">
            <center class="py-4">
              <text class="text-xl font-semibold font-nunito text-white py-10">
                Lyncfest
              </text>
              <br />
              <br />
              <a class="py-2" href="https://www.instagram.com/lyncfest22/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-instagram"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                  <circle cx="12" cy="12" r="3"></circle>
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                </svg>
              </a>
            </center>
            <center class="py-7">
              <text class="text-xl font-semibold font-nunito text-white">
                IT Dept, SIT
              </text>
              <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8 py-3">
                <li>
                  <a href="https://www.instagram.com/sairamit_it/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-brand-instagram"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                      <circle cx="12" cy="12" r="3"></circle>
                      <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/sairamitit/videos/315808929880804/?extid=NS-UNK-UNK-UNK-IOS_GK0T-GK1C">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-brand-facebook"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/posts/sairamit-information-technology_technoholix-activity-6859120428582076416-6hL">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-brand-linkedin"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                      <line x1="8" y1="11" x2="8" y2="16"></line>
                      <line x1="8" y1="8" x2="8" y2="8.01"></line>
                      <line x1="12" y1="16" x2="12" y2="11"></line>
                      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </center>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
