import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const ApprovedContactRequest = () => {
    const axiosSecure = useAxiosSecure()
    const { data: contact = [], isLoading, refetch } = useQuery({
        queryKey: ['contact'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/all-contact')
            console.log(data)
            return data
        }
    })
    const handleMakeApprove = async (id, preStatus, status) => {
        console.table({ id, preStatus, status })
        if (preStatus === "Approved") {
            toast.error('Already Approved')
        }
        const { data } = await axiosSecure.patch(`/approve-status/${id}`, { status })
        toast.success('Request Accepted')
        refetch()
        console.log(data)
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Biodata ID</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            contact.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.userName}</td>
                                <td>{item.userEmail}</td>
                                <td>{item.biodataID}</td>
                                <td>{item?.status}</td>
                                <td>
                                    <button onClick={() => handleMakeApprove(item?._id, item?.status, "Approved")} className='btn btn-secondary'>Make Approved</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApprovedContactRequest;