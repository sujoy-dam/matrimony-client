import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const SuccessStory = () => {
  const axiosSecure = useAxiosSecure()

  const {data:married=[],isLoading,refetch}=useQuery({
    queryKey:['married'],
    queryFn:async()=>{
        const {data}= await axiosSecure.get(`/all-married`)
        return data
    }
})
  
  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 border-gray-800 border-4 mb-10 rounded-xl">
      <h2 className="text-4xl font-bold text-center mb-6">Marriage Success Stories</h2>
      <h2 className="text-2xl font-bold text-center mb-6">Recent Couples</h2>
      <div className="grid md:grid-cols-3 gap-6 text-white">
        {
          married.map(item => <div key={item._id} className="shadow-lg  bg-gray-700 rounded-2xl p-6 space-y-4">
            {/* Image */}
            <img
              src={item.coupleImage}
              // alt={name}
              className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-gray-300"
            />

            {/* Name & Marriage Date */}
            <div className="text-center">
              {/* <h2 className="text-xl font-semibold">{name}</h2> */}
              <p className="">Married on: {item?.dateOfMarriage}</p>
            </div>

            {/* Star Rating */}
            {/* <div className="flex justify-center space-x-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <span key={i}>{i < rating ? "★" : "☆"}</span>
            ))}
          </div> */}

            {/* Success Story */}
            <p className="text-center">{item.storyReview}</p>
          </div>)
        }
      </div>
    </div>
  );
};

export default SuccessStory;