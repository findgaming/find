const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/test", (req, res) => {
  console.log("entered /test");
  res.send({ testresponse: "hit test endpoint" });
});

app.listen(PORT, () => {
  console.log("server is listening on port: ", PORT);
});
