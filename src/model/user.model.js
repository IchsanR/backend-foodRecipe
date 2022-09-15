const db = require("../config/db");

const userModel = {
  // User list
  selectAll: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM tb_users ORDER BY users_name ASC", (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },
  // router - detail
  selectDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM tb_users where id=${id}`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  },

  // router - insert
  store: (id, users_name, users_email, users_phone, users_password) => {
    return new Promise((resolve, reject) => {
      db.query(
        `
      INSERT INTO tb_users (id, users_name, users_email, users_phone, users_password)
      VALUES
      (${id}, '${users_name}', '${users_email}', '${users_phone}', '${users_password}')
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
  update: (id, users_name, users_email, users_phone, users_password) => {
    return new Promise((resolve, reject) => {
      db.query(
        `
        UPDATE tb_users SET
        users_name = COALESCE($1, users_name),
        users_email = COALESCE($2, users_email),
        users_phone = COALESCE($3, users_phone),
        users_password = COALESCE($4, users_password)
        WHERE id = $5
        `,
        [users_name, users_email, users_phone, users_password, id],
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
        DELETE FROM tb_users WHERE id = ${id}
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
  searching: (users_name) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM tb_users WHERE users_name ILIKE '%${users_name}%' ORDER BY users_name ASC`,
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

module.exports = userModel;
