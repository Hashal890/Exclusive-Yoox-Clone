import { dbConnect } from "../../../configs/database";
import { getProducts } from "../../../server/controllers";
import { sendError } from "../../../server/helper";

const handler = async (req, res) => {
  let { method } = req;
  await dbConnect();

  if (method == "GET") {
    const { page = 1, limit = 20, sortBy = "_id", order = "asc", ...others } = req.query;
    try {
      let products = await getProducts(page, +limit, sortBy, order, others);
      return res.send({
        message: "Product found",
        data: products.data,
        totalPages: Math.ceil(products.totalCount / limit),
      });
    } catch (error) {
      return sendError(res, error);
    }
  }
  return res.status(401).json({ message: "Not a valid route" });
};

export default handler;
