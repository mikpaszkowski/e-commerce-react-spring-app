import * as React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import styled from "styled-components";

const StripeCheckoutBtn = styled(StripeCheckout)`
    align-self: flex-end;
    width: 20rem;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;;
    }
`;

const StripeButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    
`;


const StripeCheckoutButton = ({ price }) => {
    const stripePublishableKey = "pk_test_51J5FD1BOXDjxGnPSD21WDigHhQ38FoU91d0ggoy6hcMYHfrs7HRgQF3fQY0Kaziu1B3TPoecyMGegi5n0mEz9PaU00uFHQdt1i";
    const amount = price * 100;

    const onToken = (token) => {
        axios.post("http://localhost:9090/charge", {
            amount: amount,
            token
        })
        .then(res => {
            alert("Payment success");
            console.log(token);
        })
        .catch(err => {
            console.log(token);
            alert("Payment failed");
        })
    }

    return(
        <StripeButtonWrapper>
            <StripeCheckoutBtn 
            amount={amount}
            label="Pay Now"
            name="Shopify"
            billingAddress
            shippingAddress 
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is ${price}`}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={stripePublishableKey}
            currency="USD"
        />
        </StripeButtonWrapper>
    )
};

export default StripeCheckoutButton;
