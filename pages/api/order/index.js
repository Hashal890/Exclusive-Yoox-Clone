import withAuth from "../../../middlewares/withAuth";
import { dbConnect } from "../../../server/config";
import {
  addOrder,
  clearCustomerCart,
  getCustomerCartItems,
  getOrder,
} from "../../../server/controllers";
import { sendError } from "../../../server/helper";

import Razorpay from "razorpay";
import crypto from "crypto";

let RazorpayInstance = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORYPAY_KEY_ID,
  key_secret: process.env.NEXT_PUBLIC_RAZORYPAY_KEY_SECRET,
});

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  try {
    if (method == "GET") {
      let customer = req.body.userId;
      let customerOrder = await getOrder("customer", customer);
      return res.send({ message: "order found", data: customerOrder });
    }

    if (method == "POST") {
      let { userId, address } = req.body;

      let customerCartItems = await getCustomerCartItems(req.body.userId);
      let items = customerCartItems[0].items;
      if (!items.length) return res.status(400).send({ message: "Cart can not be empty" });
      let amount = items.reduce((acc, el) => acc + el.item.current_price * el.quantity, 0);

      //razorpay options
      const options = {
        amount: amount * 100,
        currency: "INR",
        receipt: crypto.randomBytes(10).toString("hex"),
      };

      //order options
      let orderData = {
        customer: userId,
        amount,
        items,
        deliveryAddress: address,
      };

      await addOrder(orderData);
      await clearCustomerCart(userId);

      return RazorpayInstance.orders.create(options, (error, order) => {
        if (error) return res.status(500).send({ message: "Something Went Wrong!" });
        return res.send({ message: "Order created", data: order });
      });
      console.log(4);
    }
    return res.status(401).json({ message: "Not a valid route" });
  } catch (error) {
    return sendError(res, error);
  }
};

export default withAuth(handler);
