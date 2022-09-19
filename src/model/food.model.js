const db = require("../config/db");

const foodModel = {
  // User list
  selectAll: (limit, offset) => {
    return new Promise((resolve, reject) => {
      db.query(
        `
        SELECT * FROM tb_recipe ORDER BY title LIMIT ${limit} OFFSET ${offset}
        `,
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  },
  // router - detail
  selectDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM tb_recipe where id=${id}`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },

  // router - insert
  store: (id, title, ingredients, description) => {
    return new Promise((resolve, reject) => {
      db.query(
        `
      INSERT INTO tb_recipe (id, title, ingredients, description)
      VALUES
      (${id}, '${title}', '${ingredients}', '${description}')
      `,
        (res, err) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
  // update data
  update: (id, title, ingredients, description) => {
    return new Promise((resolve, reject) => {
      db.query(
        `
        UPDATE tb_recipe SET
        title = COALESCE ($1, title),
        ingredients = COALESCE ($2, ingredients),
        description = COALESCE ($3, description)
        WHERE id = $4
        `,
        [title, ingredients, description, id],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  // Delete users
  destroy: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `
        DELETE FROM tb_recipe WHERE id = ${id}
        `,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  searching: (title) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM tb_recipe WHERE title ILIKE '%${title}%' ORDER BY title ASC`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
};

module.exports = foodModel;
