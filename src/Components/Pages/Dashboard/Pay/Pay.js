import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../../CheckoutFrom/CheckoutForm';
import { Grid } from '@mui/material'

const stripePromise = loadStripe('pk_test_51JwkKOBsuBLp8xZKznfcyJNwcyfiAgZAFCaqTt2g34rN3vth0ta6dtS1GiEu9b4gD3z6eTwucmPA9ddrzPVCltgL00hLMB2nJm')
const Pay = () => {
    const { user } = useAuth();
    const [load, setLoad] = useState(true);
    const [price, setPrice] = useState(0);
    const [clientSecret, setClientSecret] = useState('');
    console.log(user);
    useEffect(() => {
        axios.get(`https://enigmatic-headland-64217.herokuapp.com/orders?email=${user.email}`)
            .then(result => {
                let totalPrice = 0;
                result?.data.forEach(element => {
                    totalPrice += element.total;
                    console.log(totalPrice);
                });
                setLoad(false)
                setPrice(totalPrice)
            })
    }, []);
    useEffect(() => {
        axios.post('http://localhost:5000/create-payment-intent', { price })
            .then(res => setClientSecret(res?.data?.clientSecret))
    }, [price])
    console.log(clientSecret);
    return (
        <div className='flex justify-center'>
            <div className="md:w-1/2 sm:w-full rounded-lg shadow-lg p-4">
                <h3 className='mt-3 mb-10 text-center text-xl font-poppins'>Your Total Orders Price Is <span className='text-yellow-500'>${price}</span></h3>
                {
                    !load && <Elements stripe={stripePromise}>
                        <CheckoutForm price={price} clientSecret={clientSecret} ></CheckoutForm>
                    </Elements>
                }
            </div>
        </div>
    );
};

export default Pay;