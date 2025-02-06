
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'


export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const navigation = useNavigate();
    const location = useLocation();

    const navToLogin = useCallback(() => {
        navigation('/')
    }, [])


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
        <div className="w-full flex justify-between fixed top-0 left-0 z-50 bg-white shadow-xl">
            <div className="text-[#06BBCC] px-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6" className="h-8 w-8 mr-2">
                    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                </svg>

                <span className="font-semibold text-3xl">eLEARNING</span>
            </div>

            <div className="items-center flex">
                <ul className="flex p-0 m-0 items-center font-medium uppercase">
                    <div className={`flex h-full items-center px-4 hover:text-[#06BBCC] transition py-4 duration-300 delay-300 ${location.pathname === '/home' && 'text-[#06BBCC]'}`}>
                        <li className="text-sm">
                            Home
                        </li>
                    </div>
                    <div className="h-full flex py-4 items-center px-4 text-sm hover:text-[#06BBCC] transition">
                        <li className="">
                            About
                        </li>
                    </div>
                    <div className="hover:text-[#06BBCC] transition py-4 flex items-center px-4 text-sm">
                        <li className="text-sm">Courses</li>
                    </div>
                    <div className="h-full flex  py-4 items-center px-4 group relative" onMouseLeave={() => setIsOpen(false)} onMouseEnter={() => setIsOpen(true)}>
                        <li className="flex h-full items-center gap-2 m-0 p-0">
                            <p className="hover:text-[#06BBCC] mb-0 text-sm">Pages</p>

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
                                className="absolute left-0 mt-0 top-[100%] flex items-center justify-start z-10  bg-white shadow-lg "
                            >
                                <motion.ul className="py-2 m-0 p-0 cursor-pointer">
                                    <motion.li variants={linkVariants}>
                                        <li className="block px-4 no-underline text-black py-2 hover:bg-gray-200">
                                            Our Team
                                        </li>
                                    </motion.li>
                                    <motion.li variants={linkVariants}>
                                        <li className="block px-4 py-2 hover:bg-gray-200">
                                            Testimonial
                                        </li>
                                    </motion.li>
                                    <motion.li variants={linkVariants}>
                                        <li className="block px-4 py-2 hover:bg-gray-200">
                                            404 Page
                                        </li>
                                    </motion.li>
                                </motion.ul>
                            </motion.div>
                        )}
                    </div>
                    <div className="flex py-4 items-center px-4 hover:text-[#06BBCC] transition">
                        <li className="text-sm">
                            Contact
                        </li>
                    </div>

                    <div
                        onClick={navToLogin}
                        className="capitalize bg-[#06BBCC] text-white cursor-pointer h-full flex py-4 items-center gap-2 justify-center px-12 no-underline"
                    >
                        <span className="no-underline text-sm">Join Now</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 22 22"
                            strokeWidth="1.5"
                            stroke="white"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </div>

                </ul>
            </div>
        </div>
    )
}