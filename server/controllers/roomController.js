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

// creates room with admin that's tied to the user ID
roomController.addRoom = (req, res, next) => {
  const { lobby_id, timer, name, admin_id } = req.body;
  const queryString = `INSERT INTO Rooms (lobby_id, timer, name, admin_id) VALUES ($1, $2, $3, $4) RETURNING *`;
  const values = [lobby_id, timer, name, admin_id];

  db.query(queryString, values)
    .then(response => {
      res.locals.newRoom = response.rows[0];
      return next();
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
