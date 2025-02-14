import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
// import Slide from './Slide'
import img1 from '../../../assets/images/banner1.jpg'

const Banner = () => {
    return (
        <div className='container px-6 py-10 mx-auto border-4'>
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

                        <img src={img1} className='' alt="" />
                    </>
                </SwiperSlide>
                <SwiperSlide>
                    <>

                        <img src={img1} className='' alt="" />
                    </>
                </SwiperSlide>
                <SwiperSlide>
                    <>

                        <img src={img1} className='' alt="" />
                    </>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;