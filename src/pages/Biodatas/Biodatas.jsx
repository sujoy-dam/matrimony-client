import React, { useState } from 'react';
import BiodatasSidebar from '../../components/Biodatas/BiodatasSidebar';
import PremiumCard from '../../components/Home/Premium/PremiumCard';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Biodatas = () => {
    const axiosPublic = useAxiosPublic()
    const [filterGender, setFilterGender]=useState("")
    const [filterDivision,setFilterDivision]=useState("")
    const [searchAge, setSearchAge]=useState("")
    const { data: allBio = [], isLoading, refetch } = useQuery({
        queryKey: ['allBio', filterGender, filterDivision, searchAge],
        queryFn: async () => {
            const { data } = await axiosPublic(`/all-bios?filterGender=${filterGender}&filterDivision=${filterDivision}&searchAge=${searchAge}`)
            console.log(data)
            // const age = data.filter(item=> item?.age)
            return data
        }
    })
    console.log(filterDivision)
    if(isLoading) return 'Loading...'
    return (
        <div className='bg-slate-500 w-full p-5 flex gap-5'>
            <div className='w-[25%]'> <BiodatasSidebar setFilterDivision={setFilterDivision} setFilterGender={setFilterGender} setSearchAge={setSearchAge}></BiodatasSidebar></div>
            <div className='w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
            allBio.map(item=><PremiumCard item={item} key={item._id}></PremiumCard>)
            }
            </div>
        </div>
    );
};

export default Biodatas;