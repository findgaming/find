const db = require('../db/db.js');
const roomController = {};

roomController.getRooms = (req, res, next) => {
  const queryString = `
    SELECT * 
    FROM Rooms`;

  db.query(queryString)
    .then(response => {
      res.locals.rooms = response.rows;
      next();
    })
    .catch(err => {
      next(err);
    });
};

roomController.addRoom = (req, res, next) => {
  const { lobby_id, start_time } = req.body;

  const queryString = `
    INSERT INTO Rooms (lobby_id, start_time) VALUES ($1, $2) RETURNING *
    `;
  const values = [lobby_id, start_time];

  db.query(queryString, values)
    .then(response => {
      res.locals.newRoom = response.rows[0];
      next();
    })
    .catch(err => {
      next(err);
    });
};

roomController.deleteRoom = (req, res, next) => {
  const id = req.params.id;

  const queryString = `
    DELETE FROM Rooms 
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

module.exports = roomController;
