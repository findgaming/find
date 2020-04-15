const db = require('../db/db');
const userController = {};

// grab all users upon this fetch request route
userController.getUsers = (req, res, next) => {
  const queryString = `SELECT * FROM Users`;

  db.query(queryString)
    .then(response => {
      res.locals.users = response.rows;
      return next();
    })
    .catch(err => {
      console.log('ERROR FROM GETTING USERS');
      return next(err);
    });
};

// add Users & password upon registration
userController.addUser = (req, res, next) => {
  const { username, password } = req.body;

  const queryString = `INSERT INTO Users (username, password) VALUES ($1, $2) RETURNING *`;

  const values = [username, password];

  db.query(queryString, values)
    .then(response => {
      res.locals.users = response.rows;
      console.log('User added!');
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

userController.deleteUser = (req, res, next) => {
  const id = req.params.id;

  console.log(id);

  const queryString = `
    DELETE FROM Users
    WHERE id = $1 RETURNING *
    `;

  const values = [id];

  db.query(queryString, values)
    .then(response => {
      res.locals.deleted = response.rows[0];
      console.log(response.rows[0]);
      next();
    })
    .catch(err => {
      next(err);
    });
};
module.exports = userController;
