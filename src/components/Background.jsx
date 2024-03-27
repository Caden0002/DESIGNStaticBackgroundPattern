// components/Background.jsx

import React from 'react';
import bgPattern from '/bgPattern.svg';  // Adjust the path to your SVG pattern

const Background = ({ children }) => (
    <div className="relative top-0 left-0 w-screen h-screen bg-backgroundColorPrimary overflow-y-scroll">
        {/* Background pattern */}
        <div className="fixed top-0 left-0 w-full h-full z-0 bg-cover" style={{ backgroundImage: `url(${bgPattern})` }}></div>

        {/* Content */}
        <div className="relative z-10">
            {children}
        </div>
    </div>
);

export default Background;
