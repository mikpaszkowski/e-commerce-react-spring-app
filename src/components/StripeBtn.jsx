import * as React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";


const StripeCheckoutButton = ({ price }) => {
    const stripePublishableKey = "pk_test_51J5FD1BOXDjxGnPSD21WDigHhQ38FoU91d0ggoy6hcMYHfrs7HRgQF3fQY0Kaziu1B3TPoecyMGegi5n0mEz9PaU00uFHQdt1i";
    const stripePrice = price * 100;

    const onToken = (token) => {
        axios.post("http://localhost:9090/charge", {
            amount: stripePrice,
            token
        })
        .then(res => {
            alert("Payment success");
        })
        .catach(err => {
            alert("Payment failed");
        })
    }

    return(
        <StripeCheckout 
            amount={stripePrice}
            label="Pay Now"
            name="Shopify"
            billingAddress
            shippingAddress 
            image="https://svgshare.com/i/CUz/svg"
            description={`Your total is ${price}`}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={stripePublishableKey}
            currency="USD"
        />
    )
};

export default StripeCheckoutButton;
