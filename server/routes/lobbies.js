const express = require('express');

const lobbyController = require('../controllers/lobbyController.js');

const router = express.Router();

router.get('/', lobbyController.getLobbies, (req, res) => {
  res.status(200).json(res.locals.lobbies);
});

router.post('/', lobbyController.addLobby, (req, res) => {
  res.status(200).json(res.locals.newLobby);
});

// router.delete('/:id', lobbyController.deleteLobby, (req, res) => {
//   res.status(200).json(res.locals.deleted);
// });

module.exports = router;
