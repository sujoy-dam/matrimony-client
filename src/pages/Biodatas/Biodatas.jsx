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
    const [itemsPerPages, setItemsPerPages]=useState(6)
    const [searchAge, setSearchAge] = useState("")
    const [currentPage,setCurrentPage]=useState(0)
    
    const { totalBiodata } = useLoaderData()
    
    
    const numberOfPages = Math.ceil(totalBiodata / itemsPerPages)
    
    const pages = []
    for (let i = 0; i < numberOfPages; i++) {
        pages.push(i)
    }
    useEffect(() => {
        const fetchAllBio = async () => {
            const { data } = await axiosPublic.get(`/all-bios?filterGender=${filterGender}&filterDivision=${filterDivision}&searchAge=${searchAge}&page=${currentPage}&size=${itemsPerPages}`)
            setAllBio(data)
        }
        fetchAllBio()
    }, [filterGender, filterDivision, searchAge, axiosPublic,currentPage,itemsPerPages])

    const handleAge=e=>{
        e.preventDefault()
        setSearchAge(e.target.age.value)
    }

    const handleItemsPerPages=e=>{
       
        const val = parseInt(e.target.value)
       
        setItemsPerPages(val)
        setCurrentPage(0)

    }
    const handlePre = ()=>{
       
        if(currentPage >0){

            setCurrentPage(currentPage -1)
        }
    }
    const handleNext = ()=>{
        
        if(currentPage <pages.length-1){

            setCurrentPage(currentPage+1)
        }
    }
   
    // if (isLoading) return 'Loading...'
    return (
        <div className='w-full p-5 flex flex-col lg:flex-row gap-5'>
            <div className='w-full lg:w-[25%]'> <BiodatasSidebar handleAge={handleAge} setFilterDivision={setFilterDivision} setFilterGender={setFilterGender} setSearchAge={setSearchAge}
                filterGender filterDivision searchAge></BiodatasSidebar>
            </div>
            <div className='w-full min-h-screen lg:w-[70%]'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        allBio.map(item => <PremiumCard item={item} key={item._id}></PremiumCard>)
                    }
                </div>
                {<div className="pagination space-x-4 mt-5">
                    {/* <p>{currentPage}</p> */}
                    <button onClick={()=>handlePre()} className='btn bg-gray-700 text-white'>Pre</button>
                    {
                        pages.map(page=><button onClick={()=>setCurrentPage(page)} className={`btn bg-gray-700 text-white  ${currentPage === page && "bg-red-400"}`} key={page}>{page}</button>)
                    }
                    <button onClick={()=>handleNext()} className='btn bg-gray-700 text-white'>Next</button>
                    <select value={itemsPerPages} onChange={handleItemsPerPages} className='btn bg-gray-700 text-white'>
                        <option value="5">6</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>}
            </div>
        </div>
    );
};

export default Biodatas;