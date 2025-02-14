import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div>
            <li><NavLink to='/dashboard/admin_dashboard'>Admin Dashboard</NavLink>
            </li>
            <li><NavLink to='/dashboard/manage_users'>Manage Users</NavLink>
            </li>
            <li><NavLink to='/dashboard/approved_premium'>Approved Premium</NavLink>
            </li>
            <li><NavLink to='/dashboard/contact_request'>Approved Contact Request</NavLink>
            </li>
        </div>
    );
};

export default AdminSidebar;