const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getUsers, (req, res) => {
  res.status(200).json(res.locals.users);
});

router.post('/', userController.addUser, (req, res) => {
  res.status(200).json(res.locals.newUser);
});

// router.delete('/:id', userController.deleteUser, (req, res) => {
//   res.status(200).json(res.locals.deleted);
// });

module.exports = router;
