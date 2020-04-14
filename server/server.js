const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get('/test', (req, res) => {
  console.log('entered /test');
  res.send({ testresponse: 'hit test endpoint' });
});

app.listen(PORT, () => {
  console.log('server is listening on port: ', PORT);
});
