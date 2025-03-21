import React from 'react';
import { Link } from 'react-router-dom';

const PremiumCard = ({ item }) => {
    return (
        <div className="mt-6 bg-base-100 h-auto border-gray-200 shadow-md rounded-lg overflow-hidden">
            {/* Profile Image */}
            <div className="w-full p-4 h-56 flex justify-center items-center">
                {item?.photo ? (
                    <img
                        src={item?.photo}
                        alt="Profile"
                        className="h-full w-full object-cover rounded-xl"
                    />
                ) : (
                    <span className="text-gray-500 text-lg">No Image</span>
                )}
            </div>

            {/* Profile Details */}
            <div className="p-4">
                <h2 className="text-xl font-bold">
                    Biodata ID: {item?.biodataId}
                </h2>
                <p>
                    <strong>Type:</strong> {item?.gender}
                </p>
                <p>
                    <strong>Division:</strong> {item?.permanentDivision}
                </p>
                <p>
                    <strong>Age:</strong> {item?.age}
                </p>
                <p>
                    <strong>Occupation:</strong> {item?.occupation}
                </p>
            </div>

            {/* View Profile Button */}
            <div className="p-4">
                <Link to={`/biodata-details/${item?._id}`}>
                    <button className="w-full bg-violet-500 text-white font-bold py-2 px-4 rounded hover:bg-violet-800">
                        View Profile
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PremiumCard;