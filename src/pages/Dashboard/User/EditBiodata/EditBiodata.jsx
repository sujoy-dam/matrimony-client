import React, { useEffect } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { imageUpload } from '../../../../api/utiles';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';

const EditBiodata = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const { data: userInfo, isLoading, refetch } = useQuery({
        queryKey: ['userOne', user?.email],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/single-user/${user?.email}`)

            return data
        }
    })
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const gender = form.gender.value;
        const name = form.name.value;
        const photo = await imageUpload(form.profileImage.files[0]);
        const dateOfBirth = form.dateOfBirth.value;
        const height = form.height.value;
        const weight = form.weight.value;
        const age = parseInt(form.age.value);
        const occupation = form.occupation.value;
        const race = form.race.value;
        const fatherName = form.fatherName.value;
        const motherName = form.motherName.value;
        const permanentDivision = form.permanentDivision.value;
        const presentDivision = form.presentDivision.value;
        const expectedPartnerAge = parseInt(form.expectedPartnerAge.value);
        const expectedPartnerHeight = form.expectedPartnerHeight.value;
        const expectedPartnerWeight = form.expectedPartnerWeight.value;
        // const email = user?.email;
        const mobileNumber = form.mobileNumber.value;

        const bioData = {
            gender,
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
            mobileNumber,
            userEmail: userInfo?.email,
            userRole: userInfo?.role

        }


        try {
            const { data } = await axiosSecure.put(`/bio-data/${user?.email}`, bioData)

            navigate('/dashboard/view')
            toast.success('Bio-Data added successfully')
        } catch (err) {

            toast.error(err.response.data)
        }

    };
    return (
        <div className="min-h-screen bg-teal-700 p-8 border rounded-lg shadow-lg">
            <form
                className=" grid grid-cols-12 gap-x-8 gap-y-4 w-full"
                onSubmit={handleSubmit}
            >{/* Gender */}
                <h2 className="text-2xl font-bold text-center col-span-12 mb-6">Biodata Form</h2>
                <div className='col-span-12 md:col-span-6 space-y-3'>

                    <label className="mb-2 font-medium">Gender</label>
                    <select
                        name="gender"
                        // value={formData.gender}
                        // onChange={handleChange}
                        required
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>


                {/* Name */}
                <div className='col-span-12 md:col-span-6 space-y-3'>
                    <label className=" mb-2 font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        // value={formData.name}
                        // onChange={handleChange}
                        defaultValue={user?.displayName}
                        required
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Profile Image */}
                <div className='col-span-12 md:col-span-6 space-y-3'>
                    <label className=" mb-2 font-medium">Profile Image</label>
                    <input
                        type="file"
                        name="profileImage"
                        // value={userInfo.image}
                        // onChange={handleChange}
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Date of Birth */}
                <div className='col-span-12 md:col-span-6 space-y-3'>
                    <label className=" mb-2 font-medium">Date of Birth</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        // value={formData.dateOfBirth}
                        // onChange={handleChange}
                        required
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Height */}
                <div className='col-span-12 md:col-span-6 space-y-3'>
                    <label className="mb-2 font-medium">Height</label>
                    <select
                        name="height"
                        // value={formData.height}
                        // onChange={handleChange}
                        required
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Height</option>
                        <option value="Short">Short</option>
                        <option value="Average">Average</option>
                        <option value="Tall">Tall</option>
                    </select>
                </div>

                {/* Weight */}
                <div className='col-span-12 md:col-span-6 space-y-3'>
                    <label className=" mb-2 font-medium">Weight</label>
                    <select
                        name="weight"
                        // value={formData.weight}
                        // onChange={handleChange}
                        required
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Weight</option>
                        <option value="Underweight">Underweight</option>
                        <option value="Normal">Normal</option>
                        <option value="Overweight">Overweight</option>
                    </select>
                </div>

                {/* Age */}
                <div className='col-span-12 md:col-span-6 space-y-3'>
                    <label className=" mb-2 font-medium">Age</label>
                    <input
                        type="number"
                        name="age"
                        // value={formData.age}
                        // onChange={handleChange}
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Occupation */}
                <div className='col-span-12 md:col-span-6 space-y-3'>
                    <label className=" mb-2 font-medium">Occupation</label>
                    <select
                        name="occupation"
                        // value={formData.occupation}
                        // onChange={handleChange}
                        required
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Occupation</option>
                        <option value="Student">Student</option>
                        <option value="Professional">Professional</option>
                        <option value="Business">Business</option>
                    </select>
                </div>

                {/* Race */}
                <div className='col-span-12 md:col-span-6 space-y-3'>
                    <label className="mb-2 font-medium">Race</label>
                    <select
                        name="race"
                        // value={formData.race}
                        // onChange={handleChange}
                        required
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Race</option>
                        <option value="Fair">Fair</option>
                        <option value="Medium">Medium</option>
                        <option value="Dark">Dark</option>
                    </select>
                </div>

                {/* Parent Names */}
                <div className="col-span-12 md:col-span-6 space-y-3">
                    <label className=" mb-2 font-medium">Father's Name</label>
                    <input
                        type="text"
                        name="fatherName"
                        // value={formData.fatherName}
                        // onChange={handleChange}
                        required
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="col-span-12 md:col-span-6 space-y-3">
                    <label className=" mb-2 font-medium">Mother's Name</label>
                    <input
                        type="text"
                        name="motherName"
                        // value={formData.motherName}
                        // onChange={handleChange}
                        required
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Division Names */}
                <div className="col-span-12 md:col-span-6 space-y-3">
                    <label className=" mb-2 font-medium">Permanent Division</label>
                    <select
                        name="permanentDivision"
                        // value={formData.permanentDivision}
                        // onChange={handleChange}
                        required
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Division</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattagra">Chattagram</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>
                </div>
                <div className="col-span-12 md:col-span-6 space-y-3">
                    <label className=" mb-2 font-medium">Present Division</label>
                    <select
                        name="presentDivision"
                        // value={formData.presentDivision}
                        // onChange={handleChange}
                        required
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Division</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattagra">Chattagra</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>
                </div>

                {/* Partner Expectations */}
                <div className="col-span-12 md:col-span-6 space-y-3">
                    <label className=" mb-2 font-medium">Expected Partner Age</label>
                    <input
                        type="number"
                        name="expectedPartnerAge"
                        // value={formData.expectedPartnerAge}
                        // onChange={handleChange}
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="col-span-12 md:col-span-6 space-y-3">
                    <label className=" mb-2 font-medium">Expected Partner Height</label>
                    <select
                        name="expectedPartnerHeight"
                        // value={formData.expectedPartnerHeight}
                        // onChange={handleChange}
                        required
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Height</option>
                        <option value="Short">Short</option>
                        <option value="Average">Average</option>
                        <option value="Tall">Tall</option>
                    </select>
                </div>
                <div className="col-span-12 md:col-span-6 space-y-3">
                    <label className=" mb-2 font-medium">Expected Partner Weight</label>
                    <select
                        name="expectedPartnerWeight"
                        // value={formData.expectedPartnerWeight}
                        // onChange={handleChange}
                        required
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Weight</option>
                        <option value="Underweight">Underweight</option>
                        <option value="Normal">Normal</option>
                        <option value="Overweight">Overweight</option>
                    </select>
                </div>

                {/* Contact Details */}
                <div className='col-span-12 md:col-span-6 space-y-3'>
                    <label className=" mb-2 font-medium">Contact Email</label>
                    <input
                        type="email"
                        name="email"
                        // value={formData.contactEmail}
                        defaultValue={user.email}
                        readOnly
                        className="w-full mb-4 p-2 border border-gray-300 bg-gray-200 rounded"
                    />
                </div>
                <div className='col-span-12 md:col-span-6 space-y-3'>
                    <label className=" mb-2 font-medium">Mobile Number</label>
                    <input
                        type="tel"
                        name="mobileNumber"
                        // value={formData.mobileNumber}
                        // onChange={handleChange}
                        required
                        className="w-full mb-6 p-2 border border-gray-300 rounded"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full col-span-12 bg-violet-500 text-white font-bold py-3 mt-4 rounded hover:bg-indigo-800"
                >
                    Save And Publish Now
                </button>
            </form>
        </div >
    );
};

export default EditBiodata;