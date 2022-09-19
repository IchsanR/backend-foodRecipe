const db = require("../config/db");

const commentModel = {
  selectAll: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM tb_comment`, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },
  store: (id_comment, id_user, id_recipe, comment) => {
    return new Promise((resolve, reject) => {
      db.query(
        `
        INSERT INTO tb_comment (id_comment, id_user, id_recipe, comment)
        VALUES
        (${id_comment}, ${id_user}, ${id_recipe}, '${comment}')`
      ),
        (res, err) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        };
    });
  },
  destroy: (id_comment) => {
    return new Promise((resolve, reject) => {
      db.query(
        `
        DELETE FROM tb_comment WHERE id_comment = ${id_comment}
        `
      ),
        (res, err) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        };
    });
  },
};

module.exports = commentModel;
