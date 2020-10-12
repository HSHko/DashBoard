const express = require("express");
const app = express();
const mongoose = require("mongoose");
const models = require("./models");
const routes = require("./routes");

const port = 5000; // http://localhost:5000/

// http://reffect.co.jp/node-js/express-jsnode-js-mongodb
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
mongoose.connect("mongodb://127.0.0.1/tdb", options);

// events:
// error, open, connecting, connected
// disconnecting, disconnected, close
// reconnected, error, fullsetup, all, reconnectFailed
const db = mongoose.connection;
db.on("error", console.error.bind(console, "DB connection error: ")); // 타임아웃시 출력
db.once("open", () => console.log("DB connected"));

app.use("/users", routes.users);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/newEndPoint", (req, res) => {
  res.send("This is newEndPoint!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`, module.filename, __filename);
});

module.exports = app;
