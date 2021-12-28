import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../../CheckoutFrom/CheckoutForm';

const stripePromise = loadStripe('pk_test_51JwkKOBsuBLp8xZKznfcyJNwcyfiAgZAFCaqTt2g34rN3vth0ta6dtS1GiEu9b4gD3z6eTwucmPA9ddrzPVCltgL00hLMB2nJm')
const Pay = () => {
    const { user } = useAuth();
    const [load, setLoad] = useState(true);
    const [price, setPrice] = useState(0);
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
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Pay;