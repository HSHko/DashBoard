const express = require("express");
const App = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const auth = require("./auth");

// db.shutdownServer()
// mongod --auth --dbpath E:\data\tdb
// db.auth("admin", "welcome!" )
// 참고링크 http://reffect.co.jp/node-js/express-jsnode-js-mongodb
const PORT = 5000;
console.log(auth.user);
mongoose.connect("mongodb://127.0.0.1/tdb", auth);

// events: error, open, connecting, connected, disconnecting, disconnected, close, reconnected, error, fullsetup, all, reconnectFailed
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: ")); // 타임아웃시 출력
db.once("open", () => console.log("DB connected"));

App.use("/user", routes.users);

App.get("/", (req, res) => {
  res.send("Hello World!");
});

App.listen(PORT, () => {
  console.log(`Example App listening at http://localhost:${PORT}`, module.filename, __filename);
});

module.exports = App;