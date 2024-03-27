import '../../styles.css';

// Define variables for content
const heading = 'Collaborate with brands and agencies\nto create impactful results.';
const factorContent = {
    factor1: {
        logo: "/1.svg",
        title: "UX & UI",
        description: "Designing interfaces that are intuitive, efficient, and enjoyable to use."
    },
    factor2: {
        logo: "/2.svg",
        title: "Web & Mobile App",
        description: "Transforming ideas into exceptional web and mobile app experiences."
    },
    factor3: {
        logo: "/3.svg",
        title: "Design & Creative",
        description: "Crafting visually stunning designs that connect with your audience."
    },
    factor4: {
        logo: "/4.svg",
        title: "Development",
        description: "Bringing your vision to life with the latest technology and design trends."
    },
};

function About() {
    return (
        //container for the section
        <div id="About" className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center md:min-h-screen py-20 px-10">
                {/* headline */}
                <h1 className="mb-16 text-4xl text-center gradient-text whitespace-pre-line leading-tight">
                    {heading}
                </h1>
            {/* grid */}
            <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-6 xl:gap-12 md:px-32">
                {Object.keys(factorContent).map((key) => {
                    const factor = factorContent[key];
                    return (
                        <div
                            key={key}
                            className="flex flex-col pt-12 md:pt-32 xl:pt-48 pb-10 px-6 pr-8 bg-backgroundColorSecondary border border-textColorSecondary shadow-xl	"
                        >
                            {/* SVG Logo */}
                            <img src={factor.logo} alt="Plan Logo" className=" mb-6 h-12 w-12" />
                            {/* Title */}
                            <h3 className="mb-4 text-xl font-light gradient-text2 ">{factor.title}</h3>
                            {/* Description */}
                            <p className="text-sm text-textColorTertiary">
                                {factor.description}
                            </p>
                        </div>
                    );
                })}
            </div>
    </div>
    );
}

export default About;
