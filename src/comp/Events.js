import React from "react";
import "../Events.css";
import Quiz from "../logo-removebg-preview.png";

function Events() {
  return (
    <div className="events bg-blue-800">
      <div className="cards grid-cols-3">
        \
        <div className="card__container">
          <div className="card" data-aos="zoom-in">
            <div className="logo_container">
              <img src={Quiz} alt="memeicon" />
            </div>
            <div className="content_container">
              <p>
                Are you hungry for a challenge? Do you think your coding skills
                can win this? Join Loop Up and find out!
              </p>
            </div>
          </div>
        </div>
        <div className="card__container">
          <div className="card" data-aos="zoom-in">
            <div className="logo_container">
              <img src={Quiz} alt="memeicon" />
            </div>
            <div className="content_container">
              <p>
                Are you hungry for a challenge? Do you think your coding skills
                can win this? Join Loop Up and find out!
              </p>
            </div>
          </div>
        </div>
        <div className="card__container">
          <div className="card" data-aos="zoom-in">
            <div className="logo_container">
              <img src={Quiz} alt="memeicon" />
            </div>
            <div className="content_container">
              <p>
                Test your deduction skills. Connect the dots and find the words.
                Link-a-Link will puzzle your brains.
              </p>
            </div>
          </div>
        </div>
        <div className="card__container">
          <div className="card" data-aos="zoom-in">
            <div className="logo_container">
              <img src={Quiz} alt="memeicon" />
            </div>
            <div className="content_container">
              <p>
                Do you wanna show off how smart you are? What better place than
                at a quiz show! Brag your omniscient potential at La
                Inquizition.
              </p>
            </div>
          </div>
        </div>
        <div className="card__container">
          <div className="card" data-aos="zoom-in">
            <div className="logo_container">
              <img src={Quiz} alt="memeicon" />
            </div>
            <div className="content_container">
              <p>
                {" "}
                Let’s Cliq the wonders, Share the snap, and Celebrate
                photography.
              </p>
            </div>
          </div>
        </div>
        <div className="card__container">
          <div className="card" data-aos="zoom-in">
            <div className="logo_container">
              <img src={Quiz} alt="memeicon" />
            </div>
            <div className="content_container">
              <p>
                Gamers! Assemble to grab your crown at Legionz. PS: We have
                certified grass free zones. So no need to touch grass ;){" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
