const express = require("express");
const { default: next } = require("next");

const PORT = process.env.PORT || 3000;
//next.js configuration
const dev = process.env.NODE_DEV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp
  .prepare()
  .then(() => {
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.get("*", (req, res) => {
      return handle(req, res);
    });

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
