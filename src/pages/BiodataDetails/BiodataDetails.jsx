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
    console.log(item)
    const [role] = useRole()
    // const role='Premium'
    console.log(role)
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
            console.log(data)
            refetch()
            return data
        }
    })
    if (isLoading) return 'Loading..'
    const handleAddToFavourite = async (item) => {
        console.log(item)
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
            console.log(data)
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
                    gender.slice(0,3).map(item => <PremiumCard key={item._id} item={item}></PremiumCard>)
                }
            </div>
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
                {/* Profile Image */}
                <div className="relative h-48 w-full bg-gray-200">
                    {photo ? (
                        <img
                            src={photo}
                            alt={name}
                            className="object-cover h-full w-full"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                            No Image
                        </div>
                    )}
                </div>

                {/* Biodata Details */}
                <div className="p-6">
                    {/* Name */}
                    <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
                    <p className="text-sm text-gray-500">{occupation}</p>

                    <div className="mt-4">
                        {/* Personal Information */}
                        <p className="text-sm text-gray-600">Biodata Id: {biodataId}</p>
                        <p className="text-sm text-gray-600">Date of Birth: {dateOfBirth}</p>
                        <p className="text-sm text-gray-600">Height: {height} cm</p>
                        <p className="text-sm text-gray-600">Weight: {weight} kg</p>
                        <p className="text-sm text-gray-600">Age: {age} years</p>
                        <p className="text-sm text-gray-600">Race (Skin Color): {race}</p>

                        {/* Family Information */}
                        <p className="text-sm text-gray-600">Father's Name: {fatherName}</p>
                        <p className="text-sm text-gray-600">Mother's Name: {motherName}</p>

                        {/* Address Information */}
                        <p className="text-sm text-gray-600">Permanent Division: {permanentDivision}</p>
                        <p className="text-sm text-gray-600">Present Division: {presentDivision}</p>

                        {/* Partner Preferences */}
                        <p className="text-sm text-gray-600">Expected Partner Age: {expectedPartnerAge} years</p>
                        <p className="text-sm text-gray-600">Expected Partner Height: {expectedPartnerHeight} cm</p>
                        <p className="text-sm text-gray-600">Expected Partner Weight: {expectedPartnerWeight} kg</p>

                        {/* Contact Information */}
                        {
                            role === "Premium" || role === "Admin" ? <>

                                <p className="text-sm text-gray-600">Email: {userEmail}</p>
                                <p className="text-sm text-gray-600">Mobile: {mobileNumber}</p>
                            </> :
                                <>
                                    <Link to={`/checkout/${_id}`} >

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
