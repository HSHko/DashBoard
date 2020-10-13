const express = require("express");
const app = express();
const cors = require("cors");
const auth = require("./auth");

const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json()); //req.body

// ROUTES

// create a todo
app.post("/todos", async(req, res) => {
try {
    console.log(req.body);
} catch (err) {
    console.error(err.message);
    
}
})

app.listen(PORT, () => {
    console.log(`Server has Started http://localhost:${PORT}`, __filename);
});

/*
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const auth = require("./auth");

const PORT = 5000;
console.log(auth.user);
mongoose.connect("mongodb://127.0.0.1/tdb", auth);

// events: error, open, connecting, connected, disconnecting, disconnected, close, reconnected, error, fullsetup, all, reconnectFailed
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: ")); // 타임아웃시 출력
db.once("open", () => console.log("DB connected"));

app.use("/user", routes.users);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`, module.filename, __filename);
});

module.exports = app;
*/