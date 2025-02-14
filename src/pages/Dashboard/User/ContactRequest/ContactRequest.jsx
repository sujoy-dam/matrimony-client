import React from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';

const ContactRequest = () => {
    const {user}=useAuth()
    const axiosSecure = useAxiosSecure()
    const {data:contact=[],refetch, isLoading}=useQuery({
        queryKey:['contact', user?.email],
        queryFn:async()=>{
            const {data}=await axiosSecure.get(`/contact/${user?.email}`)
            console.log(data)
            return data
        }
    })
    console.log(contact)
    const handleDelete = async(id)=>{
        console.log(id)
        try{
            const {data}=await axiosSecure.delete(`/delete-contact/${id}`)
            console.log(data)
            refetch()
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>BiodataId</th>
                            <th>Status</th>
                            <th>Mobile No</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            contact.map((item,index)=><tr key={item._id}>
                            <th>{index+1}</th>
                            <th>{item.userName}</th>
                            <th>{item.biodataID}</th>
                            <th>{item.status}</th>
                            <th>{item?.status=== 'Approved'? item.mobileNo:'Pending'}</th>
                            <th>{item?.status=== 'Approved'? item.biodataEmail:'Pending'}</th>
                            <th><button onClick={()=>handleDelete(item._id)}>Delete</button></th>
                        </tr>)
                        }
                        {/* row 2 */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactRequest;