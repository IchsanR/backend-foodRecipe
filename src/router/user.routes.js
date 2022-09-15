const express = require("express");
const {
	list,
	detail,
	insert,
	update,
	destroy,
	searching,
} = require("../controller/user.controller");

const userRouter = express.Router();

userRouter
	.get("/user", list)
	.get("/user/:id", detail)
	.post("/user", insert)
	.put("/user/:id", update)
	.delete("/user/:id", destroy)
	.get("/user/search/:users_name", searching);

module.exports = userRouter;
