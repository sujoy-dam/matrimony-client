import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Favourite = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: favourite = [], isLoading, refetch } = useQuery({
        queryKey: ['favourite', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/all-favourite/${user?.email}`)
           
            // refetch();
            
            return data
        }

    })
    if (isLoading) return "Loading..."
   
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                const { data } = await axiosSecure.delete(`/favourite-delete/${id}`)
                
                refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
        

    }
    return (
        <div>
            <div className="overflow-x-auto">
                {favourite.length === 0 ? <h1 className='text-center text-3xl font-bold'>You do not have favourite Biodata</h1> : <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Biodata Id</th>
                            <th>Permanent Address</th>
                            <th>Occupation</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            favourite.map((fav, index) => <tr key={fav._id}>
                                <th>{index + 1}</th>
                                <td>{fav.name}</td>
                                <td>{fav.biodataId}</td>
                                <td>{fav.PermanentAddress}</td>
                                <td>{fav.Occupation}</td>
                                <td><button onClick={() => handleDelete(fav._id)} className='btn'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>}
            </div>
            {/* favourite:{favourite.map(fav=>)} */}
        </div>
    );
};

export default Favourite;