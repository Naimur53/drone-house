import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';


const CheckoutForm = ({ price, clientSecret }) => {
    const { user } = useAuth()
    const notify = (message) => toast.error(message);
    const success = (message) => toast.success(message);
    const [payStatus, setPayStatus] = useState(false)

    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        setPayStatus(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            notify(error.message)
            setPayStatus(false);

        } else {
            setPayStatus('processing');

        }
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: user.email
                    },
                },
            },
        );
        if (intentError) {
            notify(intentError.message);
            setPayStatus(false);
        }
        else {
            success('Success fully payment done')
            setPayStatus("success");
            axios.put(`https://enigmatic-headland-64217.herokuapp.com/payment/${user.email}`, {
                amount: paymentIntent.amount,
                client_secret: paymentIntent.client_secret.slice('_secret')[0],
                payment_method_types: paymentIntent?.payment_method_types[0],
                last4: paymentMethod?.card?.last4
            })
        }

    };
    return (
        <div className='text-center'>
            <ToastContainer />
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
                {
                    payStatus === true ? <Button className='hover:border-gray-400 bg-rose-600 hover:text-gray-500 w-full' sx={{ mt: 2, color: 'black', border: '1px solid', borderColor: 'black' }}   >
                        <CircularProgress sx={{ width: "20px", height: '20px', mr: 2 }} size="30"></CircularProgress>
                        Pay ${price}
                    </Button> : <Button className='hover:border-gray-400  hover:text-gray-500 w-full' sx={{ mt: 2, color: 'black', border: '1px solid', borderColor: 'black' }} type="submit" disabled={!stripe || payStatus === 'success'}>
                        Pay ${price}
                    </Button>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;