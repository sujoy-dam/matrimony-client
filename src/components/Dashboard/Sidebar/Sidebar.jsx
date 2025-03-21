import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';
import AdminSidebar from './AdminSidebar';
import UserSidebar from './UserSidebar';
import { GiSplitCross } from "react-icons/gi";

const Sidebar = ({toggleSidebar, setToggleSidebar}) => {
    // const [toggleSidebar, setToggleSidebar] = useState(false)
    console.log(toggleSidebar)
    const { logOut } = useAuth()
    const [role,] = useRole()
    const { user } = useAuth()
    return (
        <div className={` absolute md:static lg:w-1/5 z-20 min-h-screen bg-gray-800 text-white ${toggleSidebar===true && "hidden"}`}>
            <div className="text-white flex justify-between items-center my-5 px-2">
                <h1 className='text-2xl'>Dashboard</h1>
                <button onClick={()=>setToggleSidebar(!toggleSidebar)}>
                    <GiSplitCross />
                </button>
            </div>
            <ul className='menu space-y-2 text-xl px-5'>
                {
                    user && role === 'Admin' && <AdminSidebar></AdminSidebar>
                }
                {
                    user && role !== "Admin" && <UserSidebar></UserSidebar>
                }
                {/* {
                    role === 'Premium' && <UserSidebar></UserSidebar>
                } */}

                <li className='uppercase'><><button className='btn' onClick={() => logOut()}>Logout</button></></li>


            </ul>
        </div>
    );
};

export default Sidebar;