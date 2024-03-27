import React from 'react';
import '../../styles.css';

// Define variables for content
const heading = 'Design your own\nlanding page with ease.';
const designContent = [
    "Introduction",
    "About",
    "Contact",
    "Referral Forms",
    "Testimonials"
];

function Design() {
    return (
        // container for the section
        <div id="Design" className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center md:min-h-screen py-20 px-10">
            {/* headline */}
            <h1 className="mb-16 text-4xl text-center gradient-text whitespace-pre-line leading-tight">
                {heading}
            </h1>
            {/* grid */}
            <div className="grid grid-rows-5 gap-4 text-textColorPrimary  w-full">
                <div className="grid grid-cols-12  ">
                    <div className="col-span-3"></div> {/* Empty space to extend the left side */}
                    <div className="col-span-6 gradient-bg p-4 text-center shadow-xl justify-center">
                            Introduction
                    </div>
                </div>

                <div className="grid grid-cols-12  ">
                    <div className="col-span-3"></div> {/* Empty space to extend the left side */}
                    <div className="col-span-6  gradient-bg2 p-4 text-center shadow-xl justify-center shadow-xl">
                        About
                    </div>
                </div>

                <div className="grid grid-cols-12  ">
                    <div className="col-span-3"></div> {/* Empty space to extend the left side */}
                    <div className="col-span-6  gradient-bg p-4 text-center shadow-xl justify-center shadow-xl">
                        Contact
                    </div>
                </div>

                <div className="grid grid-cols-12  ">
                    <div className="col-span-3"></div> {/* Empty space to extend the left side */}
                    <div className="col-span-6  gradient-bg2 p-4 text-center shadow-xl justify-center shadow-xl">
                        Referral
                    </div>
                </div>

                <div className="grid grid-cols-12  ">
                    <div className="col-span-3"></div> {/* Empty space to extend the left side */}
                    <div className="col-span-6  gradient-bg p-4 text-center shadow-xl justify-center shadow-xl">
                        Testimonial
                    </div>
                </div>



            </div>



        </div>
    );
}

export default Design;
