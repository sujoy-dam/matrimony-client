import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';
import AdminSidebar from './AdminSidebar';
import UserSidebar from './UserSidebar';

const Sidebar = () => {
    const { logOut } = useAuth()
    const [role,] = useRole()
    // const role='admin';
    console.log(role)
    // const handleLogOut = () => {
    //     logOut()
    // }
    // const isAdmin=true;
    return (
        <div className='w-1/5 min-h-screen bg-gray-400'>
            <ul className='menu space-y-2 text-xl'>
                {
                    role === 'Admin' && <AdminSidebar></AdminSidebar>
                }
                {
                    role === 'General' && <UserSidebar></UserSidebar>
                }
                {
                    role === 'Premium' && <UserSidebar></UserSidebar>
                }
                {/* {
                    role === 'Requested for Premium' && <UserSidebar></UserSidebar>
                } */}
                <li className='uppercase'><><button className='btn' onClick={() => logOut()}>Logout</button></></li>
                {/* divider */}
                
            </ul>
        </div>
    );
};

export default Sidebar;