import { dbConnect } from "../../../configs/database";
import { getProductById } from "../../../server/controllers";
import { sendError } from "../../../server/helper";

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  if (method == "GET") {
    try {
      let product = await getProductById(req.query.prodId);
      return res.send({ message: "Product found", data: product });
    } catch (error) {
      return sendError(res, error);
    }
  }
  return sendError(res, 401, "Not a valid route");
};
export default handler;
