import React from 'react';
import useAuth from '../../../../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth()
    console.log(user)
    return (
        <div className='flex justify-center items-center'>
            <div className="p-5 max-w-xl space-y-4 rounded-xl gap-5 shadow-xl bg-teal-600">
                <figure className=''>
                    <img
                        src={user?.photoURL}
                        alt="Shoes"
                        className='w-15 rounded-xl h-15 object-cover' />
                </figure>
                <div className="space-y-4">
                    <h2 className="text-xl">Name : {user?.displayName}</h2>
                    <p className='text-xl'>Email : {user?.email}</p>
                    <p className='text-xl'>Profile Creation Date : {user?.metadata.creationTime}</p>

                </div>
            </div>
        </div>
    );
};

export default Profile;