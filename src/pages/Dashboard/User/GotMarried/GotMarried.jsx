import { Button, Input, Textarea } from '@headlessui/react';
import React from 'react';
import { imageUpload } from '../../../../api/utiles';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const GotMarried = () => {
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add API call or database update logic here
    const form = e.target
    const selfBiodataID = form.selfBiodataId.value;
    const partnerBiodataID = form.partnerBiodataId.value;
    const coupleImage = await imageUpload(form.coupleImage.files[0])
    const storyReview = form.storyReview.value;
    const dateOfMarriage = form.dateOfMarriage.value;
    const gotMarriedInfo = {
      selfBiodataID,
      partnerBiodataID,
      coupleImage,
      storyReview,
      dateOfMarriage
    }

    try {
      const { data } = await axiosSecure.post(`/got-married`, gotMarriedInfo)

      // navigate('/dashboard/view')
      toast.success('Added successfully')
    } catch (err) {

      toast.error(err.response.data)
    }
  };
  return (
    <div className=" mx-auto p-6 bg-teal-700 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Share Your Success Story</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-x-8 gap-y-4">
        <div className="col-span-12 md:col-span-6 space-y-3">
          <label className=" font-medium">Self Biodata ID</label>
          <Input
            type="number"
            name="selfBiodataId"
            placeholder="Self Biodata ID"
            // value={formData.selfBiodataId}
            // onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className='col-span-12 md:col-span-6 space-y-3'>
          <label className="font-medium">Partmer Biodata ID</label>
          <Input
            type="number"
            name="partnerBiodataId"
            placeholder="Partner Biodata ID"
            // value={formData.partnerBiodataId}
            // onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="col-span-12 md:col-span-6 space-y-3">
          <label className="font-medium">Couple Image</label>
          <Input
            type="file"
            name="coupleImage"
            placeholder="Couple Image URL"
            // value={formData.coupleImage}
            // onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="col-span-12 md:col-span-6 space-y-3">
          <label className="font-medium">Date of Marriage</label>
          <Input
            type="date"
            name="dateOfMarriage"
            placeholder='Marriage Date'
            // value={formData.dateOfBirth}
            // onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="col-span-12 space-y-3">
          <label className="font-medium">Share your feeling</label>
          <Textarea
            name="storyReview"
            placeholder="Share your feelings about using this website..."
            // value={formData.storyReview}
            // onChange={handleChange}
            className="textarea textarea-bordered w-full"
            required
          />
        </div>
        <>
          <Button type="submit" className="btn col-span-2 btn-accent w-full">
            Submit
          </Button>
        </>
      </form>
    </div>
  );
};

export default GotMarried;