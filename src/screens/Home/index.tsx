import { useNavigate } from "react-router-dom";
import { useCallback, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";

import CarouselOne from '@assets/carousel-1.jpg'
import AboutImg from '@assets/about.jpg'
import CarouselTwo from '@assets/carousel-2.jpg'
import GridOne from '@assets/cat-1.jpg'
import GridTwo from '@assets/cat-2.jpg'
import GridThree from '@assets/cat-3.jpg'
import GridFour from '@assets/cat-4.jpg'
import CourseOne from '@assets/course-1.jpg'
import CourseTwo from '@assets/course-2.jpg'
import CourseThree from '@assets/course-3.jpg'
import InstructorOne from '@assets/team-1.jpg'
import InstructorTwo from '@assets/team-2.jpg'
import InstructorThree from '@assets/team-3.jpg'
import InstructorFour from '@assets/team-4.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css";


import data from '@/data/home.json'



export default function Home() {


    const navigation = useNavigate();


    const [activeIndex, setActiveIndex] = useState(0);
    const [readMore, setReadMore] = useState(false)

    const carouselRef = useRef<any>(null);
    const studentsRef = useRef<any>(null);



    const navToLogin = useCallback(() => {
        navigation('/login')
    }, [])


    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.onClickNext();
        }
    };

    const handleOnChange = useCallback((index: number, change = false) => {

        return
        console.log(index)
        if (change) studentsRef.current.moveTo(index)
    }, []);

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.onClickPrev();
        }
    };

    const CourseItems = [CourseOne, CourseTwo, CourseThree]

    const InstructorItems = [InstructorOne, InstructorTwo, InstructorThree, InstructorFour]

    const cardItems = [{
        title: 'Skilled Instructors',
        icon:
            <svg
                width="60px"
                height="50px"
                viewBox="0 0 20 20"
                fill="#44CCD9"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#06BBCC] transition-colors duration-300 group-hover:fill-[#fff]"
            >
                <path d="M4 14.5V11.165L8.00843 13.4663C9.24174 14.1743 10.7583 14.1743 11.9916 13.4663L16 11.165V14.5C16 14.6326 15.9473 14.7598 15.8536 14.8536L15.852 14.8551L15.8496 14.8574L15.8428 14.8642L15.8201 14.8859C15.801 14.9039 15.7741 14.9288 15.7394 14.9596C15.6701 15.0213 15.5696 15.1067 15.4389 15.2079C15.1777 15.41 14.7948 15.6761 14.2978 15.9412C13.3033 16.4716 11.8479 17 10 17C8.15211 17 6.69675 16.4716 5.70221 15.9412C5.20518 15.6761 4.82226 15.41 4.5611 15.2079C4.43043 15.1067 4.32994 15.0213 4.26059 14.9596C4.22591 14.9288 4.19898 14.9039 4.17992 14.8859L4.15724 14.8642C4.05938 14.7684 4 14.6378 4 14.5Z" />
                <path d="M18.7489 8.43369L11.4937 12.599C10.5687 13.1301 9.4313 13.1301 8.50632 12.599L2 8.86367L2 13.5C2 13.7761 1.77614 14 1.5 14C1.22386 14 1 13.7761 1 13.5V8.00008C1 7.81007 1.10598 7.64474 1.26206 7.56014L8.5063 3.40104C8.85317 3.20189 9.22992 3.07743 9.61413 3.02764C9.73586 3.01187 9.85834 3.00359 9.98086 3.00281C10.3739 3.0003 10.7674 3.07496 11.1377 3.22679C11.2591 3.27658 11.3781 3.33466 11.4937 3.40104L18.749 7.56646C18.9042 7.65561 19 7.82101 19 8.00008C19 8.17914 18.9042 8.34454 18.7489 8.43369Z" />
            </svg>
    }, {
        title: 'Online Classes',
        icon:
            <svg fill="#000000" width="60px" height="50px"
                className="fill-[#06BBCC] transition-colors duration-300 group-hover:fill-[#fff]"
                viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.032 16c0-8.501-6.677-15.472-15.072-15.969-0.173-0.019-0.346-0.032-0.523-0.032-0.052 0-0.104 0.005-0.156 0.007-0.093-0.002-0.186-0.007-0.281-0.007-8.84 0-16.032 7.178-16.032 16.001s7.192 16.001 16.032 16.001c0.094 0 0.188-0.006 0.281-0.008 0.052 0.002 0.104 0.008 0.156 0.008 0.176 0 0.349-0.012 0.523-0.032 8.395-0.497 15.072-7.468 15.072-15.969zM29.049 21.151c-0.551-0.16-1.935-0.507-4.377-0.794 0.202-1.381 0.313-2.84 0.313-4.357 0-1.196-0.069-2.354-0.197-3.469 3.094-0.37 4.45-0.835 4.54-0.867l-0.372-1.050c0.695 1.659 1.080 3.478 1.080 5.386 0 1.818-0.352 3.555-0.987 5.151zM8.921 16c0-1.119 0.074-2.212 0.21-3.263 1.621 0.127 3.561 0.222 5.839 0.243v6.939c-2.219 0.021-4.114 0.111-5.709 0.234-0.22-1.319-0.34-2.715-0.34-4.154zM16.967 2.132c2.452 0.711 4.552 4.115 5.492 8.628-1.512 0.12-3.332 0.209-5.492 0.229v-8.857zM14.971 2.156v8.832c-2.136-0.021-3.965-0.109-5.502-0.226 0.96-4.457 3.076-7.836 5.502-8.606zM14.971 21.913l0 7.929c-2.263-0.718-4.256-3.705-5.293-7.719 1.492-0.11 3.253-0.189 5.292-0.21zM16.967 29.868l-0-7.955c2.061 0.020 3.814 0.102 5.288 0.217-1.019 4.067-3 7.076-5.288 7.738zM16.967 19.92l0-6.939c2.291-0.021 4.218-0.118 5.818-0.25 0.131 1.053 0.203 2.147 0.203 3.268 0 1.442-0.116 2.84-0.329 4.16-1.575-0.128-3.462-0.219-5.692-0.24zM28.588 9.81c-0.302 0.094-1.564 0.453-4.094 0.751-0.564-2.998-1.584-5.561-2.91-7.412 3.048 1.325 5.535 3.697 7.005 6.661zM11.213 2.831c-1.632 1.873-2.963 4.568-3.691 7.754-2.265-0.245-3.623-0.534-4.166-0.665 1.585-3.27 4.407-5.836 7.856-7.088zM2.614 11.787c0.385 0.104 1.841 0.467 4.549 0.766-0.155 1.107-0.24 2.26-0.24 3.447 0 1.509 0.136 2.96 0.383 4.334-2.325 0.251-3.755 0.552-4.396 0.706-0.607-1.566-0.944-3.264-0.944-5.041 0-1.467 0.228-2.883 0.649-4.213zM3.784 22.886c0.727-0.154 2.029-0.39 3.956-0.591 0.759 2.803 1.993 5.175 3.473 6.874-3.16-1.148-5.79-3.398-7.429-6.282v0zM21.583 28.849c1.195-1.665 2.14-3.907 2.728-6.525 1.982 0.227 3.226 0.494 3.853 0.652-1.5 2.596-3.808 4.669-6.581 5.873z"></path>
            </svg>
    }, {
        title: 'Home Projects',
        icon:
            <svg
                className="fill-[#06BBCC] transition-colors duration-300 group-hover:fill-[#fff]"
                width="60px" height="50px" viewBox="-4.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>home</title>
                <path d="M19.469 12.594l3.625 3.313c0.438 0.406 0.313 0.719-0.281 0.719h-2.719v8.656c0 0.594-0.5 1.125-1.094 1.125h-4.719v-6.063c0-0.594-0.531-1.125-1.125-1.125h-2.969c-0.594 0-1.125 0.531-1.125 1.125v6.063h-4.719c-0.594 0-1.125-0.531-1.125-1.125v-8.656h-2.688c-0.594 0-0.719-0.313-0.281-0.719l10.594-9.625c0.438-0.406 1.188-0.406 1.656 0l2.406 2.156v-1.719c0-0.594 0.531-1.125 1.125-1.125h2.344c0.594 0 1.094 0.531 1.094 1.125v5.875z"></path>
            </svg>
    }, {
        title: 'Boook Library',
        icon:
            <svg
                width="60px"
                height="50px"
                className="fill-[#06BBCC] transition-colors duration-300 group-hover:fill-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10.063 21.7917C10.3894 22.1483 11 21.9534 11 21.4699V4C10 3 8.91255 2.57151 7.78361 2.32246C5.78311 1.88113 4.0024 1.97693 2.91265 2.11876C1.70543 2.27587 1 3.34931 1 4.40561V17.5662C1 18.9895 2.18834 20.1115 3.56807 20.066C4.71011 20.0284 6.2952 20.0688 7.73105 20.4158C8.82596 20.6803 9.52237 21.2009 10.063 21.7917Z"
                />
                <path
                    d="M13.937 21.7917C13.6106 22.1483 13 21.9534 13 21.4699V4C14 3 15.0874 2.57151 16.2164 2.32246C18.2169 1.88113 19.9976 1.97693 21.0873 2.11876C22.2946 2.27587 23 3.34931 23 4.40561V17.5662C23 18.9895 21.8117 20.1115 20.4319 20.066C19.2899 20.0284 17.7048 20.0688 16.269 20.4158C15.174 20.6803 14.4776 21.2009 13.937 21.7917Z"
                />
            </svg>

    }]


    return (
        <div>
            <div className="h-screen flex items-center justify-center bg-gray-800">
                <Carousel
                    ref={carouselRef}
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    infiniteLoop={true}
                    emulateTouch={true}
                    showArrows={false}
                    swipeable={true}
                    // onChange={handleOnChange}
                    stopOnHover={true}
                    dynamicHeight={true}
                    interval={2500}
                    autoPlay
                    transitionTime={500}
                    className="w-full bg-gray-800"
                >
                    {
                        data?.map((item, i) => {
                            console.log({ item });


                            return (
                                <div className={`h-[100vh] w-full`} id="animated-div">
                                    <img src={i == 0 ? CarouselOne : CarouselTwo} className="h-full object-cover" alt="Slide 1" />

                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col mx-auto justify-center">
                                        <div className="flex pl-[10%] w-5/8 justify-between">
                                            <div className="flex-3 flex flex-col items-start">
                                                <p className={`font-semibold text-[#06BBCC] uppercase text-xl mb-2 p-0`}>{item?.headline}</p>

                                                {item?.sub_headline && <p className={`m-0 p-0 text-gray-200 text-lg mb-2 uppercase font-bold`}>{item?.sub_headline}</p>}

                                                <span className="text-start text-white font-semibold text-lg">
                                                    {item?.sub_content}
                                                </span>

                                                <div className="flex gap-3 mt-4">
                                                    <button className="py-3 px-8 text-[9px] bg-[#06BBCC] font-bold text-white">
                                                        Read more
                                                    </button>
                                                    <button onClick={navToLogin} className="py-3 px-8 text-[9px] bg-[#fff] font-bold">
                                                        Join now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </Carousel>

                <div className="absolute top-[59%] right-[12%] flex flex-col z-30 items-end justify-center">
                    <button onClick={handlePrev} className="p-2 border-2 border-gray-200 text-gray-200 hover:bg-[#06BBCC] transition hover:border-[#06BBCC] mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <button onClick={handleNext} className="p-2 border-2 border-gray-200 hover:bg-[#06BBCC] transition hover:border-[#06BBCC] text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="w-full max-w-[1229px] mx-auto flex gap-4 px-16 py-16">
                {
                    cardItems.map(({ title, icon }) => (
                        <Card title={title} icon={icon} />
                    ))
                }
            </div>

            {/* About us */}
            <div className="w-full flex px-16 max-w-[1229px] mx-auto py-16 gap-6">
                <div className="flex-1">
                    <img src={AboutImg} alt="image.png" className="h-full max-h-100 w-100 object-cover" />
                </div>

                <div className="flex-1">
                    <div className="flex items-center gap-2 justify-start">
                        <p className="font-semibold text-[#06BBCC] uppercase mb-1">ABOUT US</p>

                        <div>
                            <div className="w-8 h-[2px] bg-[#06BBCC] mb-1" />
                            <div className="w-12 h-[2px] bg-[#06BBCC]" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-3">Welcome to VirtualTech</h2>

                    <p className="text-md text-gray-500 line-clamp-2">Welcome to VirtualTech Academy, the ultimate online learning platform where passionate mentors teach and earn, while students and professionals gain in-demand tech skills at an affordable price.</p>
                    <p className="text-md text-gray-500 line-clamp-3">We specialize in Artificial Intelligence, Cloud Technologies, Cybersecurity, and more, connecting learners with industry experts who bring real-world insights into every session. Our goal is to make quality tech education accessible, flexible, and budget-friendly, so you can learn anytime, anywhere without breaking the bank.</p>

                    <div className="grid grid-cols-2 grid-rows-3 list-none gap-2">
                        <li className="flex items-center gap-2">
                            <svg width="20px" fill="#06BBCC" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" fill="#06BBCC" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" />
                            </svg>

                            <span className="text-sm text-gray-500">Skilled Instructors</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <svg width="20px" fill="#06BBCC" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" fill="#06BBCC" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" />
                            </svg>

                            <span className="text-sm text-gray-500">Online Classes</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <svg width="20px" fill="#06BBCC" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" fill="#06BBCC" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" />
                            </svg>

                            <span className="text-sm text-gray-500">International Certificate</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <svg width="20px" fill="#06BBCC" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" fill="#06BBCC" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" />
                            </svg>

                            <span className="text-sm text-gray-500">Skilled Instructors</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <svg width="20px" fill="#06BBCC" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" fill="#06BBCC" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" />
                            </svg>

                            <span className="text-sm text-gray-500">Skilled Instructors</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <svg width="20px" fill="#06BBCC" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" fill="#06BBCC" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" />
                            </svg>

                            <span className="text-sm text-gray-500">Skilled Instructors</span>
                        </li>
                    </div>

                    <button className="py-3 px-8 text-[9px] bg-[#06BBCC] font-bold mt-4 text-white">
                        Read more
                    </button>
                </div>
            </div>

            <div className="w-full flex flex-col max-w-[1229px] mx-auto px-16 py-16">
                <div className="flex justify-center items-center gap-2">
                    <div>
                        <div className="w-8 h-[2px] bg-[#06BBCC] mb-1 ml-auto" />
                        <div className="w-12 h-[2px] bg-[#06BBCC]" />
                    </div>
                    <p className="font-semibold text-[#06BBCC]  uppercase mb-0">CATEGORIES</p>
                    <div>
                        <div className="w-8 h-[2px] bg-[#06BBCC] mb-1" />
                        <div className="w-12 h-[2px] bg-[#06BBCC]" />
                    </div>
                </div>
                <h2 className="text-center mb-5">Courses Categories</h2>

                <div className="grid grid-cols-7 grid-rows-2 gap-2 h-[500px]">
                    <div className="relative group col-span-4 h-full overflow-hidden cursor-pointer">
                        <img src={GridOne} alt="image.png" className="w-full h-full transition-transform duration-300  group-hover:scale-110 object-cover" />
                        <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-300"></div>
                        <div className="bg-white absolute flex flex-col items-center z-10 bottom-[1px] right-[1px] py-2 px-4">
                            <p className="mb-0 font-semibold">Web Design</p>
                            <span className="text-sm text-center text-[#72DAEB]">49 course</span>
                        </div>
                    </div>

                    <div className="relative group col-span-3 row-span-2 h-full overflow-hidden cursor-pointer">
                        <img src={GridFour} alt="image.png" className="w-full h-full transition-transform duration-300  group-hover:scale-110 object-cover" />
                        <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-300"></div>
                        <div className="bg-white absolute flex flex-col items-center z-10 bottom-[1px] right-[1px] py-2 px-4">
                            <p className="mb-0 font-semibold">Online Marketing</p>
                            <span className="text-sm text-center text-[#72DAEB]">49 course</span>
                        </div>
                    </div>

                    <div className="relative group col-span-2 h-full overflow-hidden cursor-pointer">
                        <img src={GridThree} alt="image.png" className="w-full h-full transition-transform duration-300  group-hover:scale-110 object-cover" />
                        <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-300"></div>
                        <div className="bg-white absolute flex flex-col items-center z-10 bottom-[1px] right-[1px] py-2 px-4">
                            <p className="mb-0 font-semibold">Video Editing</p>
                            <span className="text-sm text-center text-[#72DAEB]">49 course</span>
                        </div>
                    </div>

                    <div className="relative group col-span-2 h-full overflow-hidden cursor-pointer">
                        <img src={GridTwo} alt="image.png" className="w-full h-full transition-transform duration-300  group-hover:scale-110 object-cover" />
                        <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-300"></div>
                        <div className="bg-white bottom-[1px] right-[1px] absolute flex flex-col items-center z-10 py-2 px-4">
                            <p className="mb-0 font-semibold">Graphic Design</p>
                            <span className="text-sm text-center text-[#72DAEB]">49 course</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full flex flex-col max-w-[1229px] mx-auto px-16 py-16">
                <div className="flex justify-center items-center gap-2">
                    <div>
                        <div className="w-8 h-[2px] bg-[#06BBCC] mb-1 ml-auto" />
                        <div className="w-12 h-[2px] bg-[#06BBCC]" />
                    </div>
                    <p className="font-semibold text-[#06BBCC]  uppercase mb-0">COURSES</p>
                    <div>
                        <div className="w-8 h-[2px] bg-[#06BBCC] mb-1" />
                        <div className="w-12 h-[2px] bg-[#06BBCC]" />
                    </div>
                </div>
                <h2 className="text-center mb-5">Popular Courses</h2>

                <div className="flex gap-3">
                    {
                        CourseItems.map((img) => (
                            <CourseCard img={img} />
                        ))
                    }
                </div>

            </div>

            <div className="w-full flex flex-col max-w-[1229px] mx-auto px-16 py-16">
                <div className="flex justify-center items-center gap-2">
                    <div>
                        <div className="w-8 h-[2px] bg-[#06BBCC] mb-1 ml-auto" />
                        <div className="w-12 h-[2px] bg-[#06BBCC]" />
                    </div>
                    <p className="font-semibold text-[#06BBCC]  uppercase mb-0">Instructors</p>
                    <div>
                        <div className="w-8 h-[2px] bg-[#06BBCC] mb-1" />
                        <div className="w-12 h-[2px] bg-[#06BBCC]" />
                    </div>
                </div>
                <h2 className="text-center mb-5">Expert Instructors</h2>

                <div className="flex gap-3">
                    {
                        InstructorItems.map((img) => (
                            <InstructorCard img={img} />
                        ))
                    }
                </div>

            </div>

            {/* say */}
            <div className="w-full flex flex-col max-w-[1229px] mx-auto px-16 py-16">
                <div className="flex justify-center items-center gap-2">
                    <div>
                        <div className="w-8 h-[2px] bg-[#06BBCC] mb-1 ml-auto" />
                        <div className="w-12 h-[2px] bg-[#06BBCC]" />
                    </div>
                    <p className="font-semibold text-[#06BBCC]  uppercase mb-0">Testimonials</p>
                    <div>
                        <div className="w-8 h-[2px] bg-[#06BBCC] mb-1" />
                        <div className="w-12 h-[2px] bg-[#06BBCC]" />
                    </div>
                </div>
                <h2 className="text-center mb-5">Our Students Say!</h2>

                <div className="relative w-11/12 mx-auto">
                    <div className="relative">
                        <Carousel
                            showThumbs={false}
                            showStatus={false}
                            showIndicators={false}
                            infiniteLoop
                            centerMode={true}
                            ref={studentsRef}
                            interval={1500}
                            onChange={handleOnChange}
                            autoPlay
                            showArrows={false}
                            centerSlidePercentage={33.33}
                            dynamicHeight={false}
                            emulateTouch={true}
                        >
                            {
                                Array.from('123', (_, i) => (
                                    <div className="relative bg-white rounded-lg shadow-lg ml-4">
                                        <div className="flex flex-col justify-center items-center overflow-hidden">
                                            <img src={CarouselOne} alt="image.png" className="h-16 max-w-16 object-cover rounded-full" />
                                            <h1>{i === 0 ? 'nazim' : i === 1 ? 'Shazam' : 'Noma'}</h1>
                                            <p>Profession</p>
                                            <div className={`${i === activeIndex ? 'bg-[#32a8a2] text-[#fff]' : 'bg-white text-[#000]'} py-2 px-2`}>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ab facilis eos! Soluta corrupti inventore quos dolorum quam nemo praesentium voluptas aliquam, fugiat,</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Carousel>

                        {/* Custom Pagination Dots */}
                        <div className="flex justify-center mt-4">
                            {[0, 1, 2].map((index) => (
                                <div
                                    key={index}
                                    onClick={() => handleOnChange(index, true)}
                                    className={`w-4 h-4 mx-2 cursor-pointer transition-all duration-300 ${activeIndex === index ? 'bg-[#32a8a2]' : 'bg-white border-[1px] border-gray-500'}`}
                                ></div>
                            ))}
                        </div>

                        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
                        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
                    </div>


                </div>

            </div>

        </div>
    )
}


const Card = ({ icon, title }) => (
    <div className="w-1/4 py-12 px-4 cursor-pointer hover:-translate-y-3 bg-[#F0FBFC] hover:bg-[#44CCD9] flex flex-col group items-center text-center transition-all duration-500">
        {icon}
        <span className="text-lg font-bold group-hover:text-white mt-3">{title}</span>
        <p className="text-md font-normal my-2 text-[rgb(91,86,111)] group-hover:text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat deserunt sequi nihil.</p>
    </div>
)

const CourseCard = ({ img }) => (
    <div className="bg-[#F0FBFC] h-auto w-1/3">
        <div className="h-1/2 group overflow-hidden relative">
            <div className="flex rounded-2xl overflow-hidden bg-[#44CCD9]  absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20">
                <div className="border-r-[1px] border-r-white flex justify-center items-center cursor-pointer">
                    <span className="text-center whitespace-nowrap py-1 px-3 font-normal text-white text-md ">
                        Read More
                    </span>
                </div>

                <div className="p-1 px-8 whitespace-nowrap cursor-pointer">
                    <p className="mb-0 pb-0 text-center text-white font-normal text-md pr-4 pl-2">Join Now</p>
                </div>
            </div>
            <img src={img} className="h-full w-full group-hover:scale-110 transition-transform duration-300 object-fill" alt="image.png" />
        </div>


        <div className="p-2 h-1/2 flex flex-col justify-between">
            <h3 className="text-center text-lg">$159.00</h3>
            <div className="flex justify-center items-center my-2">
                {
                    Array(5).fill(null)?.map(() => (
                        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="#06BBCC" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" />
                        </svg>
                    ))
                }

                <span className="text-sm ml-1 text-gray-500"> (120)</span>
            </div>

            <p className="font-bold text-center">Web Design & Development Couse for Beginners</p>

            <div className="flex justify-between border-t-1 border-t-gray-200 mt-auto">
                <div className="flex gap-1 items-center border-r-1 w-1/3 border-r-gray-200 justify-center py-1">
                    <svg fill="#44CCD9" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="15px" height="15px" viewBox="0 0 45.985 45.985"
                        xml:space="preserve">
                        <g>
                            <g>
                                <path d="M33.376,12.586c-0.137-3.598-0.918-5.976-2.092-7.6h0.002c-0.821-1.288-2.597-2.66-3.688-3.327
			c-7.179-4.38-11.069,1.221-11.517,1.918c-0.66,0.236-4.769,2.044-3.58,8.438c-0.013,0.212-0.023,0.429-0.032,0.65
			c-0.873,0.404-1.527,1.341-1.353,3.462c0.186,2.249,1.316,3.262,2.543,3.524c1.737,4.256,5.184,7.77,9.264,7.77
			c4.068,0,7.509-3.496,9.251-7.738c1.291-0.204,2.519-1.204,2.711-3.555C35.071,13.881,34.325,12.949,33.376,12.586z
			 M22.925,25.442c-4.23,0-7.719-5.164-8.382-10.05c0.316-1.76,1.292-5.547,4.093-8.339c2.153,2.327,6.092,5.005,12.723,4.777
			c0.04,0.598,0.061,1.241,0.061,1.931C31.419,19.052,27.63,25.442,22.925,25.442z"/>
                                <path d="M22.637,15.717c0-0.134-0.009-0.258-0.025-0.37h0.781c-0.016,0.112-0.024,0.236-0.024,0.37
			c0,2.107,2.091,2.104,3.097,2.104c1.005,0,3.097-0.003,3.097-2.11S27.471,13.6,26.466,13.6c-0.71,0-1.959,0.011-2.634,0.739
			h-1.659c-0.674-0.728-1.924-0.739-2.633-0.739c-1.006,0-3.097,0.002-3.097,2.109s2.091,2.107,3.097,2.107
			C20.544,17.818,22.637,17.825,22.637,15.717z M26.465,14.593c1.792,0,2.106,0.361,2.106,1.118c0,0.757-0.315,1.118-2.106,1.118
			c-1.792,0-2.106-0.36-2.106-1.118C24.358,14.953,24.673,14.593,26.465,14.593z M17.432,15.712c0-0.757,0.315-1.118,2.107-1.118
			s2.107,0.361,2.107,1.118c0,0.757-0.316,1.118-2.107,1.118C17.748,16.829,17.432,16.469,17.432,15.712z"/>
                                <path d="M32.089,27.072l-1.199-0.297l-7.941,18.063L15.011,26.78l-1.154,0.293c-4.714,1.181-8.004,5.415-8.004,10.275v6.38
			c0,1.255,0.984,2.257,2.241,2.257h29.717c1.257,0,2.322-1.002,2.322-2.258v-6.38C40.132,32.487,36.803,28.253,32.089,27.072z
			 M28.633,39.545l2.235-2.417c0.527-0.573,1.433-0.579,1.959-0.007l2.236,2.424H28.633z"/>
                                <path d="M23.028,41.534L25.68,34.8l-1.229-1.23c0.776-0.099,1.32-0.857,1.131-1.645l-0.545-2.269
			c-0.146-0.604-0.685-1.035-1.305-1.035h-1.458c-0.621,0-1.16,0.432-1.306,1.035l-0.544,2.266
			c-0.189,0.787,0.354,1.547,1.131,1.646l-1.23,1.231L23.028,41.534z"/>
                            </g>
                        </g>
                    </svg>

                    <span className="text-xs">Jhon Doe</span>
                </div>
                <div className="flex gap-1 items-center border-r-1 w-1/3 border-r-gray-200 h-full justify-center py-1">
                    <svg width="12px" height="12px" viewBox="0 0 16 16" fill="#44CCD9" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7 3V8.41421L10.2929 11.7071L11.7071 10.2929L9 7.58579V3H7Z" />
                    </svg>

                    <span className="text-xs">1.5 Hrs</span>
                </div>
                <div className="flex gap-1 items-center w-1/3  h-full justify-center py-1">
                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="#44CCD9" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="6" r="4" />
                        <path d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z" />
                    </svg>

                    <span className="text-xs">30 students</span>
                </div>
            </div>
        </div>
    </div>
)

const InstructorCard = ({ img }) => (
    <div className="bg-[#F0FBFC] h-96 w-1/4 group">
        <div className="h-2/3 overflow-hidden relative">
            <img src={img} className="h-full w-full group-hover:scale-110 transition-transform duration-300 object-fill" alt="image.png" />
        </div>

        <div className="p-2 h-1/2 relative z-0">
            <div className="flex overflow-hidden bg-[#F0FBFC] gap-2 p-2 -top-5 absolute left-1/2 transform -translate-x-1/2">
                <div className="bg-[#44CCD9] flex p-2 justify-center items-center cursor-pointer">
                    <svg fill="#fff" width="18px" height="18px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1168.737 487.897c44.672-41.401 113.824-36.889 118.9-36.663l289.354-.113 6.317-417.504L1539.65 22.9C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l62.045-451.233H1126.66v-69.152c0-54.937 14.214-96.112 42.078-122.058" fill-rule="evenodd" />
                    </svg>
                </div>
                <div className="bg-[#44CCD9] flex p-2 justify-center items-center cursor-pointer">
                    <svg fill="#fff" width="18px" height="18px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1920 311.856c-70.701 33.769-146.598 56.47-226.221 66.86 81.317-52.517 143.774-135.529 173.252-234.691-76.236 48.678-160.716 84.028-250.391 103.002-71.718-82.56-174.268-134.06-287.435-134.06-217.75 0-394.165 189.966-394.165 424.206 0 33.318 3.614 65.619 10.165 96.678C617.9 616.119 327.304 447.385 133.045 190.67c-33.77 62.57-53.309 135.53-53.309 213.233 0 147.162 91.031 276.818 196.744 353.054-64.602-2.26-157.101-21.46-157.101-53.309v5.648c0 205.327 114.41 376.658 294.55 415.849-32.978 9.487-78.38 14.795-114.409 14.795-25.412 0-55.454-2.71-79.624-7.793 50.26 168.509 193.13 291.163 365.478 294.777-134.852 113.506-306.07 181.383-490.616 181.383-31.85 0-64.038-2.033-94.758-5.873 174.494 120.17 381.176 190.532 603.67 190.532 724.97 0 1121.055-646.136 1121.055-1206.55 0-18.41-.452-36.932-1.356-55.116 77.026-59.746 143.887-134.4 196.631-219.444" fill-rule="evenodd" />
                    </svg>
                </div>
                <div className="bg-[#44CCD9] flex p-2 justify-center items-center cursor-pointer">
                    <svg width="18px" height="18px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#fff" stroke-width="12" d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z" /><circle cx="96" cy="96" r="30" stroke="#fff" stroke-width="12" /><circle cx="135" cy="57" r="9" fill="#fff" /></svg>
                </div>
            </div>
            <div className="flex items-center flex-col mt-2">
                <p className="font-medium text-xl text-[#18315C] p-0 m-0 mt-4">Instructor Name</p>
                <p className="text-md text-[#526074] p-0 m-0">Designation</p>
            </div>
        </div>
    </div>

)