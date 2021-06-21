import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51J4HNtJkJrH7ncqWFDoXRj2nTBrORFMYDJh7wChrGTWYCW2LKTAkjnqWzRsM4hcSmz6AnfYMpI9Y2hC7hZLrnRd4001SQxA1yq";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Style S Co."
      locale="ca"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      bitcoin
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
