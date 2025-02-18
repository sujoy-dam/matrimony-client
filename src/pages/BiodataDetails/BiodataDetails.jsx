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

const BiodataDetails = () => {
    const item = useLoaderData()
    const navigate = useNavigate()
    const { user } = useAuth()
    // const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    // console.log(item)
    const [role] = useRole()
    // const role='Premium'
    // console.log(role)
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
            // console.log(data)
            refetch()
            return data
        }
    })
    if (isLoading) return 'Loading..'
    const handleAddToFavourite = async (item) => {
        // console.log(item)
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
            // console.log(data)
            toast.success('Added to your favourite list Successfully')

        } catch (err) {
            // console.log(err.response.data)
            toast.error(err.response.data)
        } finally {
            navigate('/dashboard/favourite')
        }
    }
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    gender.slice(0, 3).map(item => <PremiumCard key={item._id} item={item}></PremiumCard>)
                }
            </div>
            <div className="w-full lg:flex justify-between items-center gap-20 p-5 my-10 bg-white shadow-lg rounded-lg border-2 border-gray-800">
                {/* Profile Image */}
                <div className="w-full lg:w-1/2 bg-gray-200">
                    {photo ? (
                        <img
                            src={photo}
                            alt={name}
                            className="border-4 w-[800px]"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                            No Image
                        </div>
                    )}
                </div>

                {/* Biodata Details */}
                <div className="p-6 w-full lg:w-1/2 space-y-2">
                    {/* Name */}
                    <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
                    <p className="text-sm text-gray-500">{occupation}</p>

                    <div className="mt-4">
                        {/* Personal Information */}
                        <div>
                            <h4 className="text-xl font-bold text-orange-700">Biodata Id:</h4>
                            <p>{biodataId}</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-orange-700">Date of Birth:</h4>
                            <p>{dateOfBirth}</p>
                        </div>
                        <div>

                            <h1 className="text-xl font-bold text-orange-700">Height:</h1>
                            <p>{height}</p>
                        </div>
                        <div>

                            <h1 className="text-xl font-bold text-orange-700">Weight: </h1>
                            <p>{weight}</p>
                        </div>
                        <div>

                            <h1 className="text-xl font-bold text-orange-700">Age:</h1>
                            <p> {age} years</p>
                        </div>
                        <div>
                            <h1 className='text-xl font-bold text-orange-700'>Race (Skin Color):</h1>
                            <p>{race}</p>
                        </div>

                        {/* Family Information */}
                        <div>
                            <h1 className='text-xl font-bold text-orange-700'>Father Name:</h1>
                            <p>{fatherName}</p>
                        </div>
                        <div>
                            <h1 className='text-xl font-bold text-orange-700'>Mother Name:</h1>
                            <p>{motherName}</p>
                        </div>

                        {/* Address Information */}
                        <div>
                            <h1 className='text-xl font-bold text-orange-700'>Permanent Division:</h1>
                            <p>{permanentDivision}</p>
                        </div>
                        <div>
                            <h1 className='text-xl font-bold text-orange-700'>Present Division:</h1>
                            <p>{presentDivision}</p>
                        </div>

                        {/* Partner Preferences */}
                        <div>
                            <h1 className='text-xl font-bold text-orange-700'>Expected Partner Age:</h1>
                            <p>{expectedPartnerAge} years</p>
                        </div>
                        <div>
                            <h1 className='text-xl font-bold text-orange-700'>Expected Partner Height:</h1>
                            <p>{expectedPartnerHeight}</p>
                        </div>
                        <div>
                            <h1 className='text-xl font-bold text-orange-700'>Expected Partner Weight:</h1>
                            <p>{expectedPartnerWeight}</p>
                        </div>

                        {/* Contact Information */}
                        {
                            role === "Premium" || role === "Admin" ? <>

                                <div>
                                    <h1 className='text-xl font-bold text-orange-700'>Email:</h1>
                                    <p>{item?.userEmail}</p>
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold text-orange-700'>Mobile:</h1>
                                    <p>{mobileNumber}</p>
                                </div>
                            </> :
                                <>
                                    <Link to={`/checkout/${_id}`} className='' >

                                        <button className='btn'>Request Contact Information</button>
                                    </Link>
                                </>
                        }
                        <button onClick={() => handleAddToFavourite(item)} className="btn btn-primary">Add To Faviourite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BiodataDetails;
