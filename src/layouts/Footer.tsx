import CourseOne from '@/assets/course-1.jpg'
import CourseTwo from '@/assets/course-2.jpg'
import useWindowScroll from "@/hooks/useScroll"
import { Link } from 'react-router-dom'

function Footer() {
    const windowHeight = useWindowScroll()


    return (

        <>
            <footer className="bg-[#181D38] text-white py-8">
                <div className="max-w-[1229px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Quick Links Section */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Link</h3>
                        <ul className="space-y-2 p-0">
                            <li className="flex gap-2 items-center">
                                <svg width="16px" fill="#fff" height="16px" viewBox="-5.5 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="#fff" fill-rule="evenodd" sketch:type="MSPage">
                                        <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-474.000000, -1196.000000)" fill="#000000">
                                            <path d="M488.404,1207.36 L477.637,1197.6 C476.806,1196.76 475.459,1196.76 474.629,1197.6 C473.798,1198.43 473.798,1199.77 474.629,1200.6 L483.885,1209 L474.629,1217.4 C473.798,1218.23 473.798,1219.57 474.629,1220.4 C475.459,1221.24 476.806,1221.24 477.637,1220.4 L488.404,1210.64 C488.854,1210.19 489.052,1209.59 489.015,1209 C489.052,1208.41 488.854,1207.81 488.404,1207.36" id="chevron-right" fill="#fff" sketch:type="MSShapeGroup">

                                            </path>
                                        </g>
                                    </g>
                                </svg>

                                <span className="text-md">About Us</span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <svg width="16px" fill="#fff" height="16px" viewBox="-5.5 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="#fff" fill-rule="evenodd" sketch:type="MSPage">
                                        <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-474.000000, -1196.000000)" fill="#000000">
                                            <path d="M488.404,1207.36 L477.637,1197.6 C476.806,1196.76 475.459,1196.76 474.629,1197.6 C473.798,1198.43 473.798,1199.77 474.629,1200.6 L483.885,1209 L474.629,1217.4 C473.798,1218.23 473.798,1219.57 474.629,1220.4 C475.459,1221.24 476.806,1221.24 477.637,1220.4 L488.404,1210.64 C488.854,1210.19 489.052,1209.59 489.015,1209 C489.052,1208.41 488.854,1207.81 488.404,1207.36" id="chevron-right" fill="#fff" sketch:type="MSShapeGroup">

                                            </path>
                                        </g>
                                    </g>
                                </svg>

                                <span className="text-md">Contact Us</span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <svg width="16px" fill="#fff" height="16px" viewBox="-5.5 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="#fff" fill-rule="evenodd" sketch:type="MSPage">
                                        <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-474.000000, -1196.000000)" fill="#000000">
                                            <path d="M488.404,1207.36 L477.637,1197.6 C476.806,1196.76 475.459,1196.76 474.629,1197.6 C473.798,1198.43 473.798,1199.77 474.629,1200.6 L483.885,1209 L474.629,1217.4 C473.798,1218.23 473.798,1219.57 474.629,1220.4 C475.459,1221.24 476.806,1221.24 477.637,1220.4 L488.404,1210.64 C488.854,1210.19 489.052,1209.59 489.015,1209 C489.052,1208.41 488.854,1207.81 488.404,1207.36" id="chevron-right" fill="#fff" sketch:type="MSShapeGroup">

                                            </path>
                                        </g>
                                    </g>
                                </svg>

                                <span className="text-md">Privacy Policy</span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <svg width="16px" fill="#fff" height="16px" viewBox="-5.5 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="#fff" fill-rule="evenodd" sketch:type="MSPage">
                                        <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-474.000000, -1196.000000)" fill="#000000">
                                            <path d="M488.404,1207.36 L477.637,1197.6 C476.806,1196.76 475.459,1196.76 474.629,1197.6 C473.798,1198.43 473.798,1199.77 474.629,1200.6 L483.885,1209 L474.629,1217.4 C473.798,1218.23 473.798,1219.57 474.629,1220.4 C475.459,1221.24 476.806,1221.24 477.637,1220.4 L488.404,1210.64 C488.854,1210.19 489.052,1209.59 489.015,1209 C489.052,1208.41 488.854,1207.81 488.404,1207.36" id="chevron-right" fill="#fff" sketch:type="MSShapeGroup">

                                            </path>
                                        </g>
                                    </g>
                                </svg>

                                <span className="text-md">Terms & Condition</span>
                            </li>

                            <li className="flex gap-2 items-center">
                                <svg width="16px" fill="#fff" height="16px" viewBox="-5.5 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="#fff" fill-rule="evenodd" sketch:type="MSPage">
                                        <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-474.000000, -1196.000000)" fill="#000000">
                                            <path d="M488.404,1207.36 L477.637,1197.6 C476.806,1196.76 475.459,1196.76 474.629,1197.6 C473.798,1198.43 473.798,1199.77 474.629,1200.6 L483.885,1209 L474.629,1217.4 C473.798,1218.23 473.798,1219.57 474.629,1220.4 C475.459,1221.24 476.806,1221.24 477.637,1220.4 L488.404,1210.64 C488.854,1210.19 489.052,1209.59 489.015,1209 C489.052,1208.41 488.854,1207.81 488.404,1207.36" id="chevron-right" fill="#fff" sketch:type="MSShapeGroup">

                                            </path>
                                        </g>
                                    </g>
                                </svg>

                                <span className="text-md">FAQs & Help</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact</h3>
                        <ul className="space-y-4 m-0 p-0">
                            <li className="flex items-center gap-2 text-white">
                                <svg width="18px" fill="#fff" height="18px" viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="#fff" fill-rule="evenodd" sketch:type="MSPage">
                                        <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-106.000000, -413.000000)" fill="#fff">
                                            <path d="M118,422 C116.343,422 115,423.343 115,425 C115,426.657 116.343,428 118,428 C119.657,428 121,426.657 121,425 C121,423.343 119.657,422 118,422 L118,422 Z M118,430 C115.239,430 113,427.762 113,425 C113,422.238 115.239,420 118,420 C120.761,420 123,422.238 123,425 C123,427.762 120.761,430 118,430 L118,430 Z M118,413 C111.373,413 106,418.373 106,425 C106,430.018 116.005,445.011 118,445 C119.964,445.011 130,429.95 130,425 C130,418.373 124.627,413 118,413 L118,413 Z" id="location" sketch:type="MSShapeGroup">

                                            </path>
                                        </g>
                                    </g>
                                </svg>
                                <Link to={'https://www.google.com/maps?q=10.070111661724049, 76.33808979965589'} className='text-white'>Aryabhangi Buisness Center, Cochin Pin: 683104</Link>
                            </li>
                            <li className="flex items-center gap-2 text-white">
                                <svg width="22px" height="22px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" />
                                </svg>
                                <Link to={'tel:+919946785551'} className='text-white'>
                                    +91 9946785551
                                </Link>
                            </li>
                            <li className="flex items-center gap-2 text-white">
                                <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="style=fill">
                                        <g id="email">
                                            <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M7 2.75C5.38503 2.75 3.92465 3.15363 2.86466 4.1379C1.79462 5.13152 1.25 6.60705 1.25 8.5V15.5C1.25 17.393 1.79462 18.8685 2.86466 19.8621C3.92465 20.8464 5.38503 21.25 7 21.25H17C18.615 21.25 20.0754 20.8464 21.1353 19.8621C22.2054 18.8685 22.75 17.393 22.75 15.5V8.5C22.75 6.60705 22.2054 5.13152 21.1353 4.1379C20.0754 3.15363 18.615 2.75 17 2.75H7ZM19.2285 8.3623C19.5562 8.10904 19.6166 7.63802 19.3633 7.31026C19.1101 6.98249 18.6391 6.9221 18.3113 7.17537L12.7642 11.4616C12.3141 11.8095 11.6858 11.8095 11.2356 11.4616L5.6886 7.17537C5.36083 6.9221 4.88982 6.98249 4.63655 7.31026C4.38328 7.63802 4.44367 8.10904 4.77144 8.3623L10.3185 12.6486C11.3089 13.4138 12.691 13.4138 13.6814 12.6486L19.2285 8.3623Z" fill="#fff" />
                                        </g>
                                    </g>
                                </svg>
                                <Link to={'mailto:info@virtualtechacademy.com'} className='tracking-wide text-white'>
                                    info@virtualtechacademy.com
                                </Link>
                            </li>
                        </ul>

                        <div className="flex mt-3 gap-2">
                            <Link to={'https://www.facebook.com/share/1BDX4RjS76'} className="group relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-white transition-all duration-300 hover:bg-white">
                                <svg fill="#000000" className="fill-white group-hover:fill-[#06BBCC] grid place-content-center mr-2 transition-colors duration-300" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 24 24" xml:space="preserve">
                                    <path d="M19.8,5.4h-2c-1.3,0-1.4,0.4-1.4,1.4v1.9h3L19.3,12h-2.7v10H12V12h-1.7V8.6H12V6.4C12,3.6,13.1,2,16.4,2h3.4V5.4z" />
                                </svg>
                            </Link>

                            <div className="group relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-white transition-all duration-300 hover:bg-white">
                                <svg className="fill-white group-hover:fill-[#06BBCC] transition-colors duration-300" width="28px" height="28px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.919 24.94c-2.548 0-4.921-.747-6.919-2.032a9.049 9.049 0 0 0 6.681-1.867 4.512 4.512 0 0 1-4.215-3.137c.276.054.559.082.848.082.412 0 .812-.056 1.193-.156a4.519 4.519 0 0 1-3.622-4.425v-.059a4.478 4.478 0 0 0 2.042.564 4.507 4.507 0 0 1-2.008-3.758c0-.824.225-1.602.612-2.268a12.811 12.811 0 0 0 9.303 4.715 4.517 4.517 0 0 1 7.692-4.115 9.107 9.107 0 0 0 2.866-1.094 4.542 4.542 0 0 1-1.983 2.498 9.08 9.08 0 0 0 2.592-.71 9.283 9.283 0 0 1-2.252 2.337c.008.193.014.388.014.583-.001 5.962-4.542 12.843-12.844 12.842" />
                                </svg>
                            </div>

                            <Link to={'https://www.instagram.com/virtual_techacademy?igsh=ZWJubmF3eDMxcnJ4'} className="group relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-white transition-all duration-300 hover:bg-white">
                                <svg className="fill-white group-hover:fill-[#06BBCC] transition-colors duration-300" width="28px" height="28px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z" />
                                    <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z" />
                                </svg>
                            </Link>

                            <div className="group relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-white transition-all duration-300 hover:bg-white">
                                <svg className="fill-white group-hover:fill-[#06BBCC] transition-colors duration-300" height="24px" width="24px" viewBox="-271 311.2 256 179.8" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M-59.1,311.2h-167.8c0,0-44.1,0-44.1,44.1v91.5c0,0,0,44.1,44.1,44.1h167.8c0,0,44.1,0,44.1-44.1v-91.5
C-15,355.3-15,311.2-59.1,311.2z M-177.1,450.3v-98.5l83.8,49.3L-177.1,450.3z"/>
                                </svg>
                            </div>
                        </div>

                    </div>

                    {/* Gallery Section */}
                    <div>
                        {/* <h3 className="font-semibold text-lg mb-4">Gallery</h3> */}
                        <ul className="grid grid-cols-3 gap-2 p-0">
                            <li className="border-4 border-white">
                                <img src={CourseOne} className="h-full w-full object-cover" alt="image.png" />
                            </li>
                            <li className="border-4 border-white">
                                <img src={CourseTwo} className="h-full w-full object-cover" alt="image.png" />
                            </li>
                            <li className="border-4 border-white">
                                <img src={CourseTwo} className="h-full w-full object-cover" alt="image.png" />
                            </li>
                            <li className="border-4 border-white">
                                <img src={CourseOne} className="h-full w-full object-cover" alt="image.png" />
                            </li>
                            <li className="border-4 border-white">
                                <img src={CourseTwo} className="h-full w-full object-cover" alt="image.png" />
                            </li>
                            <li className="border-4 border-white">
                                <img src={CourseTwo} className="h-full w-full object-cover" alt="image.png" />
                            </li>

                        </ul>

                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
                        <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates</p>
                        <form>
                            <div className="flex items-center space-x-2 bg-white py-2 px-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="p-2 w-full rounded text-gray-500 bg-white outline-0"
                                />
                                <button
                                    className="p-2 bg-[#44CCD9] text-white hover:bg-[#33A6B0] whitespace-nowrap transition"
                                >
                                    Sign Up
                                </button>
                            </div>

                        </form>
                    </div>
                </div>

                <span className="block text-center text-xs">&copy; Lifisin Technologies, All right reservered</span>
            </footer>

            {
                windowHeight > (document.documentElement.scrollHeight / 3) && (
                    <div className="h-12 w-12 bg-[#33A6B0] flex items-center justify-center z-20 fixed bottom-8 right-8" onClick={() => document.documentElement.scrollTo({ top: 0, behavior: "smooth" })}>
                        <svg width="28px" height="28px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title />
                            <g id="Complete">
                                <g id="arrow-up">
                                    <g>
                                        <polyline data-name="Right" fill="none" id="Right-2" points="7 7.5 12 2.5 17 7.5" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                        <line fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="21.3" y2="4.8" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                )
            }
        </>

    )
}

export default Footer