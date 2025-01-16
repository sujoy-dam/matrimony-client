import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUserBio = () => {
    const {user}=useAuth();
    const axiosSecure = useAxiosSecure()
    const {refetch, data : userBios=[]}=useQuery({
        queryKey:['userBion', user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/bios?email=${user?.email}`)
            console.log(res.data)
            return res.data
        }
    })
    return [refetch, userBios];
};

export default useUserBio;