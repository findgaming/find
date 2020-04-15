/* eslint-disable function-paren-newline */
const express = require('express');

// users controller
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getUsers, (req, res) => {
  res.status(200).json({ users: res.locals.users });
});

// posting for the users (users/ password)
router.post('/', userController.addUsers, (req, res) => {
  res.status(200).json({ users: res.locals.users });
});

module.exports = router;
