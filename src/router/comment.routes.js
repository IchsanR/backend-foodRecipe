const express = require("express");
const { list, insert, destroy } = require("../controller/comment.controller");

const commentRouter = express.Router();

commentRouter
  .get("/comment", list)
  .post("/comment", insert)
  .delete("/comment/:id_comment", destroy);

module.exports = commentRouter;
