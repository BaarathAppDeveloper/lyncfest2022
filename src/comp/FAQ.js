import React from "react";

const FAQ=()=>{
    return(
        <section className="bg-black text-gray-300 font-nunito text-lg">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2><br /><br />
                <div className="grid gap-14 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32  text-left flex-col items-center">
                    
                    
                    <div>
                        <h3 className="font-semibold">WHO CAN PARTICIPATE ?<br /><br />ARE THERE ANY PREREQUISITES OR REQUIRED SKILLS ?</h3>
                        <p className="mt-1 py-5 dark:text-gray-400">
                            Anyone is welcome to participate in this event. While experience coding and programming is a huge plus, teams will also need people with strong presentation skills and brilliant ideas.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">IS THERE ANYTHING THAT I NEED TO PREP?</h3><br /><br />
                        <p className="mt-1 py-4 dark:text-gray-400">
                            Other than finding fellow brilliant minds with complimentary skills to team up with, there is nothing that you need to prepare in advance.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">HOW MUCH DOES IT COST?</h3><br />
                        <p className="mt-1 dark:text-gray-400">FREE. <br/>Free for spectators. Free for participants.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">WHAT SHOULD BE THE SIZE OF THE TEAM ? </h3><br />
                        <p className="mt-1 dark:text-gray-400">A team can have minimum of 2 to maximum of 4 people.</p>
                    </div>
                    <br /><br /><br /><br />
                    
                </div>
            </div>
        </section>
    )
}
export default FAQ;