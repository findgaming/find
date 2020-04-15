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
  console.log('adding user stops here');
  const { username, password } = req.body;

  const queryString = `INSERT INTO Users (username, password) VALUES ($1, $2) RETURNING *`;

  const values = [username, password];

  db.query(queryString, values)
    .then(response => {
      // res.locals.users = response.rows;
      console.log('User added!');
      return next();
    })
    .catch(err => {
      return next(err);
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

module.exports = userController;
