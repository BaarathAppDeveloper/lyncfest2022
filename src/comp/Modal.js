import React from "react";
import FAQ from "./FAQ";
import Guidelines from "./Guidelines";
import Nav from "./Nav";


const Modal=()=>{
    return(
        <div class="bg-black">
            <Nav/>
            <Guidelines/>
            <FAQ/>
        </div>
        
    )
}
export default Modal;