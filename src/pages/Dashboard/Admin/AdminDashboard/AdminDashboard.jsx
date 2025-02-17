import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { TfiMoney } from 'react-icons/tfi';
import { MdOutlineWorkspacePremium } from 'react-icons/md';
import { FaFemale, FaMale } from 'react-icons/fa';
import { IoDocumentOutline } from 'react-icons/io5';

const AdminDashboard = () => {
    const axiosSecure = useAxiosSecure()
    const { data: total = [], isLoading, refetch } = useQuery({
        queryKey: ['total'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/admin-state')
            console.log(data)
            refetch()
            return data;
        }
    })
    if(isLoading) return "Loading..."
    return (
        <div>
            <div className='flex justify-between text-white flex-wrap gap-4'>
                <div className="stats bg-gray-800 shadow duration-200 hover:scale-110">
                    <div className="stat text-white">
                        <div className="stat-title text-white text-4xl">Total Biodata</div>
                        <div className="stat-value flex justify-between items-center"><span className='border-4 bg-green-300 rounded-lg p-2'><IoDocumentOutline /></span>{total.totalBiodata}</div>
                        {/* <div className="stat-desc">21% more than last month</div> */}
                    </div>
                </div>
                <div className="stats shadow bg-gray-800 duration-200 hover:scale-110">
                    <div className="stat text-white">
                        <div className="stat-title text-white text-4xl">Total Male</div>
                        <div className="stat-value flex justify-between items-center"><span className='border-4 bg-green-300 rounded-lg p-2'><FaMale /></span>{total.totalMale}</div>
                        {/* <div className="stat-desc">21% more than last month</div> */}
                    </div>
                </div>
                <div className="stats shadow bg-gray-800 duration-200 hover:scale-110">
                    <div className="stat text-white">
                        <div className="stat-title text-white text-4xl">Total Female</div>
                        <div className="stat-value flex justify-between items-center"><span className='border-4 bg-green-300 rounded-lg p-2'><FaFemale /></span>{total.totalFemale}</div>
                        {/* <div className="stat-desc">21% more than last month</div> */}
                    </div>
                </div>
                <div className="stats shadow bg-gray-800 duration-200 hover:scale-110">
                    <div className="stat text-white">
                        <div className="stat-title text-white text-4xl">Total Premium</div>
                        <div className="stat-value flex justify-between items-center"><span className='border-4 bg-green-300 rounded-lg p-2'><MdOutlineWorkspacePremium /></span>{total.totalPremium}</div>
                        {/* <div className="stat-desc">21% more than last month</div> */}
                    </div>
                </div>
                <div className="stats shadow bg-gray-800 duration-200 hover:scale-110">
                    <div className="stat text-white">
                        <div className="stat-title text-white text-4xl">Total Revenue</div>
                        <div className="stat-value flex justify-between items-center"><span className='border-4 bg-green-300 rounded-lg p-2'><TfiMoney /></span>{total.totalRevenue}</div>
                        {/* <div className="stat-desc">21% more than last month</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;