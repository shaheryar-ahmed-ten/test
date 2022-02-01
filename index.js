const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home page!");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
