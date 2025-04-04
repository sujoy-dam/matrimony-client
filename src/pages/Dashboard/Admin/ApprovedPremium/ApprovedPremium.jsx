// import { useQueries } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ApprovedPremium = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { data: approvePremium, isLoading, refetch } = useQuery({
        queryKey: ['approvePremium'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/all-bios')
            console.log(data)
            const premiumReques = data.filter(item => item.status === 'Requested for Premium')
            return premiumReques
        }
    })
    const handleMakePremium = async (id, preStatus, role) => {

        Swal.fire({
            title: "Are you sure?",
            text: "Do You Want to Make Premium this Biodata?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const { data } = await axiosSecure.patch(`/update-user-role/${id}`, { role })
                console.log(data)
                refetch()
                Swal.fire({
                    title: "Successful",
                    text: "User make premium successfully.",
                    icon: "success"
                });
            }
        });


    }
    if (isLoading) return 'Loading...'
    return (
        <div>
            <div className="overflow-x-auto">
                {approvePremium?.length > 0 ? <table className="table">
                    {/* head */}
                    <thead className='bg-gray-800 text-white'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Biodata ID</th>
                            <th>Role</th>
                            <th>Biodata Status</th>
                            <th>Make Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            approvePremium.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.userEmail}</td>
                                <td>{item.biodataId}</td>
                                <td>{item?.userRole}</td>
                                <td>{item?.status}</td>
                                <td>
                                    {
                                        item?.userRole === 'Premium' ? <button className='btn btn-disabled'>Make Premium</button> : <button className='btn bg-gray-800 text-white' onClick={() => handleMakePremium(item?._id, item?.userRole, "Premium")}>Make Premium</button>
                                    }
                                </td>
                            </tr>)
                        }
                        {/* row 2 */}

                        {/* row 3 */}

                    </tbody>
                </table> : <h1 className='text-center text-3xl'>No Approval Request is Available</h1>}
            </div>

        </div>
    );
};

export default ApprovedPremium;