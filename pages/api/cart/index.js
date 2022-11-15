import withAuth from "../../../middlewares/withAuth";
import { dbConnect } from "../../../server/config";
import { getCustomerCartItems, updateCart } from "../../../server/controllers";
import { sendError, sendRequiredFieldError } from "../../../server/helper";

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  try {
    if (method == "GET") {
      const customer = req.body.userId;
      try {
        let cartItems = await getCustomerCartItems(customer);
        res.send({ message: "Data found", data: cartItems });
      } catch (error) {
        return sendError(res, error);
      }
    }

    if (method == "PATCH") {
      let { userId, items } = req.body;
      if (!userId || !items) return sendRequiredFieldError(res);
      try {
        let cartItem = await updateCart(userId, items);
        return res.send({ message: "cart updated", data: cartItem });
      } catch (error) {
        return sendError(res, error);
      }
    }
    return res.status(401).json({ message: "Not a valid route" });
  } catch (error) {
    return sendError(res, error);
  }
};
export default withAuth(handler);
