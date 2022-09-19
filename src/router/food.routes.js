const express = require("express");
const {
  list,
  detail,
  insert,
  update,
  destroy,
  searching,
} = require("../controller/food.controller");

const foodRouter = express.Router();

foodRouter
  .get("/recipe", list)
  .get("/recipe/:id", detail)
  .post("/recipe", insert)
  .put("/recipe/:id", update)
  .delete("/recipe/:id", destroy)
  .get("/recipe/search/:title", searching);

module.exports = foodRouter;
