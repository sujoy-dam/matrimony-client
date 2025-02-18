import React from 'react';
import LoadingSpinner from '../components/Shared/LoadingSpinner';
import useRole from '../hooks/useRole';
import { Navigate } from 'react-router-dom';

const AdminRoutes = ({children}) => {
    const [role, isLoading]=useRole()
  
    if (isLoading) return <LoadingSpinner />
    if (role === 'Admin') return children
    return <Navigate to='/dashboard/admin_dashboard' replace='true' />
};

export default AdminRoutes;