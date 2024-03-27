import React from 'react';
import profilephoto from '/profilephoto.png';
import '../../styles.css';

const intro = 'Hi, I’m Caden ✌️\n';
const header =
    'Building digital\n' +
    'products, brands, and\n' +
    'experiences.\n';

function Hero(props) {
    return (
        // Container for the section
        <div className="container max-w-screen-xl mx-auto flex justify-center items-center md:min-h-screen py-20 px-10 relative z-10 ">
            <div className="lg:w-8/12 w-full text-center mt-36 md:mt-12">
                {/* Profile photo */}
                <img src={profilephoto} alt="Profile" className="rounded-full w-28 h-28 mx-auto mb-4" />

                {/* Your content here */}
                <p className="text-sm text-textColorPrimary">{intro}</p>
                <p className="mt-8 block text-6xl font-light leading-tight whitespace-pre-line gradient-text">{header}</p>
            </div>
        </div>
    );
}

export default Hero;
