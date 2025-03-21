import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import useStatus from '../../hooks/useStatus';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import useRole from '../../hooks/useRole';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import PremiumCard from '../../components/Home/Premium/PremiumCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay } from "swiper/modules";


const BiodataDetails = () => {
    const item = useLoaderData()
    const navigate = useNavigate()
    const { user } = useAuth()

    const axiosSecure = useAxiosSecure()

    const [role] = useRole()

    const {
        _id,
        name,
        photo,
        dateOfBirth,
        height,
        weight,
        age,
        occupation,
        race,
        fatherName,
        motherName,
        permanentDivision,
        presentDivision,
        expectedPartnerAge,
        expectedPartnerHeight,
        expectedPartnerWeight,
        biodataId,
        userEmail,
        mobileNumber,
    } = item

    const { data: gender = [], isLoading, refetch } = useQuery({
        queryKey: ['gender', item?.gender],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/details-gender/${item?.gender}`)

            refetch()
            return data
        }
    })
    if (isLoading) return 'Loading..'
    const handleAddToFavourite = async (item) => {

        const favouriteInfo = {
            name: item?.name,
            // email: item?.email,
            biodataId: item?.biodataId,
            PermanentAddress: item?.permanentDivision,
            Occupation: item?.occupation,
            userEmail: user?.email

        }
        try {
            const { data } = await axiosSecure.post(`/favourite`, favouriteInfo)

            toast.success('Added to your favourite list Successfully')

            navigate('/dashboard/favourite')
        } catch (err) {

            toast.error(err.response.data)
        } finally {
            // somothing 
        }
    }
    return (
        <div className='container mx-auto w-full gap-20'>
            <div className=' gap-4'>
                {/* {
                    gender.slice(0, 3).map(item => <PremiumCard key={item._id} item={item}></PremiumCard>)
                } */}

                <Swiper slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{ delay: 2000, disableOnInteraction: true,pauseOnMouseEnter: true }}
                    modules={[FreeMode, Pagination,Autoplay]}
                    className="mySwiper">
                    {
                        gender.map(item => (<SwiperSlide key={item._id}><PremiumCard key={item._id} item={item}></PremiumCard>
                        </SwiperSlide>))
                    }

                </Swiper>
            </div>
            <>
                <div className="border-2 p-10 my-10 rounded-xl space-y-8 shadow-xl">
                    <div className="flex justify-between items-center gap-20">
                        <div className='border-violet-500 border-2 p-2 w-1/2'>
                            <img src={photo} className='w-full h-72 hover:scale-105 transform transition-transform duration-300' alt="" />
                        </div>
                        <div className="w-1/2">
                            <h1 className='text-3xl font-semibold'>{name}</h1>
                            <p><span>Date of Birth:</span> <span>{dateOfBirth}</span></p>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center rounded-full p-4 text-center w-60 mx-auto text-white'>
                            <span className='font-bold uppercase'>professional details</span>
                        </div>
                        <div>
                            <div className="overflow-x-auto">
                                <table className="w-full font-medium">
                                    <tbody>
                                        {/* date of birth */}
                                        <tr>
                                            <td>Date of Birth</td>
                                            <td>{dateOfBirth}</td>
                                        </tr>
                                        {/* age */}
                                        <tr>
                                            <td>Age</td>
                                            <td>{age}</td>
                                        </tr>
                                        {/* height */}
                                        <tr>
                                            <td>Height</td>
                                            <td>{height}</td>
                                        </tr>
                                        {/* weigth */}
                                        <tr>
                                            <td>Weight</td>
                                            <td>{weight}</td>
                                        </tr>
                                        {/* Race */}
                                        <tr>
                                            <td>Race</td>
                                            <td>{race}</td>
                                        </tr>
                                        {/* occupation */}
                                        <tr>
                                            <td>Occupation</td>
                                            <td>{occupation}</td>
                                        </tr>
                                        {/* permanentDivision */}
                                        <tr>
                                            <td>Permanent Division</td>
                                            <td>{permanentDivision}</td>
                                        </tr>
                                        {/* presentDivision */}
                                        <tr>
                                            <td>Present Division</td>
                                            <td>{presentDivision}</td>
                                        </tr>
                                        {/* expectedPartnerAge */}
                                        <tr>
                                            <td>Expected Partner Age</td>
                                            <td>{expectedPartnerAge}</td>
                                        </tr>
                                        {/* expectedPartnerHeight */}
                                        <tr>
                                            <td>Expected Partner Height</td>
                                            <td>{expectedPartnerHeight}</td>
                                        </tr>
                                        {/* expectedPartnerWeight */}
                                        <tr>
                                            <td>Expected Partner Weight</td>
                                            <td>{expectedPartnerWeight}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center rounded-full p-4 text-center w-60 mx-auto text-white'>
                            <span className='font-bold uppercase'>other details</span>
                        </div>
                        <div>
                            <div className="overflow-x-auto">
                                <table className="w-full font-medium">
                                    <tbody>
                                        {/* father name */}
                                        <tr>
                                            <td>Father Name</td>
                                            <td>{fatherName}</td>
                                        </tr>
                                        {/* motherName */}
                                        <tr>
                                            <td>Mother Name</td>
                                            <td>{motherName}</td>
                                        </tr>
                                        {/* email */}

                                        {
                                            role === "Premium" || role === "Admin" ? <>

                                                <tr>
                                                    <td>Email</td>
                                                    <td>{userEmail}</td>
                                                </tr>
                                                {/* weigth */}
                                                <tr>
                                                    <td>Mobile Number</td>
                                                    <td>{mobileNumber}</td>
                                                </tr>
                                            </> :
                                                <>
                                                    <Link to={`/checkout/${_id}`} className='' >

                                                        <button className='btn mr-5'>Request Contact Information</button>
                                                    </Link>
                                                </>
                                        }
                                        <button onClick={() => handleAddToFavourite(item)} className="btn btn-primary">Add To Faviourite</button>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </div>
    );
};

export default BiodataDetails;
