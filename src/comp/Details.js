import React from "react";
import Logo from "../logo.svg";

import NoteAltIcon from '@mui/icons-material/NoteAlt';

const Details=()=>{
    return(
        <div class="bg-gray-800 py-10">
            {/*<div class="  text-gray-200 font-extrabold text-3xl py-7">Domains</div>
            <div class="container grid justify-center gap-4 gap-y-10 mx-auto lg:grid-col-4 xl:grid-cols-3">
        
            <div className=" container py-10 flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-100 bg-yellow-300 text-gray-600">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src={Logo} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">Martin Nolan</h4>
                            <span className="text-xs dark:text-gray-400">10 am - 11.30 am</span>
                        </div>
                    </div>

                </div>

                    <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                        <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                    </div>

            </div>
                <div className=" container py-10 flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-100 bg-yellow-300 text-gray-600">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src={Logo} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Martin Nolan</h4>
                                <span className="text-xs dark:text-gray-400">10 am - 11.30 am</span>
                            </div>
                        </div>

                    </div>

                    <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                        <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                    </div>

                </div>
                <div className=" container py-10 flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-100 bg-yellow-300 text-gray-600">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src={Logo} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Martin Nolan</h4>
                                <span className="text-xs dark:text-gray-400">10 am - 11.30 am</span>
                            </div>
                        </div>

                    </div>

                    <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                        <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                    </div>

                </div>
                
        
            <div className="container  py-10 flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-100 bg-yellow-300 text-gray-600">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={Logo} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">Martin Nolan</h4>
                        <span className="text-xs dark:text-gray-400">10 am - 11.30 am</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">
                    {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
    </svg>
                    <span className="text-xl font-bold">@ Oct 20</span>
                </div>
            </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                        <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                    </div>
        </div>
            
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-100 bg-yellow-300 text-gray-600">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={Logo} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">Martin Nolan</h4>
                        <span className="text-xs dark:text-gray-400">10 am - 11.30 am</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">
                    {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
    </svg>
                    <span className="text-xl font-bold">@ Oct 20</span>
                </div>
            </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                        <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                    </div>
        </div>
            
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-100 bg-yellow-300 text-gray-600">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={Logo} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">Martin Nolan</h4>
                        <span className="text-xs dark:text-gray-400">10 am - 11.30 am</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">
                    {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
    </svg>
                    <span className="text-xl font-bold">@ Oct 20</span>
                </div>
            </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                        <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                    </div>
        </div>
          
            
           
            </div >*/}
        

            {/*<div class="py-10">
                <section className="bg-gray-800 text-gray-400">
                    <div className="container mx-auto flex flex-col p-6">
                        <h2 className="py-4 text-3xl font-bold text-center">Neflibeta Naan</h2>
                        <div className="divide-y divide-gray-700">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-info" width="70" height="70" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                                        <path d="M11 14h1v4h1"></path>
                                        <path d="M12 11h.01"></path>
                                    </svg>
                                   
                                </div>
                                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                                    <span className="text-xs tracking-wider uppercase dark:text-violet-400">Step 1 - Expecto Patronum</span>
                                    <span className="text-xl font-bold md:text-2xl">Letter Boxd</span>
                                    <span className="mt-4 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim cons equatur nihil ipsum.</span>
                                </div>
                            </div>
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="70" height="70" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <polyline points="7 8 3 12 7 16"></polyline>
                                        <polyline points="17 8 21 12 17 16"></polyline>
                                        <line x1="14" y1="4" x2="10" y2="20"></line>
                                    </svg>
                                </div>
                                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                                    <span className="text-xs tracking-wider uppercase dark:text-violet-400">Step 2 - Avada Kedavra</span>
                                    <span className="text-xl font-bold md:text-2xl"> Loop Up</span>
                                    <span className="mt-4 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim cons equatur nihil ipsum.</span>
                                </div>
                            </div>
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-broadcast" width="70" height="70" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M18.364 19.364a9 9 0 1 0 -12.728 0"></path>
                                        <path d="M15.536 16.536a5 5 0 1 0 -7.072 0"></path>
                                        <circle cx="12" cy="13" r="1"></circle>
                                    </svg>
                                </div>
                                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                                    <span className="text-xs tracking-wider uppercase dark:text-violet-400">Step 3 - Expelliarmus</span>
                                    <span className="text-xl font-bold md:text-2xl">Link-a-Link</span>
                                    <span className="mt-4 dark:bg-gray-800 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim cons equatur nihil ipsum.</span>
                                </div>
                            </div>
                            <div className="grid justify-center grid-cols-4 p-7 mx-auto space-y-8 lg:space-y-0">
                                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-question" width="70" height="70" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="10" cy="10" r="7"></circle>
                                        <path d="M21 21l-6 -6"></path>
                                        <line x1="10" y1="13" x2="10" y2="13.01"></line>
                                        <path d="M10 10a1.5 1.5 0 1 0 -1.14 -2.474"></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                                    <span className="text-xs tracking-wider uppercase dark:text-violet-400">Step 4 - Sectumsempra</span>
                                    <span className="text-xl font-bold md:text-2xl">La Inquizition</span>
                                    <span className="mt-4 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim cons equatur nihil ipsum.</span>
                                </div>
                                
                                
                                
                            </div>
                            <div className="grid justify-center grid-cols-4 p-7 mx-auto space-y-8 lg:space-y-0">
                                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-gamepad-2" width="70" height="70" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z"></path>
                                        <path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232"></path>
                                        <path d="M8 9v2"></path>
                                        <path d="M7 10h2"></path>
                                        <path d="M14 10h2"></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                                    <span className="text-xs tracking-wider uppercase dark:text-violet-400">Step 5 -  AVADA KEDAVRA</span>
                                    <span className="text-xl font-bold md:text-2xl">Legionz</span>
                                    <span className="mt-4 dark:text-gray-300">Gamers! Assemble to grab your crown at Legionz. PS: We have certified grass free zones. So no need to touch grass ;)   </span>
                                </div>



                            </div>
                        </div>
                    </div>
                </section>

            </div>*/}
            <section className="m-4 md:m-8 dark:bg-gray-100 text-gray-400">
                <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                    <h2 className="text-5xl font-bold"><text class="text-emerald-300">Dive in domains</text> <text class="text-slate-300">to</text> <text class="text-yellow-200">dig up Golds</text></h2>
                    <p className="dark:text-gray-400">Libero minima optio qui</p>
                </div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Blockchain</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Blockchain</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Blockchain</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Blockchain</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Blockchain</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold">Blockchain</h3>
                        <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div>
                    </div>
                </div>
            </section>
    </div>
    )

}
export default Details;