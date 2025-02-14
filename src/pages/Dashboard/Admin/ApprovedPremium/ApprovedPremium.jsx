// import { useQueries } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

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
    console.log(approvePremium)
    const handleMakePremium = async (id, preStatus, role) => {
        console.table({ id, preStatus, role })
        // if(preStatus === Pre)
        const { data } = await axiosSecure.patch(`/update-bios-status/${id}`, { role})
        refetch()
        console.log(data)
    }
    if(isLoading) return 'Loading...'
    return (
        <div>
            <div className="overflow-x-auto">
                {approvePremium.length>0?<table className="table">
                    {/* head */}
                    <thead>
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
                                <td>{item.email}</td>
                                <td>{item.biodataId}</td>
                                <td>{item?.userRole}</td>
                                <td>{item?.status}</td>
                                <td>
                                    {
                                        item?.role === 'Premium'?<button className='btn btn-disabled'>Make Premium</button>:<button className='btn btn-primary' onClick={()=>handleMakePremium(item?._id,item?.userRole,"Premium")}>Make Premium</button>
                                    }
                                </td>
                            </tr>)
                        }
                        {/* row 2 */}
                       
                        {/* row 3 */}
                      
                    </tbody>
                </table>:<h1 className='text-center text-3xl'>No Approval Request is Available</h1>}
            </div>

        </div>
    );
};

export default ApprovedPremium;