import { Box, Button, Container } from "@material-ui/core";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import useStyles from "./PayPageStyles";
import { showForm } from "../../utils/function";
const PayPage = () => {
  const classes = useStyles();
  const stripe = useStripe();
  const elements = useElements();
  const [billingDetails, setBillingDetails] = useState([
    {
      name: "email",
      value: "",
      type: "email",
    },
    {
      name: "name",
      value: "",
    },
    {
      name: "phone",
      value: "",
      required: false,
      type: "number",
    },
  ]);
  const payHendler = async (e) => {
    e.preventDefault();
    console.log(`stripe`, stripe);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: billingDetails.reduce(
        (acc, item) => ({
          ...acc,
          [item.name]: item.value,
        }),
        {}
      ),
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <Container className={classes.wrapper}>
      <form onSubmit={payHendler} className={classes.form}>
        <Box className={classes.fieldsGroup}>
          {showForm(billingDetails, setBillingDetails)}
        </Box>
        <CardElement className={classes.cardField} />
        <Button type="submit" disabled={!stripe}>
          Pay
        </Button>
      </form>
    </Container>
  );
};

export default PayPage;
