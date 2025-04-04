import React, { useEffect, useState } from 'react';
import BiodatasSidebar from '../../components/Biodatas/BiodatasSidebar';
import PremiumCard from '../../components/Home/Premium/PremiumCard';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useLoaderData } from 'react-router-dom';
import baiodatBanner from "../../assets/images/biodataBanner.jpg"
import { Typewriter } from 'react-simple-typewriter'
import Heading from '../../components/Shared/Heading';

const Biodatas = () => {
    const axiosPublic = useAxiosPublic()
    const [allBio, setAllBio] = useState([])
    const [filterGender, setFilterGender] = useState("")
    const [filterDivision, setFilterDivision] = useState("")
    const [itemsPerPages, setItemsPerPages] = useState(6)
    const [searchAge, setSearchAge] = useState("")
    const [currentPage, setCurrentPage] = useState(0)

    const { totalBiodata } = useLoaderData()
    console.log(allBio)


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
    }, [filterGender, filterDivision, searchAge, axiosPublic, currentPage, itemsPerPages])

    const handleAge = e => {
        e.preventDefault()
        setSearchAge(e.target.age.value)
    }

    const handleItemsPerPages = e => {

        const val = parseInt(e.target.value)

        setItemsPerPages(val)
        setCurrentPage(0)

    }
    const handlePre = () => {

        if (currentPage > 0) {

            setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {

        if (currentPage < pages.length - 1) {

            setCurrentPage(currentPage + 1)
        }
    }

    // if (isLoading) return 'Loading...'
    return (
        <div className="container mx-auto">
            <div
                className="hero min-h-[600px]"
                style={{
                    backgroundImage: `url(${baiodatBanner})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="space-y-8">
                        <div className='space-y-3'>
                            <h1 className='text-4xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold'>Find Your Perfect <span className='text-lime-400 block md:inline'>
                                <Typewriter
                                    words={[' Match Today!', 'Match Now!', 'Life Partner!']}
                                    loop={false}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                // onLoopDone={handleDone}
                                // onType={handleType}
                                />
                            </span></h1>
                            <h1 className='text-lg'> Connect with like-minded people and build a happy future.</h1>
                            {/* <h1>Find Your Perfect Life Partner!</h1> */}
                        </div>
                        <div className=''> 
                            <BiodatasSidebar handleAge={handleAge} setFilterDivision={setFilterDivision} setFilterGender={setFilterGender} setSearchAge={setSearchAge}
                            filterGender filterDivision searchAge></BiodatasSidebar>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full p-5 my-10 min-h-screen flex items-center gap-5'>

                <div className='w-full'>
                    <Heading title={"All Biodatas"} subtitle={"Browse and explore matrimonial profiles to find your perfect match"} center={true}></Heading>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            allBio?.map(item => <PremiumCard item={item} key={item._id}></PremiumCard>)
                        }
                    </div>
                    {<div className="pagination space-x-4 mt-5">
                        {/* <p>{currentPage}</p> */}
                        <button onClick={() => handlePre()} className='btn bg-purple-500 text-white'>Pre</button>
                        {
                            pages?.map(page => <button onClick={() => setCurrentPage(page)} className={`btn bg-purple-500 text-white  ${currentPage === page && "bg-red-400"}`} key={page}>{page}</button>)
                        }
                        <button onClick={() => handleNext()} className='btn bg-purple-500 text-white'>Next</button>
                        <select value={itemsPerPages} onChange={handleItemsPerPages} className='btn bg-purple-500 text-white'>
                            <option value="5">6</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Biodatas;