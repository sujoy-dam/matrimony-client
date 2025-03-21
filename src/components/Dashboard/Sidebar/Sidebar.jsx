import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';
import AdminSidebar from './AdminSidebar';
import UserSidebar from './UserSidebar';
import { RxCross1 } from "react-icons/rx";
import { IoHome } from "react-icons/io5";
import { CiMenuBurger } from 'react-icons/ci';
const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
    // const [toggleSidebar, setToggleSidebar] = useState(false)
    console.log(toggleSidebar)
    const { logOut } = useAuth()
    const [role,] = useRole()
    const { user } = useAuth()
    return (
        <>
            {/* <button className={`btn ${toggleSidebar === false && "hidden"}`} onClick={() => setToggleSidebar(false)}>
                <CiMenuBurger />
            </button> */}
            <div className={` absolute md:static lg:w-1/5 z-20 min-h-screen bg-gray-800 text-white ${toggleSidebar === true && "hidden"}`}>
                <div className="text-white flex justify-between items-center my-5 px-2">
                    <h1 className='text-2xl'>Dashboard</h1>
                    <button onClick={() => setToggleSidebar(!toggleSidebar)}>
                        <RxCross1 />
                    </button>
                </div>
                <ul className='menu space-y-2 text-xl px-5'>
                    <li>
                        <Link to="/" ><IoHome />Home</Link>
                    </li>
                    {
                        user && role === 'Admin' && <AdminSidebar></AdminSidebar>
                    }
                    {
                        user && role !== "Admin" && <UserSidebar></UserSidebar>
                    }
                    {/* {
                    role === 'Premium' && <UserSidebar></UserSidebar>
                } */}
                    <li className='uppercase'><><button className='btn btn-success my-4' onClick={() => logOut()}>Logout</button></></li>
                    <div className='flex items-center gap-2'>
                        <img className='w-8 h-8 rounded-full' src={user?.photoURL} alt="" />
                        <div className='text-base'>
                            <h1>{user?.displayName}</h1>
                            <h1>{user?.email}</h1>
                        </div>
                    </div>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;