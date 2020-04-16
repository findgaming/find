const db = require('../db/db.js');
const lobbyController = {};

lobbyController.getLobbies = (req, res, next) => {
  const queryString = `SELECT * FROM Lobbies`;

  db.query(queryString)
    .then(response => {
      res.locals.lobbies = response.rows;
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

lobbyController.addLobby = (req, res, next) => {
  const { name, min_players, max_players } = req.body;

  const queryString = `
    INSERT INTO Lobbies (name, min_players, max_players) VALUES ($1, $2, $3)
    `;
  const values = [name, min_players, max_players];

  db.query(queryString, values)
    .then(response => {
      // console.log('response', response);
      res.locals.newLobby = response.rows[0];
      return next();
    })
    .catch(err => {
      next(err);
    });
};

lobbyController.deleteLobby = (req, res, next) => {
  const id = req.params.id;

  const queryString = `
    DELETE FROM Lobbies
    WHERE id = $1
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

// might refacor to bring into rooms router
// grab rooms where lobby id = $(1)

lobbyController.getAllRoomsFromLobby = (req, res, next) => {
  const id = req.params.id;

  const queryString = `SELECT * FROM Rooms JOIN Lobbies on Rooms.lobby_id = Lobbies.id WHERE Lobbies.id = ${id};`;

  db.query(queryString)
    .then(response => {
      // console.log('coming from get lobbies', response.rows);
      res.locals.lobbies = response.rows;
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = lobbyController;
