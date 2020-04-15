const db = require('../db/db.js');
const userController = {};

// grab all users upon this fetch request route
userController.getUsers = (req, res, next) => {
  const queryString = `
    SELECT * 
    FROM Users`;

  db.query(queryString)
    .then(response => {
      res.locals.users = response.rows;
      next();
    })
    .catch(err => {
      next(err);
    });
};

// add Users & password
userController.addUser = (req, res, next) => {
  const { user, pass } = req.body;

  const queryString = `INSERT INTO Users (user, pass) VALUES ($1, $2) RETURNING *`;

  const values = [user, pass];

  db.query(queryString, values)
    .then(response => {
      res.locals.users = response.rows;
      next();
    })
    .catch(err => {
      next(err);
    });
};

// userController.deleteUser = (req, res, next) => {
//   const { id } = req.params;

//   // refactor
//   const queryString = `
//     DELETE FROM Users
//     WHERE id = $1
//     `;
//   const values = [id];

//   db.query(queryString, values)
//     .then(response => {
//       next();
//     })
//     .catch(err => {
//       next(err);
//     });
// };

module.exports = { userController };
