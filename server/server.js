require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');

const app = express();

app.use(cors());

const server = http.Server(app);
const io = socketio(server);
// server.listen(3000, () => console.log(*'listenint on *:3000'));

const userRouter = require('./routes/users');
const messageRouter = require('./routes/messages');
const lobbyRouter = require('./routes/lobbies');
const roomRouter = require('./routes/rooms');

const PORT = 3000;

// parsing body
app.use(express.json());

app.use('/users', userRouter);
app.use('/messages', messageRouter);
app.use('/lobbies', lobbyRouter);
app.use('/rooms', roomRouter);

io.on('connection', (socket) => {
  console.log('a user has connected');
  socket.on('chat message', (msg) => {
    console.log(msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function () {
    io.emit('user disconnected');
  });
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }
  };

  const errorObj = Object.assign({}, defaultErr, err);
  res.status(errorObj.status);
  res.send(errorObj.message);
});

server.listen(PORT, () => {
  console.log('server is listening on port: ', PORT);
});

const getApiAndEmit = async (socket) => {};
