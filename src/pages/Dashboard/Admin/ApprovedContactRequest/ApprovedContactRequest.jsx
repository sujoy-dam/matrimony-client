import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const ApprovedContactRequest = () => {
    const axiosSecure = useAxiosSecure()
    const { data: contact = [], isLoading, refetch } = useQuery({
        queryKey: ['contact'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/all-contact')
            return data
        }
    })
    const handleMakeApprove = async (id, preStatus, status) => {

        if (preStatus === status) {
            return toast.error("Status Already Approved")
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You Want to Approve Request",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {
                if (preStatus === "Approved") {
                    toast.error('Already Approved')
                }
                const { data } = await axiosSecure.patch(`/approve-status/${id}`, { status })
                toast.success('Request Accepted')
                refetch()
                Swal.fire({
                    title: "Successful",
                    text: "Approve Request Successfully",
                    icon: "success"
                });
            }
        });

    }
    return (
        <div className="w-full flex justify-center overflow-x-auto">
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra border-gray-800 border-2 w-full hidden sm:table">
                    {/* Table Head */}
                    <thead className="text-white">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th className="hidden sm:table-cell">Email</th>
                            <th className="hidden sm:table-cell">Biodata ID</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contact.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.userName}</td>
                                <td className="hidden sm:table-cell">{item.userEmail}</td>
                                <td className="hidden sm:table-cell">{item.biodataID}</td>
                                <td>{item?.status}</td>
                                <td>
                                    {item.status === "Approved" ? (
                                        <button className="btn btn-disabled">Disabled</button>
                                    ) : (
                                        <button
                                            onClick={() => handleMakeApprove(item._id, item.status, "Approved")}
                                            className="btn bg-gray-800 text-white"
                                        >
                                            Make Approved
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile View (Card Layout) */}
            <div className="flex-1 sm:hidden">
                {contact.map((item, index) => (
                    <div key={item._id} className="border p-3 mb-2 rounded-md shadow-md bg-gray-100">
                        <p>
                            <strong>{index + 1}. {item.userName}</strong>
                        </p>
                        <p>Status: {item?.status}</p>
                        {item.status !== "Pending" && (
                            <>
                                <p>Email: {item.userEmail}</p>
                                <p>Biodata ID: {item.biodataID}</p>
                            </>
                        )}
                        <button
                            className={`btn mt-2 ${item.status === "Approved" ? "btn-disabled" : "bg-gray-800 text-white"
                                }`}
                            onClick={() => handleMakeApprove(item._id, item.status, "Approved")}
                        >
                            {item.status === "Approved" ? "Disabled" : "Make Approved"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ApprovedContactRequest;