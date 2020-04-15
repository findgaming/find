const db = require('../db/db.js');
const lobbyController = {};

lobbyController.getLobbies = (req, res, next) => {
  const queryString = `
    SELECT * 
    FROM Lobbies`;

  db.query(queryString)
    .then(response => {
      res.locals.lobbies = response.rows;
      next();
    })
    .catch(err => {
      next(err);
    });
};

lobbyController.addLobby = (req, res, next) => {
  const { lobby } = req.body.lobby;

  const queryString = `
    INSERT INTO Lobbies lobby VALUES $1
    `;
  const values = [lobby];

  db.query(queryString, values)
    .then(response => {
      next();
    })
    .catch(err => {
      next(err);
    });
};

lobbyController.deleteLobby = (req, res, next) => {
  const { id } = req.params.id;

  const queryString = `
    DELETE FROM Lobbies 
    WHERE id = $1
    `;
  const values = [id];

  db.query(queryString, values)
    .then(response => {
      next();
    })
    .catch(err => {
      next(err);
    });
};

module.exports = lobbyController;
