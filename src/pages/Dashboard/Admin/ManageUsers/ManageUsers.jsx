import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure('/all-bios')
            // const request = data.filter(item=>item?.status ==="Pending")
            return data
            // return request
        }

    })
    if (isLoading) return "Loading..."
    const handleMakePremium = async (id, preStatus, role) => {
        // console.table({ id, preStatus, role })
        Swal.fire({
            title: "Are you sure?",
            text: "Do You Want to Make Premium this Biodata?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async(result) => {
            if (result.isConfirmed) {
                if (preStatus === "Premium") {
                    return toast.error('You have already Premium member')
                }
                const { data } = await axiosSecure.patch(`/update-user-role/${id}`, { role })
                refetch()
                // console.log(data)
                toast.success('Status Updated Successfully')
                Swal.fire({
                    title: "Successful",
                    text: "User make premium successfully.",
                    icon: "success"
                });
            }
        });
        
    }
    const handleMakeAdmin = async (id, preStatus, role,) => {
        // console.table({ id, preStatus, role })
        Swal.fire({
            title: "Are you sure?",
            text: "Do You Want to Make Admin this user?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then(async(result) => {
            if (result.isConfirmed) {
                if (preStatus === 'Admin') {
                    return toast.error('You have already admin')
                }
                const { data } = await axiosSecure.patch(`/update-user-role/${id}`, { role })
                refetch()
                // console.log(data)
                toast.success('Status Updated Successfully')
              Swal.fire({
                title: "Successful",
                text: "User make Admin successfully.",
                icon: "success"
              });
            }
          });
    }
    // console.log(users)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table border-gray-800 border-2">
                    {/* head */}
                    <thead className='bg-gray-800 text-white'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Role</th>
                            <th>User Status</th>
                            <th>Make admin</th>
                            <th>Make Premium</th>
                        </tr>
                    </thead>
                    <tbody className='border-gray-800 border-b-2'>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.userEmail}</td>
                                <td>{user.userRole}</td>
                                <td>{user?.status ? user.status : "Unavailable"}</td>
                                {/* make Admin button  */}
                                <td>
                                    {
                                        user.userRole === "Admin" ? <button className='btn disabled'>Disabled</button> : <button onClick={() => handleMakeAdmin(user._id, user.userRole, "Admin")} className='btn bg-gray-800 text-white'>Make Admin</button>
                                    }
                                </td>
                                {/* make Prmium Button  */}
                                <td>
                                    {
                                        user.userRole === "Premium" ? <button className='btn disabled'>Disabled</button> : <button onClick={() => handleMakePremium(user._id, user.userRole, "Premium",)} className='btn bg-gray-800 text-white'>Make Premium</button>
                                    }
                                </td>
                                {/* <td><button onClick={handleMakePremium} className='btn bg-red-400'>Make Premium</button></td> */}
                            </tr>)
                        }
                        {/* row 2 */}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;