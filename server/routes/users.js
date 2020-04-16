const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getUsers, (req, res) => {
  res.status(200).json(res.locals.users);
});

router.post('/', userController.addUser, (req, res) => {
  res.status(200).json(res.locals.newUser);
});

router.patch('/', userController.updateRoom, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.delete('/:id', userController.deleteUser, (req, res) => {
  res.status(200).json(res.locals.deleted);
});

router.post('/login', userController.returnUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

module.exports = router;
