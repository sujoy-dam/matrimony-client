import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../../components/Form/CheckOutForm';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const [contact, setContact] = useState()
  const { user } = useAuth()
  const { id } = useParams()
  const axiosSecure = useAxiosSecure()
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: '{{CLIENT_SECRET}}',
  // };
  useEffect(() => {
    fetchData()
  }, [user?.email])
  const fetchData = async () => {
    const { data } = await axiosSecure.get(`/bio/${id}`)
    console.log(data)
    setContact(data)
  }
  // const handleContactSubmit = async (e) => {
  //   e.preventDefault()
  //   console.log('submit')
  //   const form = e.target;
  //   const name = contact.name
  //   const biodataId = form.biodataId.value;
  //   const selfEmail = form.selfEmail.value;
  //   const biodataEmail = contact.email;
  //   const mobileNo = contact.mobileNumber
  //   console.table({ name, biodataId, selfEmail, biodataEmail, mobileNo })
  //   const contactInfo = {
  //     name, biodataId, selfEmail, biodataEmail, mobileNo
  //   }
  //   try {
  //     // const { data } = await axiosSecure.post('/contact', contactInfo)
  //     console.log(data)
  //     toast.success('successfully requested to contact')
  //   } catch (err) {
  //     console.log(err)
  //   } finally {
  //     // something else 
  //   }
  // }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="w-96 bg-white shadow-xl p-6">
        <>
          <h2 className="text-xl font-bold text-center mb-4">Contact Form</h2>

          <label className="label">Biodata ID</label>
          <input type="text" name='biodataId' value={contact?.biodataId} readOnly className="input input-bordered w-full" />

          <label className="label mt-2">Self Email</label>
          <input type="email" name='selfEmail' value={user?.email} readOnly className="input input-bordered w-full" />

          <label className="label mt-2">Card Number</label>
          {/* <input type="text" placeholder="4242 4242 4242 4242" className="input input-bordered w-full" /> */}

          <Elements stripe={stripePromise} >
            <CheckoutForm contact={contact} />
          </Elements>

          {/* <button onClick={() => handleSubmit()} className="btn btn-primary w-full mt-4">Submit</button> */}
        </>
      </form>
    </div>
  );
};

export default Checkout;