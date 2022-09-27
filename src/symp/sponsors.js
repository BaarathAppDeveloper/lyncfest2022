import React from "react";
import Quiz from "../imgs/legionz.png";
import "../Events.css";

import Fresa from "../imgs/fresa.png";
import Tagros from "../imgs/tagros.png";
import Sirsub from "../imgs/sirsub.png";
import Hope from "../imgs/hope.png";
import BOSSE from "../imgs/BOSSE.png";

const Sponsor = () => {
  return (
    <div id="sponsors" class="bg-black py-10">
      <center class="text-3xl font-nunito text-white font-bold py-10">
        Sponsors
      </center>

      <div class="flex items-center justify-around px-28 py-10 md:flex-col">
        <a href="https://fresatechnologies.com/">
          <div className="card__container mb-10">
            <div className="card ">
              <div className="logo_container" data-aos=" zoom-in">
                <img src={Fresa} alt="memeicon" />
              </div>
            </div>
          </div>
        </a>
        <a href="https://tagros.com/">
          <div className="card__container mb-10">
            <div className="card ">
              <div className="logo_container" data-aos=" zoom-in">
                <img src={Tagros} alt="memeicon" />
              </div>
            </div>
          </div>
        </a>
        <a href="https://sirsubinfotech.com/">
          <div className="card__container mb-10">
            <div className="card ">
              <div className="logo_container" data-aos=" zoom-in">
                <img src={Sirsub} alt="memeicon" />
              </div>
            </div>
          </div>
        </a>
        <a href="https://www.hopelearning.net/">
          <div className="card__container mb-10">
            <div className="card ">
              <div className="logo_container" data-aos=" zoom-in">
                <img src={Hope} alt="memeicon" />
              </div>
            </div>
          </div>
        </a>

        <div className="card__container mb-10">
          <div className="card ">
            <div className="logo_container" data-aos=" zoom-in">
              <img src={BOSSE} alt="memeicon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sponsor;
