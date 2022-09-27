import React from "react";

const Stats = () => {
  return (
    <div>
      <section className="p-6 bg-gray-800 text-gray-300">
        <text class="text-5xl font-nunito">Its been place to </text>
        <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
            <p className="text-sm sm:text-base">Teams</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">5</p>
            <p className="text-sm sm:text-base">Sponsors</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
            <p className="text-sm sm:text-base">Institutions</p>
          </div>

          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">8</p>
            <p className="text-sm sm:text-base">TED talks</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">22</p>
            <p className="text-sm sm:text-base">Years of experience</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">20+</p>
            <p className="text-sm sm:text-base">Workshops</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Stats;
