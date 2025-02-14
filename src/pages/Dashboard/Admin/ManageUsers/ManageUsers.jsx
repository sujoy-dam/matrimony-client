import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], isLoading,refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure('/all-bios')
            // const request = data.filter(item=>item?.status ==="Pending")
            return data
            // return request
        }

    })
    if(isLoading) return "Loading..."
    const handleMakePremium = async (id, preStatus, role) => {
        console.table({ id, preStatus, role })
        if(preStatus === "Premium"){
            return toast.error('You have already Premium member')
        }
        const { data } = await axiosSecure.patch(`/update-user-role/${id}`, { role})
        refetch()
        console.log(data)
        toast.success('Status Updated Successfully')
    }
    const handleMakeAdmin = async (id, preStatus, role,) => {
        console.table({ id, preStatus, role })
        if(preStatus === 'Admin'){
            return toast.error('You have already admin')
        }
        const { data } = await axiosSecure.patch(`/update-user-role/${id}`, { role})
        refetch()
        console.log(data)
        toast.success('Status Updated Successfully')
    }
    console.log(users)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
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
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.userEmail}</td>
                                <td>{user.userRole}</td>
                                <td>{user.status? user.status:"Unavailable"}</td>
                                {/* make Admin button  */}
                                <td>
                                    {
                                        user.userRole === "Admin" ? <button className='btn disabled'>Make Admin</button> : <button onClick={() => handleMakeAdmin(user._id, user.userRole, "Admin")} className='btn bg-red-400'>Make Admin</button>
                                    }
                                </td>
                                {/* make Prmium Button  */}
                                <td>
                                    {
                                        user.userRole === "Premium" ? <button className='btn disabled'>Make Premium</button> : <button onClick={() => handleMakePremium(user._id, user.userRole, "Premium",)} className='btn bg-red-400'>Make Premium</button>
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