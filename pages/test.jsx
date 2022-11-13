import { Button } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const test = () => {
  const initPayment = (data) => {
    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: data.amount,
      currency: data.currency,
      name: "book.name",
      description: "Test Transaction",
      image: "book.img",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:3000/api/orders/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = () => {
    const orderUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`;
    fetch(orderUrl, {
      method: "POST",
      body: JSON.stringify({ amount: 1111 }),
    })
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res);
        // initPayment(data.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Button onClick={handlePayment}>Buy</Button>
    </div>
  );
};

export default test;
