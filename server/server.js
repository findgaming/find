const express = require('express');
const cors = require('cors');
// const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();
// app.use(express.json());
app.use(bodyParser.json()); // parses out every request body that goes through your server
// allows you to parse through nested objects passed into your request body; you can use this; allow you to see the HTTP data in key value pairs, coming from the form submission
app.use(bodyParser.urlencoded({ extended: true }));

const usersRouter = require('./routes/users');
const lobbyRouter = require('./routes/lobby');
const messageRouter = require('./routes/messages');
const roomsRouter = require('./routes/rooms');

// for cross origin, making it needed for cases w/out webpack or proxy
app.use(cors());

// router for users
app.use('/users', usersRouter);
// app.use('/lobby', lobbyRouter);
// app.use('/messages', messageRouter);
// app.use('/rooms', roomsRouter);

// // add a user to the table
// app.get('/test', (req, res) => {
//   console.log('entered /test');
//   res.send({ testresponse: 'hit test endpoint' });
// });

app.listen(PORT, () => {
  console.log('server is listening on port: ', PORT);
});
