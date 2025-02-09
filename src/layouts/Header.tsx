
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../assets/image.jpeg'
import { navLinks, pagesDropdown } from "../config/routes";
import '../index.css'


export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const navigation = useNavigate();
    const location = useLocation();


    const navToLogin = useCallback(() => {
        navigation('/')
    }, [])

    const onMouseLeave = useCallback(() => {
        setIsOpen(false)
    }, [])

    const onMouseEnter = useCallback(() => {
        setIsOpen(true)
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
                <img src={Logo} className="w-16 h-16 object-fill rounded-md mr-5" alt="logo.png" />
                <span className="font-semibold text-3xl">VirtualTech</span>
            </div>

            <div className="items-center flex">
                <ul className="flex p-0 m-0 items-center font-medium uppercase">
                    {
                        navLinks?.map((link) => (
                            <NavLink to={link.path} key={link.path} className={`text-sm p-4 text-[#000] hover:text-[#06BBCC] transition no-underline`}>
                                <span className={`${location.pathname === link.path && 'link border-b-2 border-b-[#06BBCC]'}`}>{link.name}</span>
                            </NavLink>
                        ))
                    }
                    <div className="h-full flex  py-4 items-center px-4 group relative" onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
                        <li className="flex h-full items-center gap-2 m-0 p-0">
                            <p className="hover:text-[#06BBCC] mb-0 text-sm">Pages</p>

                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
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
                                    {
                                        pagesDropdown?.map(item => (
                                            <motion.li variants={linkVariants}>
                                                <NavLink to={item.path} className="block px-4 py-2 hover:bg-gray-200">
                                                    {item.name}
                                                </NavLink>
                                            </motion.li>
                                        ))
                                    }
                                </motion.ul>
                            </motion.div>
                        )}
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