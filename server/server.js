const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = 3000;

const app = express();
// app.use(express.json());

const usersRouter = require('./routes/users');

// for cross origin, making it needed for cases w/out webpack or proxy
app.use(cors());

// router for users
app.get('/api/users', usersRouter);

// // add a user to the table
// app.get('/test', (req, res) => {
//   console.log('entered /test');
//   res.send({ testresponse: 'hit test endpoint' });
// });

app.listen(PORT, () => {
  console.log('server is listening on port: ', PORT);
});
