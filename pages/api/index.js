import { dbConnect } from "../../../configs/database";
import { sendError } from "../../../server/helper";

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();
  if (method == "GET") {
  }
  return sendError(res, 401, "Not a valid route");
};
export default handler;
