const db = require('../db/db.js');
const messageController = {};

messageController.getMessages = (req, res, next) => {
  const queryString = `
    SELECT * 
    FROM Messages`;

  db.query(queryString)
    .then(response => {
      res.locals.messages = response.rows;
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

messageController.postMessage = (req, res, next) => {
  const { message } = req.params;

  const queryString = `
    INSERT INTO Messages message VALUES $1
    `;
  const values = [message];

  db.query(queryString, values)
    .then(response => {
      return next();
    })
    .catch(err => {
      retur next(err);
    });
};

messageController.deleteMessage = (req, res, next) => {
  const { id } = req.params;

  const queryString = `
  DELETE 
  FROM Messages 
  WHERE id = $1`;
  const values = [id];

  db.query(queryString, values)
    .then(response => {
      next();
    })
    .catch(err => {
      next(err);
    });
};

module.exports = messageController;
