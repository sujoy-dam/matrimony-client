import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserPremiumModal from '../../Modal/UserPremiumModal';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';

const UserSidebar = () => {
    // const {user}=useAuth()
    // const axiosSecure = useAxiosSecure()
    // let [isOpen, setIsOpen] = useState(false)
    // const handlePremiumRequest = async()=>{
    //     console.log('connected')
    //     try{
    //         const {data}=await axiosSecure.patch(`/user/${user?.email}`)
    //         console.log(data)
    //         toast.success('User Requested successfully')
    //     }catch(err){
    //         console.log(err.response.data)
    //         toast.error(err.response.data)
    //     }finally{
    //         setIsOpen(false)
    //     }
    // }
    return (
        <div>
            <li className=''><NavLink to='/dashboard/edit'>Edit Biodata</NavLink></li>
            <li className=''><NavLink to='/dashboard/view'>View Biodata</NavLink></li>
            <li className=''><NavLink to='/dashboard/my_contact_request'>My Contact Request</NavLink></li>
            <li className=''><NavLink to='/dashboard/favourite'>Favourites Biodata</NavLink></li>
            <li className=''><NavLink to='/dashboard/gotMarried'>Got Married</NavLink></li>
            {/* <li className='uppercase'><>Make Premium</></li> */}
            {/* <li
                onClick={() => setIsOpen(true)}
                className='flex  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300 hover:text-gray-700 cursor-pointer'
            >
                {/* <GrUserAdmin className='w-5 h-5' /> */}

                {/* <span className='font-medium'>Become A Premium</span> */}
            {/* </li> */} */}
        {/* // <UserPremiumModal handlePremiumRequest={handlePremiumRequest} isOpen={isOpen} setIsOpen={setIsOpen}></UserPremiumModal> */}
        </div>
    );
};

export default UserSidebar;