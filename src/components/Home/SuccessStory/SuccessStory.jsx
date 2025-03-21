import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";

const SuccessStory = () => {
  const axiosSecure = useAxiosSecure()

  const { data: married = [], isLoading, refetch } = useQuery({
    queryKey: ['married'],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/all-married`)
      return data
    }
  })
  // console.log(married)
  if (isLoading) return "Loading..."

  return (
    <div className="max-w-5xl mx-auto p-6 bg-base-100 border mb-10 rounded-xl shadow-xl">
      <h2 className="text-4xl font-bold text-center mb-6">Marriage Success Stories</h2>
      <h2 className="text-2xl font-bold text-center mb-6">Recent Couples</h2>
      <div className="gap-6">
        <Swiper watchSlidesProgress={true}
          autoplay={{ delay: 2000, disableOnInteraction: true, pauseOnMouseEnter: true }}
          modules={[FreeMode, Pagination,Autoplay]}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
        }}
          slidesPerView={3} className="mySwiper">
          {
            married.map(item =>
              <SwiperSlide key={item._id}>
                <div key={item._id} className="shadow-lg bg-base-200 rounded-2xl p-6 space-y-4">
                  {/* Image */}
                  <img
                    src={item.coupleImage}
                    // alt={name}
                    className="w-32 h-32 object-cover rounded-full mx-auto"
                  />

                  {/* Name & Marriage Date */}
                  <div className="text-center">
                    {/* <h2 className="text-xl font-semibold">{name}</h2> */}
                    <p className="">Married on: {item?.dateOfMarriage}</p>
                  </div>
                  <p className="text-center">{item.storyReview}</p>
                </div>
              </SwiperSlide>

            )
          }
        </Swiper>
      </div>
    </div>
  );
};

export default SuccessStory;