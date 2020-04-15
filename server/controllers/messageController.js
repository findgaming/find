const db = require('../db/db.js');
const messageController = {};

messageController.getMessages = (req, res, next) => {
  const queryString = `SELECT * FROM Messages`;

  db.query(queryString)
    .then(response => {
      res.locals.messages = response.rows;
      console.log('getting Messages');
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

messageController.postMessage = (req, res, next) => {
  const { user_id, room_id, message } = req.body;

  const queryString = `INSERT INTO Messages (user_id, room_id, message) VALUES ($1, $2, $3) RETURNING *`;
  const values = [user_id, room_id, message];

  db.query(queryString, values)
    .then(response => {
      res.locals.message = response.rows[0];
      console.log('NEW MESSAGE CREATED FOR USER');
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

messageController.deleteMessage = (req, res, next) => {
  const { id } = req.params;

  const queryString = `DELETE FROM Messages WHERE id = $1`;
  const values = [id];

  db.query(queryString, values)
    .then(response => {
      res.locals.deleted = response.rows[0];
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = messageController;
