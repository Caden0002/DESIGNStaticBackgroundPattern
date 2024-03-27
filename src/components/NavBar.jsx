import { motion } from 'framer-motion';

const background = "bg-backgroundColorSecondary bg-opacity-0";
const navigation = [
    { name: 'Home', href: '#Home' },
    { name: 'About', href: '#About' },
    { name: 'Design', href: '#Design' },
    { name: 'Price', href: '#Price' },
    { name: 'Contact', href: '#Contact' },


];

function NavBar(props) {
    return (
        <div className=''>
            {/* NavBar Background */}
            <div
                className={`absolute inset-x-0 top-0 z-50 ${background}`}
            >
                {/* Desktop NavBar */}
                <div className="flex items-center justify-center md:justify-center my-8 py-4 w-2/5 mx-auto max-w-screen-xl md:border md:border-textColorSecondary md:rounded-full md:bg-opacity-100">

                    {/* Second Element Desktop navigation links */}
                    <div className="flex text-textColorPrimary">
                        {navigation.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index === 0 || index === 4 ? 0 : index === 1 || index === 3 ? 0.2 : 0.4 }}
                                className={`text-sm md:text-regular font-regular relative after:bg-themePrimary after:absolute after:h-1 after:w-0 after:top-5 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer px-4 md:px-8 xl:px-12`}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
