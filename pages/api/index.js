//template

import { dbConnect } from "../../../configs/database";
import { sendError } from "../../../server/helper";

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  try {
    if (method == "GET") {
    }
    return res.status(401).json({ message: "Not a valid route" });
  } catch (error) {
    return sendError(res, error);
  }
};
export default handler;
