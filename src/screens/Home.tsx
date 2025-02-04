import Header from "../layouts/Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselOne from '../assets/carousel-1.jpg'
import CarouselTwo from '../assets/carousel-2.jpg'
import { useNavigate } from "react-router-dom";
import { useCallback, useRef } from "react";

export default function Home() {

    const navigation = useNavigate();
    const carouselRef = useRef(null);

    const navToLogin = useCallback(() => {
        navigation('/login')
    }, [])

    const handleNext = () => {
        console.log(carouselRef.current)
        if (carouselRef.current) {
            carouselRef.current.onClickNext(); 
        }
    };

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.onClickPrev(); 
        }
    };

    return (
        <div>
            <Header />
            <div className="h-screen w-full flex items-center justify-center bg-gray-800">
                <Carousel
                    ref={carouselRef}
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    infiniteLoop={true}
                    emulateTouch={true}
                    showArrows={false}
                    swipeable={true}
                    stopOnHover={true}
                    dynamicHeight={true}
                    interval={2500}
                    autoPlay
                    transitionTime={500}
                    className="w-full bg-gray-800"
                >
                    {
                        ["the best online platform learning", 'get educated online from your home']?.map((item, i) => (
                            <div className="h-[100vh] w-full">
                                <img src={i == 0 ? CarouselOne : CarouselTwo} className="h-full object-cover" alt="Slide 1" />

                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col mx-auto justify-center">
                                    <div className="flex pl-[10%] w-5/8 justify-between">
                                        <div className="flex-3 flex flex-col items-start">
                                            <p className="font-semibold text-[#06BBCC] uppercase text-xl">Best online courses</p>
                                            <p className="text-white text-left text-5xl font-extrabold capitalize">{item}</p>

                                            <span className="text-start text-white font-semibold text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ut doloribus laboriosam quidem similique,</span>
                                            <div className="flex gap-3 mt-4">
                                                <button className="py-3 px-8 text-[9px] bg-[#06BBCC] font-bold">
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
                        ))
                    }

                </Carousel>

                <div className="absolute top-[59%] right-[12%] flex flex-col z-30 items-end justify-center">
                    <button onClick={handleNext} className="p-2 border-2 border-gray-200 text-gray-200 hover:bg-[#06BBCC] transition hover:border-[#06BBCC] mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <button onClick={handlePrev} className="p-2 border-2 border-gray-200 hover:bg-[#06BBCC] transition hover:border-[#06BBCC] text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}