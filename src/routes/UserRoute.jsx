import React from 'react';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from '../components/Shared/LoadingSpinner';
import { Navigate } from 'react-router-dom';
import useRole from '../hooks/useRole';

const UserRoute = ({children}) => {
    const [role, isLoading]=useRole()
  
    if (isLoading) return <LoadingSpinner />
    if (role === 'user') return children
    return <Navigate to='/dashboard' replace='true' />
};

export default UserRoute;