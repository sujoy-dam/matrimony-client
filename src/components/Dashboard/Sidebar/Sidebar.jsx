import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';
import AdminSidebar from './AdminSidebar';
import UserSidebar from './UserSidebar';

const Sidebar = () => {
    const { logOut } = useAuth()
    const [role,] = useRole()
    const {user}=useAuth()
    // const role='admin';
    // console.log(role)
    return (
        <div className='w-full lg:w-1/5 min-h-screen bg-gray-800 text-white'>
            <ul className='menu space-y-2 text-xl'>
                {
                    user && role === 'Admin' && <AdminSidebar></AdminSidebar>
                }
                {
                    user && role!== "Admin" && <UserSidebar></UserSidebar>
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