import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useStatus = () => {
    const axiosSecure= useAxiosSecure()
    const {user,}=useAuth()
    const {data:status=[], isLoading}=useQuery({
        queryKey:['status', user?.email],
        queryFn: async()=>{
            const {data}=await axiosSecure.get(`/bio/status/${user?.email}`)
            return data.role
        }
    })
    return [status, isLoading];
};

export default useStatus;