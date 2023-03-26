const express = require("express");

const app = express();

app.use(express.json())
app.use("/", require("./router"));

app.listen(2308, () => {
  console.log("Server listening on port 2308");
});
