import React from 'react';
import { Link } from 'react-router-dom';

const PremiumCard = ({ item }) => {
    return (
        <div className="mt-6 bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
            {/* Profile Image */}
            <div className="w-full h-48 bg-gray-200 flex justify-center items-center">
                {item?.photo ? (
                    <img
                        src={item?.photo}
                        alt="Profile"
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <span className="text-gray-500 text-lg">No Image</span>
                )}
            </div>

            {/* Profile Details */}
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">
                    Biodata ID: {item?.biodataId}
                </h2>
                <p className="text-gray-600">
                    <strong>Type:</strong> {item?.gender}
                </p>
                <p className="text-gray-600">
                    <strong>Division:</strong> {item?.permanentDivision}
                </p>
                <p className="text-gray-600">
                    <strong>Age:</strong> {item?.age}
                </p>
                <p className="text-gray-600">
                    <strong>Occupation:</strong> {item?.occupation}
                </p>
            </div>

            {/* View Profile Button */}
            <div className="p-4">
                <Link to={`/biodata-details/${item?._id}`}>
                    <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
                        View Profile
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PremiumCard;