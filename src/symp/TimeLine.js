import React, { useEffect } from 'react'
import './TimeLine.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AOS from 'aos'
import 'aos/dist/aos.css';
import config from '../config-aos'

import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import QuizIcon from '@mui/icons-material/Quiz';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

function TimeLine() {

    useEffect(() => {
        AOS.init(config);
    }, [])

    return (
        <div id="schedule">
        
            <div class="bg-black text-base text-slate-200 py-20">
                <div>
                    <text class="text-5xl font-semibold font-nunito ">Schedule</text><br /><br />
                    <text class="text-3xl font-semibold font-nunito  py-10">October 20</text>
                </div>

                <div className="timeline py-10">
                    <div className="wrapper">
                        <div className="center-line">
                            <a href="#schedule" className="scroll-icon" data-aos="zoom-out">
                                <ArrowUpwardIcon />
                            </a>
                        </div>
                        <div className={"row " + "row-1"}>
                            <section data-aos="zoom-in">
                                <i className="icon fas fa-home">
                                    <DocumentScannerIcon/>
                                </i>
                                <div className="details">
                                    <span className="title">Letter Box</span>
                                    <span>10:00 am ~ 12:00</span>
                                </div>
                                {/*<p>about</p>*/}
                            </section>
                        </div>
                        <div className={"row " + "row-2"}>
                            <section data-aos="zoom-in">
                                <i className="icon fas fa-home">
                                    <QuizIcon />
                                </i>
                                <div className="details">
                                    <span className="title">La Inquizition</span>
                                    <span>10:00 am ~ 12:00</span>
                                </div>
                                {/*<p>about</p>*/}
                            </section>
                        </div>
                        <div className={"row " + "row-1"}>
                            <section data-aos="zoom-in">
                                <i className="icon fas fa-home">
                                    
                                    <CenterFocusWeakIcon />
                                </i>
                                <div className="details">
                                    <span className="title">Let's cliq</span>
                                    <span>10:00 ~ 10:30 and 2:00 ~ 2:30</span>
                                </div>
                                {/*<p>about</p>*/}
                            </section>
                        </div>
                        <div className={"row " + "row-2"}>
                            <section data-aos="zoom-in">
                                <i className="icon fas fa-home">
                                    <FingerprintIcon />
                                </i>
                                <div className="details">
                                    <span className="title">Loop up</span>
                                    <span>11:00 ~ 11.45 and 1:15 ~ 2.00</span>
                                </div>
                                {/*<p>about</p>*/}
                            </section>
                        </div>
                        <div className={"row " + "row-1"}>
                            <section data-aos="zoom-in">
                                <i className="icon fas fa-home">
                                    <SportsEsportsIcon />
                                </i>
                                <div className="details">
                                    <span className="title">Legionz</span>
                                    <span>1:00 ~ 2:30</span>
                                </div>
                                {/*<p>about</p>*/}
                            </section>
                        </div>
                        <div className={"row " + "row-2"}>
                            <section data-aos="zoom-in">
                                <i className="icon fas fa-home">
                                    <EmojiObjectsIcon />
                                </i>
                                <div className="details">
                                    <span className="title">Link-a-Link</span>
                                    <span>1:30 ~ 2:30</span>
                                </div>
                                {/*<p>about</p>*/}
                            </section>
                        </div>




                    </div>
                </div></div>
            </div>

    )
}

export default TimeLine
