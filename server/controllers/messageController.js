const db = require('../db/db.js');
const messageController = {};

messageController.getMessages = (req, res, next) => {
  const queryString = `
    SELECT * 
    FROM Messages`;

  db.query(queryString)
    .then((response) => {
      res.locals.messages = response.rows;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

messageController.postMessage = (req, res, next) => {
  const { user_id, room_id, message } = req.body;

  const queryString = `
    INSERT INTO Messages (user_id, room_id, message) VALUES ($1 $2 $3)
    `;
  const values = [user_id, room_id, message];

  db.query(queryString, values)
    .then((response) => {
      res.locals.newMessage = response.rows[0];
      next();
    })
    .catch((err) => {
      return next(err);
    });
};

messageController.deleteMessage = (req, res, next) => {
  const id = req.params.id;

  const queryString = `
  DELETE 
  FROM Messages 
  WHERE id = $1`;
  const values = [id];

  db.query(queryString, values)
    .then((response) => {
      res.locals.deleted = response.rows[0];
      console.log(response.rows[0]);
      next();
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = messageController;
