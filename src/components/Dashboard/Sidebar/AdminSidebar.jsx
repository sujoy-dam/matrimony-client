import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdSpaceDashboard } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { MdWorkspacePremium } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { AiFillProfile } from "react-icons/ai";

const AdminSidebar = () => {
    return (
        <div>
            <li><NavLink to='/dashboard/admin_dashboard'><MdSpaceDashboard />Admin Dashboard</NavLink>
            </li>
            <li><NavLink to='/dashboard/manage_users'><GrUserManager />Manage Users</NavLink>
            </li>
            <li><NavLink to='/dashboard/approved_premium'><MdWorkspacePremium />Premium Request</NavLink>
            </li>
            <li><NavLink to='/dashboard/contact_request'><MdContactPhone />Contact Request</NavLink>
            </li>
            <li><NavLink to='/dashboard/profile'><AiFillProfile />Profile</NavLink>
            </li>
        </div>
    );
};

export default AdminSidebar;