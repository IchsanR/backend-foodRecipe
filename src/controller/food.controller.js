const foodModel = require("../model/food.model");

const foodController = {
  // method
  list: (req, res) => {
    const limit = parseInt(req.query.limit) || 2;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;
    foodModel
      .selectAll(limit, offset)
      .then((results) => {
        res.json(results.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  detail: (req, res) => {
    const id = req.params.id;
    foodModel
      .selectDetail(id)
      .then((results) => {
        res.json(results.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  insert: (req, res) => {
    const { id, title, ingredients, description } = req.body;
    foodModel
      .store(id, title, ingredients, description)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  update: (req, res) => {
    const { title, ingredients, description } = req.body;
    const id = req.params.id;
    foodModel
      .update(id, title, ingredients, description)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  destroy: (req, res) => {
    const id = req.params.id;
    foodModel
      .destroy(id)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  searching: (req, res) => {
    const title = req.params.title;
    foodModel
      .searching(title)
      .then((results) => {
        res.json(results.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};

module.exports = foodController;
