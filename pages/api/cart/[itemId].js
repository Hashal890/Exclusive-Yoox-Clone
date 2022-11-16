import withAuth from "../../../middlewares/withAuth";
import { dbConnect } from "../../../server/config";
import { addItemToCart, getCustomerCartItems } from "../../../server/controllers";
import { sendError } from "../../../server/helper";

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  try {
    if (method == "POST") {
      const customer = req.body.userId;
      const itemId = req.query.itemId;

      let cartItems = await getCustomerCartItems(customer);
      let checkItemExist = cartItems[0].items.find((el) => el.item._id == itemId);
      if (!checkItemExist) cartItems = await addItemToCart(customer, itemId);
      return res.send({ message: "Item added successfully" });
    }
    return res.status(401).json({ message: "Not a valid route" });
  } catch (error) {
    return sendError(res, error);
  }
};
export default withAuth(handler);
