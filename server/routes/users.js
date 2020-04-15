/* eslint-disable function-paren-newline */
const express = require('express');

// users controller
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getUsers, (req, res, next) => {
  res.status(200).json(res.locals.users);
});

// posting for the users (users/ password) upon creation
router.post('/', userController.addUser, (req, res, next) => {
  res.status(200).json(res.locals.users);
});

// export default router;
module.exports = router;
