const commentModel = require("../model/comment.model");

const commentController = {
  list: (req, res) => {
    commentModel
      .selectAll()
      .then((results) => {
        res.json(results.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  insert: (req, res) => {
    const { id_comment, id_user, id_recipe, comment } = req.body;
    commentModel
      .store(id_comment, id_user, id_recipe, comment)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  destroy: (req, res) => {
    const id_comment = req.params.id_comment;
    commentModel
      .destroy(id_comment)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};

module.exports = commentController;
