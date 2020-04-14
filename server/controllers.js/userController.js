const db = require('../db/db.js');
const userController = {};

userController.getUsers = (req, res, next) => {
  const queryString = `
    SELECT * 
    FROM Users`;

  db.query(queryString)
    .then((response) => {
      res.locals.users = response.rows;
      next();
    })
    .catch((err) => {
      next(err);
    });
};

userController.addUser = (req, res, next) => {
  const { user } = req.body;

  const queryString = `
    INSERT INTO Users user VALUES $1
    `;
  const values = [user];

  db.query(queryString, values)
    .then((response) => {
      next();
    })
    .catch((err) => {
      next(err);
    });
};

userController.deleteUser = (req, res, next) => {
  const { id } = req.body;

  const queryString = `
    DELETE FROM Users 
    WHERE id = $1
    `;
  const values = [id];

  db.query(queryString, values)
    .then((response) => {
      next();
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = userController;
