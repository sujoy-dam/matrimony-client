import React from 'react';
import { Link } from 'react-router-dom';

const PremiumCard = ({ item }) => {
    return (
        <div className="mt-6 h-auto border-gray-200 shadow-md rounded-lg overflow-hidden">
            {/* Profile Image */}
            <div className="w-full relative p-4 h-56 flex justify-center items-center border">
                {item?.photo ? (
                    <img
                        src={item?.photo}
                        alt="Profile"
                        className="h-full hover:scale-105 duration-300 rounded-tl-3xl rounded-br-full w-full object-cover"
                    />
                ) : (
                    <span className="text-gray-500 text-lg">No Image</span>
                )}
                <div className='absolute bottom-4 right-4  bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold px-3 py-2 rounded-xl'>
                    <span>{item?.gender}</span>
                </div>
            </div>
            <div className='p-4'>
                <table className="w-full font-medium">
                    <tbody className=''>
                        {/* father name */}
                        <tr>
                            <td>Biodata ID</td>
                            <td>{item?.biodataId}</td>
                        </tr>
                        {/* motherName */}
                        <tr>
                            <td>Type</td>
                            <td>{item?.gender}</td>
                        </tr>
                        {/* email */}
                        <tr>
                            <td>Division</td>
                            <td>{item?.permanentDivision}</td>
                        </tr>
                        {/* weigth */}
                        <tr>
                            <td>Age</td>
                            <td>{item?.age}</td>
                        </tr>
                        <tr>
                            <td>Occupation</td>
                            <td>{item?.occupation}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Profile Details */}
            {/* <div className="p-4">
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
            </div> */}

            {/* View Profile Button */}
            <div className="p-4">
                <Link to={`/biodata-details/${item?._id}`}>
                    <button className="w-full  bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-violet-800">
                        View Profile
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PremiumCard;