import React from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const ContactRequest = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: contact = [], refetch, isLoading } = useQuery({
        queryKey: ['contact', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/contact/${user?.email}`)

            return data
        }
    })

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await axiosSecure.delete(`/delete-contact/${id}`)

                    toast.success("Deleted Successfully")
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                } catch (err) {
                    toast.error(err)
                }

            }
        });


    }
    return (
        <div>
            <div className="overflow-x-auto">
                {contact.length === 0 ? <h1 className='text-center text-3xl font-bold'>You do not have contact request</h1> : <table className="table">
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
                            contact.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <th>{item.biodataName}</th>
                                <th>{item.biodataID}</th>
                                <th>{item.status}</th>
                                <th>{item?.status === 'Approved' ? item.mobileNo : 'Pending'}</th>
                                <th>{item?.status === 'Approved' ? item.biodataEmail : 'Pending'}</th>
                                <th><button className='btn' onClick={() => handleDelete(item._id)}>Delete</button></th>
                            </tr>)
                        }
                        {/* row 2 */}

                    </tbody>
                </table>}
            </div>
        </div>
    );
};

export default ContactRequest;