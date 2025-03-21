import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
// import Slide from './Slide'
import img1 from '../../../assets/images/banner1.jpg'
import img2 from '../../../assets/images/banner2.jpg'
import img3 from '../../../assets/images/banner3.jpeg'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <>
                        <div
                            className="hero min-h-screen"
                            style={{
                                backgroundImage: `url(${img1})`,
                            }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-2xl">
                                    <h1 className="mb-5 text-4xl lg:text-6xl font-semibold">Find your <span className="text-pink-600">Right Match</span> here</h1>
                                    <p className="mb-5">
                                        Most trusted Matrimony Brand in the World.
                                    </p>
                                    <Link to="/biodatas" className="btn mt-5 btn-primary">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </>
                </SwiperSlide>
                <SwiperSlide>
                    <>
                        <div
                            className="hero min-h-screen"
                            style={{
                                backgroundImage: `url(${img2})`,
                            }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-3xl">
                                    <h1 className="mb-5 text-4xl lg:text-6xl font-semibold">
                                        <span className='text-4xl lg:text-6xl'>Find your</span>
                                        <span className="text-yellow-500 text-4xl lg:text-6xl"> Match Now </span>
                                        <span className="text-yellow-500 ">Wedding </span>Matrimon
                                    </h1>

                                    <>
                                        <ul className="text-yellow-600 list-disc font-bold flex flex-col lg:flex-row justify-center lg:gap-8 list-inside">
                                            <li>Dating</li>
                                            <li>Bride</li>
                                            <li>Matrimony</li>
                                            <li>Wedding Planner</li>
                                        </ul>
                                    </>
                                    <Link to="/biodatas" className="btn mt-5 btn-primary">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </>
                </SwiperSlide>
                <SwiperSlide>
                    <>

                        <div
                            className="hero min-h-screen"
                            style={{
                                backgroundImage: `url(${img3})`,
                            }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-2xl">
                                    <h1 className="mb-5 text-3xl text-pink-500 lg:text-6xl font-bold uppercase">Your soulmate may be finding you here</h1>
                                    <p className="mb-5 lg:text-xl uppercase">
                                        why don't make your move with us?
                                    </p>
                                    <Link to="/biodatas" className="btn mt-5 btn-primary">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </>
                </SwiperSlide>
            </Swiper>
        </div >
    );
};

export default Banner;