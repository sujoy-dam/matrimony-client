import React from 'react';
import useAuth from '../../../../hooks/useAuth';

const Profile = () => {
    const {user}=useAuth()
    console.log(user)
    return (
        <div className=" p-5 max-w-xl space-y-5 rounded-xl gap-5 shadow-xl bg-sky-400">
            <figure  className=''>
                <img
                    src={user?.photoURL}
                    alt="Shoes"
                    className='w-full'/>
            </figure>
            <div className="">
                <h2 className="text-xl">Name:{user?.displayName}</h2>
                <p className='text-xl'>Email:{user?.email}</p>
                <p className='text-xl'>Profile Creation Date:{user?.metadata.creationTime}</p>
                
            </div>
        </div>
    );
};

export default Profile;