require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// for cross origin casue we ain't using webpack
app.use(cors());
// parsing body
app.use(express.json());

// all our Routers
const userRouter = require('./routes/user');
const messageRouter = require('./routes/messages');
const lobbyRouter = require('./routes/lobbies');
const roomRouter = require('./routes/rooms');

app.use('/users', userRouter);
app.use('/messages', messageRouter);
app.use('/lobbies', lobbyRouter);
app.use('/rooms', roomRouter);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }
  };
});

// router for users
app.use('/users', userRouter);

app.get('/*', (req, res, next) => {
  res.status(404).send('404');
});

// sending global error catcher
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }
  };
  const errorObj = Object.assign({}, defaultErr, err); // create an error object using defaultErr as base; overwrite with err param object
  console.log(errorObj.log);
  return res.status(defaultErr.status).json(errorObj.message); // pass data back as json
});

app.listen(PORT, () => {
  console.log('server is listening on port: ', PORT);
});
