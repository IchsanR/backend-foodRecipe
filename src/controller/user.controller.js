const userModel = require("../model/user.model");

const userController = {
  // method
  list: (req, res) => {
    userModel
      .selectAll()
      .then((results) => {
        res.json(results.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  detail: (req, res) => {
    const id = req.params.id;
    userModel
      .selectDetail(id)
      .then((results) => {
        res.json(results.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  insert: (req, res) => {
    const { id, users_name, users_email, users_phone, users_password } =
      req.body;
    userModel
      .store(id, users_name, users_email, users_phone, users_password)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  update: (req, res) => {
    const { users_name, users_email, users_phone, users_password } = req.body;
    const id = req.params.id;
    userModel
      .update(id, users_name, users_email, users_phone, users_password)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  destroy: (req, res) => {
    const id = req.params.id;
    userModel
      .destroy(id)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  searching: (req, res) => {
    const users_name = req.params.users_name;
    userModel
      .searching(users_name)
      .then((results) => {
        res.json(results.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};

module.exports = userController;
