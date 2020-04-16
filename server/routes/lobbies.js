const express = require('express');

const lobbyController = require('../controllers/lobbyController.js');

const router = express.Router();

router.get('/', lobbyController.getLobbies, (req, res) => {
  res.status(200).json(res.locals.lobbies);
});

// might want to refacor to bring THIS to room router
// grab rooms where lobby id = $(1)

router.get('/:id', lobbyController.getAllRoomsFromLobby, (req, res) => {
  console.log('added room from lobbies');
  res.status(200).json(res.locals.lobbies);
});

router.post('/', lobbyController.addLobby, (req, res) => {
  res.status(200).json(res.locals.newLobby);
});

router.delete('/:id', lobbyController.deleteLobby, (req, res) => {
  res.status(200).json(res.locals.deleted);
});

module.exports = router;
