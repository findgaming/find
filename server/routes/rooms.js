const express = require('express');

const roomController = require('../controllers/roomController.js');

const router = express.Router();

router.get('/', roomController.getRooms, (req, res) => {
  res.status(200).json(res.locals.rooms);
});

router.post('/', roomController.addRoom, (req, res) => {
  res.status(200).json(res.locals.newRoom);
});

router.delete('/:id', roomController.deleteRoom, (req, res) => {
  res.status(200).json(res.locals.deleted);
});

module.exports = router;
