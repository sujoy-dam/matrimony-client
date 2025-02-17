import React, { useEffect, useState } from 'react';
import useUserBio from '../../../../hooks/useUserBio';
import ViewBiodataCard from './ViewBiodataCard';
import Modal from '../../../../components/Modal/Modal';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';

const ViewBiodata = () => {
    // const [refetch, userBios] = useUserBio()
    const axiosSecure = useAxiosSecure()
    const {user}=useAuth()
    const [bio, setBio]=useState([])
    // const [refetch,userBios]=useUserBio()

    useEffect(()=>{
       fetchBio() 
    },[user?.email])
    const fetchBio = async()=>{
        const {data}=await axiosSecure.get(`/bio-get/${user?.email}`)
        console.log(data)
        setBio(data)
    }
    let [isOpen, setIsOpen] = useState(false)
    console.log(bio)
  
    return (
        <div>
            {bio.length===0 ?<h1 className='text-center text-3xl font-bold'>You do not have biodata</h1>: <button className='btn bg-gray-800 text-white' onClick={() => setIsOpen(true)}>Make biodata to premium</button>}
            {/* <button className='btn btn-primary' onClick={() => setIsOpen(true)}>Make biodata to premium</button> */}
            {/* <button className='btn btn-primary'>Make biodata to premium</button> */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>

                {
                   bio.map(item => <ViewBiodataCard item={item} key={item._id}></ViewBiodataCard>)
                }
                {/* {bio && <ViewBiodataCard item={bio}></ViewBiodataCard>} */}
            </div>
            <Modal setIsOpen={setIsOpen} isOpen={isOpen}></Modal>
        </div>
    );
};

export default ViewBiodata;