import { Button } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { axiosInstance } from "../utils/axiosConfig";

const test = () => {
  const initPayment = (data) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORYPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "book.name",
      description: "Test Transaction",
      image: "book.img",
      order_id: data.id,
      handler: async (response) => {
        try {
          const { data } = await axiosInstance.post("/api/orders/verify", response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#C15CE5",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const { data } = await axiosInstance.post("/api/orders", { address: "My address" });
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={handlePayment}>Buy</Button>
    </div>
  );
};

export default test;
