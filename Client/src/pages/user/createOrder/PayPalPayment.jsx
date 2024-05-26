import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { postAPI } from "../../../config/api";
import axios from "axios";

function PayPalPayment() {


  const createOrder = async () => {
    try {
      // const response = await fetch(
      //   "http://localhost:8080/api/paypal/my-server/create-paypal-order",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     // use the "body" param to optionally pass additional order information
      //     // like product ids and quantities
      //     body: JSON.stringify({
      //       product: {
      //         description: "Thanh toán qua PayPal",
      //         price: "101.00",
      //       },
      //     }),
      //   }
      // );
      const response = await axios.post("http://localhost:8080/api/paypal/my-server/create-paypal-order", 
        {
          product: {
            description: "Thanh toán qua PayPal",
            price: "101.00",
          },
        }
      )
      console.log(response)

      const orderData = response.data

      console.log(39, orderData , orderData.id)
      if (!orderData.id) {
        throw new Error("Unexpected error occurred, please try again.");
      }

      return orderData.id;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const onApprove = async (data) => {
    // Capture the funds from the transaction.
    const response = await fetch("http://localhost:8080/api/paypal/my-server/capture-paypal-order", {
      method: "POST",
      body: JSON.stringify({
        orderID: data.id,
      }),
    });

    const details = response;
    // Show success message to buyer
    alert(`Thanh toán thành công bởi PayPal `);
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </PayPalScriptProvider>
  );
}

export default PayPalPayment;
