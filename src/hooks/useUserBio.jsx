import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUserBio = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
    const { refetch, data: userBios = [] } = useQuery({
        queryKey: ['userBios', user?.email],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/user/${user?.email}`)
            return data
        }
    })
    return [refetch, userBios];
};

export default useUserBio;