import { dbConnect } from "../../../server/config";
import { getProductById } from "../../../server/controllers";
import { sendError } from "../../../server/helper";

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  try {
    if (method == "GET") {
      let product = await getProductById(req.query.prodId);
      return res.send({ message: "Product found", data: product });
    }
    return res.status(401).json({ message: "Not a valid route" });
  } catch (error) {
    return sendError(res, error);
  }
};
export default handler;
