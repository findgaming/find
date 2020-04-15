const express = require('express');

const messageController = require('../controllers/messageController.js');

const router = express.Router();

router.get('/', messageController.getMessages, (req, res, next) => {
  res.status(200).json(res.locals.messages);
});

router.post('/', messageController.postMessage, (req, res, next) => {
  res.status(200).json(res.locals.message);
});

router.delete('/:id', messageController.deleteMessage, (req, res, next) => {
  res.status(200).json(res.locals.deleted);
});

module.exports = router;
