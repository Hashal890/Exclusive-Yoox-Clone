import { Button } from "@chakra-ui/react";
import React from "react";
import { axiosInstance } from "../../utils/axiosConfig";

const test = () => {
  const initPayment = (data) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORYPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "Yoox Order Payment",
      description: "Test Transaction",
      image: "https://www.psdstamps.com/wp-content/uploads/2022/04/grunge-exclusive-label-png.png",
      order_id: data.id,
      handler: async (response) => {
        try {
          const { data } = await axiosInstance.post("/api/order/verify", response);
          // console.log(data);
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
      const res = await axiosInstance.post("/api/order", { address: "My address" });
      console.log(res.data);
      initPayment(res.data.data);
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
