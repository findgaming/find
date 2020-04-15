/* eslint-disable function-paren-newline */
const express = require('express');

// users controller
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getUsers, (req, res, next) => {
  res.status(200).json(res.locals.users);
  // res.status(200).json('TESTSESDFSDF');
});

// posting for the users (users/ password)

router.post('/', userController.addUser, (req, res, next) => {
  res.status(200).json('New User Added!');
});

// export default router;
module.exports = router;
