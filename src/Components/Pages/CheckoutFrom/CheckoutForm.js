import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const CheckoutForm = ({ price }) => {
    const notify = (message) => toast.error(message);
    const success = (message) => toast.success(message);
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
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            notify(error.message)

        } else {
            console.log('[PaymentMethod]', paymentMethod);
            success('Payment Done')
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
                <button type="submit" disabled={!stripe}>
                    Pay {price}
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;