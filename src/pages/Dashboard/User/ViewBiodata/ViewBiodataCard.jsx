import React from 'react';

const ViewBiodataCard = ({ item }) => {
    const {
        name,
        photo, dateOfBirth, height, weight, age, occupation, race, fatherName, motherName, permanentDivision, presentDivision, expectedPartnerAge, expectedPartnerHeight, expectedPartnerWeight, userEmail, mobileNumber,
    } = item

    return (

        <>
            <div className="border-2 p-10  w-full space-y-8 shadow-xl">
                <div className="flex justify-between items-center gap-20">
                    <div className='border-violet-500 border-2 p-2'>
                        <img src={photo} className='w-72 h-72 hover:scale-105 transform transition-transform duration-300' alt="" />
                    </div>
                    <div>
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
                                    <tr>
                                        <td>Email</td>
                                        <td>{userEmail}</td>
                                    </tr>
                                    {/* weigth */}
                                    <tr>
                                        <td>Mobile Number</td>
                                        <td>{mobileNumber}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewBiodataCard;