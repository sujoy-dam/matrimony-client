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
            return data

        }

    })
    console.log(users)
    if (isLoading) return "Loading..."
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
                if (preStatus === "Premium") {
                    return toast.error('You have already Premium member')
                }
                const { data } = await axiosSecure.patch(`/update-user-role/${id}`, { role })
                refetch()
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
        Swal.fire({
            title: "Are you sure?",
            text: "Do You Want to Make Admin this user?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {
                if (preStatus === 'Admin') {
                    return toast.error('You have already admin')
                }
                const { data } = await axiosSecure.patch(`/update-user-role/${id}`, { role })
                refetch()
                toast.success('Status Updated Successfully')
                Swal.fire({
                    title: "Successful",
                    text: "User make Admin successfully.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className="w-full overflow-x-auto">
            <table className="table table-xs border w-full table-auto hidden sm:table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th className="hidden sm:table-cell">Email</th>
                        <th>User Role</th>
                        <th className="hidden sm:table-cell">User Status</th>
                        <th>Make Admin</th>
                        <th>Make Premium</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td className="hidden sm:table-cell">{user.userEmail}</td>
                            <td>{user.userRole}</td>
                            <td className="hidden sm:table-cell">{user?.status || "Unavailable"}</td>
                            <td>
                                {user.userRole === "Admin" ? (
                                    <button className="btn disabled">Disabled</button>
                                ) : (
                                    <button
                                        onClick={() => handleMakeAdmin(user._id, user.userRole, "Admin")}
                                        className="btn bg-gray-800 text-white"
                                    >
                                        Make Admin
                                    </button>
                                )}
                            </td>
                            <td>
                                {user.userRole === "Premium" ? (
                                    <button className="btn disabled">Disabled</button>
                                ) : (
                                    <button
                                        onClick={() => handleMakePremium(user._id, user.userRole, "Premium")}
                                        className="btn bg-gray-800 text-white"
                                    >
                                        Make Premium
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Mobile-friendly card layout */}
            <div className="block sm:hidden">
                {users.map((user, index) => (
                    <div key={user._id} className="border p-3 mb-2 rounded-md">
                        <p><strong>{index + 1}. {user.name}</strong></p>
                        <p>Email: {user.userEmail}</p>
                        <p>Role: {user.userRole}</p>
                        <p>Status: {user?.status || "Unavailable"}</p>
                        <div className="flex gap-2 mt-2">
                            <button className={`btn ${user.userRole === "Admin" ? "disabled" : "bg-gray-800 text-white"}`}>
                                {user.userRole === "Admin" ? "Disabled" : "Make Admin"}
                            </button>
                            <button className={`btn ${user.userRole === "Premium" ? "disabled" : "bg-gray-800 text-white"}`}>
                                {user.userRole === "Premium" ? "Disabled" : "Make Premium"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageUsers;