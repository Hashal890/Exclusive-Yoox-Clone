const express = require("express");
const next = require("next");
require("dotenv").config();

const { dbConnect } = require("./config");
const { userRouter, productRouter } = require("./routes");
//next.js configuration
const dev = process.env.NODE_DEV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp
  .prepare()
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use("/api/users", userRouter);
    app.use("/api/products", productRouter);

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
