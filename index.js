require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");

// route
const userRouter = require("./src/router/user.routes");
const foodRouter = require("./src/router/food.routes");
const commentRouter = require("./src/router/comment.routes");

const app = express();

try {
  app.use(bodyParser.json());
  app.use(cors());
  app.use(xss());
  app.use(helmet());
  app.use(userRouter);
  app.use(foodRouter);
  app.use(commentRouter);
} catch {
  console.log(error);
}

app.listen(process.env.PORT, () => {
  console.log("SERVER RUNNING ON PORT 3005");
});
