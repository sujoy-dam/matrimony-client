import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const Favourite = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: favourite = [], isLoading, refetch } = useQuery({
        queryKey: ['favourite', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/all-favourite/${user?.email}`)
            // console.log(typeof data)
            // refetch();
            // console.log(data[0].item)
            return data
        }

    })
    if(isLoading) return "Loading..."
    console.log(favourite)
    const handleDelete = async(id)=>{
        console.log(id)
        const {data}=await axiosSecure.delete(`/favourite-delete/${id}`)
        console.log(data)
        refetch()
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
                            <th>Biodata Id</th>
                            <th>Permanent Address</th>
                            <th>Occupation</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        favourite.map((fav,index)=> <tr key={fav._id}>
                        <th>{index+1}</th>
                        <td>{fav.name}</td>
                        <td>{fav.biodataId}</td>
                        <td>{fav.PermanentAddress}</td>
                        <td>{fav.Occupation}</td>
                        <td><button onClick={()=>handleDelete(fav._id)} className='btn'>Delete</button></td>
                    </tr>)
                       }
                    </tbody>
                </table>
            </div>
            {/* favourite:{favourite.map(fav=>)} */}
        </div>
    );
};

export default Favourite;