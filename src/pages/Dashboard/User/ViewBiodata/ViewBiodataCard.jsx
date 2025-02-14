import React from 'react';

const ViewBiodataCard = ({ item }) => {
    console.log(item.userEmail)
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
        
        <div>
            {
                age && <div className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
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
                        <p className="text-sm text-gray-600">Email: {item?.userEmail}</p>
                        <p className="text-sm text-gray-600">Mobile: {mobileNumber}</p>
                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default ViewBiodataCard;