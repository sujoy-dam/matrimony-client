import React, { useEffect, useState } from 'react';
// import {loadStripe} from '@stripe/stripe-js';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './ChechoutForm.css';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ contact }) => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState("")
    const { user } = useAuth()
    const navigate = useNavigate()
    const stripe = useStripe();
    const elements = useElements();

    const axiosSecure = useAxiosSecure()
    // return
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: 5 })
            .then(res => {

                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure])
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        setError('')
        console.log(contact)

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
            toast.error(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }
        // confirm payment 
        const { paymentIntent, confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error')
        } else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log(paymentIntent.id)
                const paymentInfo = {
                    userEmail: user?.email,
                    userName: user?.displayName,
                    biodataEmail: contact?.userEmail,
                    mobileNo: contact?.mobileNumber,
                    biodataID: contact?.biodataId,
                    transactionID: paymentIntent.id,
                    payment_amount:parseInt(5),
                    status: 'pending'

                }
                console.table(paymentInfo)
                try {
                    const { data } = await axiosSecure.post('/contact', paymentInfo)
                    console.log(data)
                    toast.success('Successfully requested to contact')
                    navigate('/dashboard/my_contact_request')
                } catch (err) {
                    console.log(err)
                } finally {
                    // something else 
                }
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button onClick={handleSubmit} type="submit" disabled={!stripe || !clientSecret} className="btn btn-primary w-full mt-4">Pay 5$</button>
            {/* <button type="submit" disabled={!stripe}>
                Pay
            </button> */}
            {error && <p>{error}</p>}
        </form>
    );
};


export default CheckoutForm;