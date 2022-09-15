const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");

const userRouter = require("./src/router/user.routes");
const foodRouter = require("./src/router/food.routes");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(userRouter);
app.use(foodRouter);

app.listen(process.env.PORT, () => {
	console.log("SERVER RUNNING ON PORT 3005");
});
