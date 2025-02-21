import React, { useEffect, useState } from 'react';
import BiodatasSidebar from '../../components/Biodatas/BiodatasSidebar';
import PremiumCard from '../../components/Home/Premium/PremiumCard';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useLoaderData } from 'react-router-dom';

const Biodatas = () => {
    const axiosPublic = useAxiosPublic()
    const [allBio, setAllBio] = useState([])
    const [filterGender, setFilterGender] = useState("")
    const [filterDivision, setFilterDivision] = useState("")
    const [itemsPerPages, setItemsPerPages]=useState(5)
    const [searchAge, setSearchAge] = useState("")
    const [currentPage,setCurrentPage]=useState(0)
    // console.log(filterGender)
    const { totalBiodata } = useLoaderData()
    // console.log(totalBiodata)
    // const itemPerPages = 2;
    const numberOfPages = Math.ceil(totalBiodata / itemsPerPages)
    // console.log(numberOfPages)
    const pages = []
    for (let i = 0; i < numberOfPages; i++) {
        pages.push(i)
    }
    // console.log(pages)
    // const { data: allBio = [], isLoading, refetch } = useQuery({
    //     queryKey: ['allBio', filterGender, filterDivision, searchAge,axiosPublic],
    //     queryFn: async () => {
    //         const { data } = await axiosPublic.get(`/all-bios?filterGender=${filterGender}&filterDivision=${filterDivision}&searchAge=${searchAge}`)
    //         // console.log(data)
    //         return data
    //     }
    // })
    // useEffect(() => {
    //     const fetchAllBio = async () => {
    //         const { data } = await axiosPublic.get(`/all-bios?filterGender=${filterGender}&filterDivision=${filterDivision}&searchAge=${searchAge}`)
    //         setAllBio(data)
    //     }
    //     fetchAllBio()
    // }, [filterGender, filterDivision, searchAge, axiosPublic])
    useEffect(() => {
        const fetchAllBio = async () => {
            const { data } = await axiosPublic.get(`/all-bios?filterGender=${filterGender}&filterDivision=${filterDivision}&searchAge=${searchAge}&page=${currentPage}&size=${itemsPerPages}`)
            setAllBio(data)
        }
        fetchAllBio()
    }, [filterGender, filterDivision, searchAge, axiosPublic,currentPage,itemsPerPages])

    const handleItemsPerPages=e=>{
        // console.log(typeof e.target.value)
        const val = parseInt(e.target.value)
        // console.log(typeof val)
        setItemsPerPages(val)
        setCurrentPage(0)

    }
    const handlePre = ()=>{
        console.log(123)
        if(currentPage >0){

            setCurrentPage(currentPage -1)
        }
    }
    const handleNext = ()=>{
        console.log('Next')
        if(currentPage <pages.length-1){

            setCurrentPage(currentPage+1)
        }
    }
    // console.log(filterDivision)
    // if (isLoading) return 'Loading...'
    return (
        <div className='w-full p-5 flex flex-col lg:flex-row gap-5'>
            <div className='w-full lg:w-[25%]'> <BiodatasSidebar setFilterDivision={setFilterDivision} setFilterGender={setFilterGender} setSearchAge={setSearchAge}
                filterGender filterDivision searchAge></BiodatasSidebar>
            </div>
            <div className='w-full min-h-screen lg:w-[70%]'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        allBio.map(item => <PremiumCard item={item} key={item._id}></PremiumCard>)
                    }
                </div>
                <div className="pagination space-x-4 mt-5">
                    {/* <p>{currentPage}</p> */}
                    <button onClick={()=>handlePre()} className='btn bg-gray-700 text-white'>Pre</button>
                    {
                        pages.map(page=><button onClick={()=>setCurrentPage(page)} className={`btn bg-gray-700 text-white  ${currentPage === page && "bg-red-400"}`} key={page}>{page}</button>)
                    }
                    <button onClick={()=>handleNext()} className='btn bg-gray-700 text-white'>Next</button>
                    <select value={itemsPerPages} onChange={handleItemsPerPages} className='btn bg-gray-700 text-white'>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Biodatas;