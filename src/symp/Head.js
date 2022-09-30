import React, { useEffect, useState } from "react";
import Lync from "../imgs/lync fest.jpg";
import "../Events.css";
import { motion } from "framer-motion";
import "../symp/landing.css";

const Head = () => {
  const [days, setDays] = useState("--");
  const [hours, setHours] = useState("--");
  const [mins, setMins] = useState("--");
  const [secs, setSecs] = useState("--");
  const [isAnimation, setAnimation] = useState(true);

  const getTimeDelay = () => {
    const currTime = new Date();
    const eventDate = new Date("10/19/22 10:00:00");
    return eventDate.getTime() - currTime.getTime();
  };

  const getTimeFormat = () => {
    const d2ms = 86400000;
    const h2ms = 3600000;
    const m2ms = 60000;
    const s2ms = 1000;
    let delayTime = getTimeDelay();
    let day = Math.floor(delayTime / d2ms);
    let hour = Math.floor((delayTime % d2ms) / h2ms);
    let min = Math.floor(((delayTime % d2ms) % h2ms) / m2ms);
    let sec = Math.floor((((delayTime % d2ms) % h2ms) % m2ms) / s2ms);
    day = day < 10 ? `0${day}` : `${day}`;
    hour = hour < 10 ? `0${hour}` : `${hour}`;
    min = min < 10 ? `0${min}` : `${min}`;
    sec = sec < 10 ? `0${sec}` : `${sec}`;
    setDays(day);
    setHours(hour);
    setMins(min);
    setSecs(sec);
  };

  useEffect(() => {
    let myInterval = setInterval(() => {
      getTimeFormat();
    }, 1000);
    return () => clearInterval(myInterval);
  });

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 9000);
  }, []);
  return (
    <div class="bg-black  font-nunito py-24">
      <center class="py-10 font-bold text-2xl text-slate-200 ">
        <img src={Lync} alt="" height={500} width={500} />
        <div className="countdown py-20 flex items-center justify-center flex-wrap sm:flex-col">
          <div className="countdown">
            <div className="countdownitem   ">
              <div className="time">{days}</div>
              <p>Days</p>
            </div>
            <div className="time__separator">:</div>
            <div className="countdownitem">
              <div className="time">{hours}</div>
              <p>Hours</p>
            </div>
          </div>
          <div className="time__separator mt-10 sm:hidden">:</div>
          <div className="countdown">
            <div className="countdownitem">
              <div className="time">{mins}</div>
              <p>Mins</p>
            </div>
            <div className="time__separator">:</div>
            <div className="countdownitem">
              <div className="time">{secs}</div>
              <p>Secs</p>
            </div>
          </div>
        </div>
        <text class="text-slate-400 py-11 font-nunito text-4xl font-semibold">
          {" "}
          October 19 - October 20 2K22
        </text>
        <br />
        <div class=" container h-20 w-48 py-20">
          <a
            href="#events"
            className="text-gray-100 text-3xl py-2 rounded-md  font-bold"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.5 }}
              class="py-3  px-10 border-2 rounded-xl border-teal-200 shadow-sm shadow-white hover:bg-slate-500 hover:text-white"
            >
              Register
            </motion.div>
          </a>
        </div>
      </center>

      {/*<center class="align-middle">
                <div className=" px-28">
                    <div class="font-bold text-5xl text-white py-20">Hackathon</div>
                    <div className="card__container">
                        <div className="card " data-aos="zoom-in">
                            <div className="logo_container">

                                <img src={Hackathon} alt="memeicon" />

                            </div>
                            <div className="content_container text-xl ">
                                <p>Are you hungry for a challenge? Do you think your coding skills can win this? Join Loop Up and find out!
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                    </center>*/}
      <br />
      <br />
    </div>
  );
};
export default Head;
