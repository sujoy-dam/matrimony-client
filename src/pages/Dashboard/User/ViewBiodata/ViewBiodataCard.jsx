import React from 'react';

const ViewBiodataCard = ({ item }) => {
    const {
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
        email,
        mobileNumber,
    } = item

    return (

        <>
            <div className="lg:flex justify-between items-center gap-20 p-5 lg:w-[1000px] bg-white shadow-lg rounded-lg border-2 border-gray-800">
                {/* Profile Image */}
                <div className="w-full md:w-1/2 bg-gray-200">
                    {photo ? (
                        <img
                            src={photo}
                            alt={name}
                            className="border-4 md:w-[800px]"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                            No Image
                        </div>
                    )}
                </div>

                {/* Biodata Details */}
                <div className="p-6 w-full lg:w-1/2">
                    {/* Name */}
                    <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
                    <p className="text-gray-500">{occupation}</p>

                    <div className="mt-4 space-y-2">
                        {/* Personal Information */}
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
                        <div>
                            <h1 className='text-xl font-bold text-orange-700'>Email:</h1>
                            <p>{item?.userEmail}</p>
                        </div>
                        <div>
                            <h1 className='text-xl font-bold text-orange-700'>Mobile:</h1>
                            <p>{mobileNumber}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewBiodataCard;