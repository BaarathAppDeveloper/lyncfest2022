import React from "react";
import Events from "./Events";
import Footer from "./Footer";
import Aboutus from "./Aboutus";
import Head from "./Head";
import Sponsor from "./sponsors";
import TimeLine from "./TimeLine";
import Title from "./Title";
import { Modal } from "@mui/material";
import TransitionsModal from "./Modal";

const Symp=()=>{
    return(
        <div className="overflow-hidden">
            <Title/>
            <Head/>
            <Aboutus/>
            
            <Events/>
            <TimeLine />
            <Sponsor/>
            <Footer/>
            
            
        </div>
    )
}
export default Symp;