import React, { useEffect, useState } from 'react';
import BiodatasSidebar from '../../components/Biodatas/BiodatasSidebar';
import PremiumCard from '../../components/Home/Premium/PremiumCard';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Biodatas = () => {
    const axiosPublic = useAxiosPublic()
    const [allBio, setAllBio]=useState([])
    const [filterGender, setFilterGender] = useState("")
    const [filterDivision, setFilterDivision] = useState("")
    const [searchAge, setSearchAge] = useState("")
    console.log(filterGender)
    // const { data: allBio = [], isLoading, refetch } = useQuery({
    //     queryKey: ['allBio', filterGender, filterDivision, searchAge,axiosPublic],
    //     queryFn: async () => {
    //         const { data } = await axiosPublic.get(`/all-bios?filterGender=${filterGender}&filterDivision=${filterDivision}&searchAge=${searchAge}`)
    //         // console.log(data)
    //         return data
    //     }
    // })
    useEffect(() => {
        const fetchAllBio=async()=>{
            const { data } = await axiosPublic.get(`/all-bios?filterGender=${filterGender}&filterDivision=${filterDivision}&searchAge=${searchAge}`)
            setAllBio(data)
        }
        fetchAllBio()
    }, [filterGender, filterDivision, searchAge, axiosPublic])

    // console.log(filterDivision)
    // if (isLoading) return 'Loading...'
    return (
        <div className='w-full p-5 flex flex-col lg:flex-row gap-5'>
            <div className='w-full lg:w-[25%]'> <BiodatasSidebar setFilterDivision={setFilterDivision} setFilterGender={setFilterGender} setSearchAge={setSearchAge}
                filterGender filterDivision searchAge></BiodatasSidebar></div>
            <div className='w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    allBio.map(item => <PremiumCard item={item} key={item._id}></PremiumCard>)
                }
            </div>
        </div>
    );
};

export default Biodatas;