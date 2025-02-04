
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from 'react-router-dom'


export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                staggerChildren: 0.2, 
            },
        },
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -5 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };

    return (
        <div className="w-full h-24 shadow-2xs flex justify-between">
            <img draggable={false} className="h-24 w-48 object-cover" src="https://media.istockphoto.com/id/1420172793/vector/connection-logo-business-global-technology-and-network.jpg?s=612x612&w=0&k=20&c=PSDmuJrOSV9k_GxXtvu8jKHLijvsCT9P9iTGXysPPY4=" alt="hero.png" />

            <div className="h-full items-center flex">
                <ul className="flex h-full items-center font-medium uppercase">
                    <div className="h-full flex items-center px-4 transition-colors duration-300 delay-300">
                        <li className="hover:text-[#06BBCC]">
                            Home
                        </li>
                    </div>
                    <div className="h-full flex items-center px-4">
                        <li className="hover:text-[#06BBCC]">
                            About
                        </li>
                    </div>
                    <div className="h-full flex items-center px-4">
                        <li className="hover:text-[#06BBCC]">
                            Courses
                        </li>
                    </div>
                    <div className="h-full flex items-center px-4 group relative" onMouseLeave={() => setIsOpen(false)} onMouseEnter={() => setIsOpen(true)}>
                        <li className="flex items-center gap-2">
                            <p className="hover:text-[#06BBCC]">Pages</p>

                            <svg class="size-6" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </li>

                        {isOpen && (
                            <motion.div
                                variants={dropdownVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="absolute left-0 mt-0 top-[100%] w-48 bg-white shadow-lg rounded-md"
                            >
                                <motion.ul className="py-2">
                                    <motion.li variants={linkVariants}>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                                            Our Team
                                        </a>
                                    </motion.li>
                                    <motion.li variants={linkVariants}>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                                            Testimonial
                                        </a>
                                    </motion.li>
                                    <motion.li variants={linkVariants}>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                                            404 Page
                                        </a>
                                    </motion.li>
                                </motion.ul>
                            </motion.div>
                        )}
                    </div>
                    <div className="h-full flex items-center px-4">
                        <li className="hover:text-[#06BBCC]">
                            Contact
                        </li>
                    </div>
                    <Link className="capitalize bg-[#06BBCC] h-full flex items-center px-12">
                        <li className="flex items-center gap-2">
                            <p className="no-underline">Join Now</p>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="2.5" stroke="currentColor" class="size-6" className="h-4 w-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>

                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}