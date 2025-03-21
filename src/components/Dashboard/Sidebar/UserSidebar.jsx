import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserPremiumModal from '../../Modal/UserPremiumModal';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';
import { CgProfile } from "react-icons/cg";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { GiTwinShell } from "react-icons/gi";
const UserSidebar = () => {
    return (
        <div>
            <li className=''><NavLink to='/dashboard/edit'><FaUserEdit />Edit Biodata</NavLink></li>
            <li className=''><NavLink to='/dashboard/view'><MdGridView />View Biodata</NavLink></li>
            <li className=''><NavLink to='/dashboard/my_contact_request'><RiContactsBook3Fill />My Contact Request</NavLink></li>
            <li className=''><NavLink to='/dashboard/favourite'><MdOutlineFavorite />Favourites Biodata</NavLink></li>
            <li className=''><NavLink to='/dashboard/gotMarried'><GiTwinShell />Got Married</NavLink></li>
            <li className=''><NavLink to='/dashboard/profile'><CgProfile />Profile</NavLink></li>
        </div>
    );
};

export default UserSidebar;