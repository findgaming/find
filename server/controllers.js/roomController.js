const db = require('../db/db.js');
const roomController = {};

roomController.getRooms = (req, res, next) => {
  const queryString = `
    SELECT * 
    FROM Rooms`;

  db.query(queryString)
    .then((response) => {
      res.locals.rooms = response.rows;
      next();
    })
    .catch((err) => {
      next(err);
    });
};

roomController.addRoom = (req, res, next) => {
  const { room } = req.body.room;

  const queryString = `
    INSERT INTO Rooms lobby VALUES $1
    `;
  const values = [room];

  db.query(queryString, values)
    .then((response) => {
      next();
    })
    .catch((err) => {
      next(err);
    });
};

roomController.deleteRoom = (req, res, next) => {
  const { id } = req.params.id;

  const queryString = `
    DELETE FROM Rooms 
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

module.exports = roomController;
