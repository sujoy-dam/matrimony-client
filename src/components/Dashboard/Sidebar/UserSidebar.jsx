import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserPremiumModal from '../../Modal/UserPremiumModal';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';

const UserSidebar = () => {
   
    return (
        <div>
            <li className=''><NavLink to='/dashboard/edit'>Edit Biodata</NavLink></li>
            <li className=''><NavLink to='/dashboard/view'>View Biodata</NavLink></li>
            <li className=''><NavLink to='/dashboard/my_contact_request'>My Contact Request</NavLink></li>
            <li className=''><NavLink to='/dashboard/favourite'>Favourites Biodata</NavLink></li>
            <li className=''><NavLink to='/dashboard/gotMarried'>Got Married</NavLink></li>
            <li className=''><NavLink to='/dashboard/profile'>Profile</NavLink></li>
        </div>
    );
};

export default UserSidebar;