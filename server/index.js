const express = require("express");
const next = require("next");
require("dotenv").config();
const { dbConnect } = require("./config");
const { userRouter, productRouter, orderRouter, cartRouter } = require("./routes");
//next.js configuration
const dev = process.env.NODE_DEV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp
  .prepare()
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use("/apii/users", userRouter);
    app.use("/apii/products", productRouter);
    app.use("/apii/orders", orderRouter);
    app.use("/apii/carts", cartRouter);

    //Keep in last
    app.get("*", (req, res) => {
      return handle(req, res);
    });

    app.listen(process.env.PORT, async () => {
      await dbConnect();
      console.log(`Server running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
