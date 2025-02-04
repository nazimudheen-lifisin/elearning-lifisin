import Header from "../layouts/Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselOne from '../assets/carousel-1.jpg'
import CarouselTwo from '../assets/carousel-2.jpg'

export default function Home() {
    return (
        <div>
            <Header />
            <div className="h-screen w-full flex items-center justify-center bg-gray-800"> {/* Full height */}
                <Carousel
                    showThumbs={false}
                    infiniteLoop
                    showStatus={false}
                    // autoPlay
                    // interval={3000}
                    className="w-full bg-gray-800" // Adjust max width as needed
                >
                    <div className="h-[100vh] w-full">
                        <img src={CarouselOne} className="h-full object-cover" alt="Slide 1" />

                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex flex-col mx-auto justify-center">
                            <div className="w-3/4 mx-auto flex justify-between">
                                <div className="flex-3 flex flex-col items-start">
                                    <p className="font-semibold text-4xl text-[#06BBCC]">Best online courses</p>
                                    <p className="text-white text-6xl font-bold">The best online learning</p>
                                    <p className="text-white text-6xl font-bold">Platform</p>

                                    <span className="text-start text-white text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ut doloribus laboriosam quidem similique, incidunt perspiciatis ducimus officia quaerat, esse est asperiores obcaecati minus dolore labore consectetur mollitia! Possimus, nihil!</span>
                                    <div className="flex mt-3 gap-2">
                                        <button className="py-2 px-6 bg-red-400">
                                            Readmore
                                        </button>
                                        <button className="py-2 px-6 bg-red-400">
                                            Join now
                                        </button>
                                    </div>
                                </div>

                                <div className="flex-1">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[100vh] w-full">
                        <img src={CarouselTwo} className="h-full object-cover" alt="Slide 2" />
                    </div>
                    <div className="h-[100vh] w-full">
                        <img src="https://via.placeholder.com/800x400/3357FF/fff?text=Image+3" className="h-full object-cover" alt="Slide 3" />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}