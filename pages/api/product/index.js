import { dbConnect } from "../../../server/config";
import { getProducts } from "../../../server/controllers";
import { sendError } from "../../../server/helper";

const handler = async (req, res) => {
  let { method } = req;
  await dbConnect();

  try {
    if (method == "GET") {
      const { page = 1, limit = 20, sortBy = "_id", order = "asc", ...others } = req.query;

      let products = await getProducts(page, +limit, sortBy, order, others);
      return res.send({
        message: "Product found",
        data: products.data,
        totalPages: Math.ceil(products.totalCount / limit),
      });
    }
    return res.status(401).json({ message: "Not a valid route" });
  } catch (error) {
    return sendError(res, error);
  }
};

export default handler;
