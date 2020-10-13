const express = require("express");
const router = express.Router();
const models = require("../models");

router.use(express.json());

router.get("/", async (req, res) => {
  const users = await models.User.find({});
  res.json(users);
});

router.get("/:id", (req, res) => {
  models.User.findById(req.params.id, (err, user) => {
    if (err) console.log("error");
    res.send(user);
  });
});

router.post("/", async (req, res) => {
  const user = new models.User({
    name: req.body.name,
    age: req.body.age,
  });

  const savedUser = await user.save();
  res.json(savedUser);
});

router.patch("/:id", async (req, res) => {
  console.log(req.body.age);
  const user = await models.User.updateOne({ _id: req.params.id }, { $set: { age: req.body.age } });
  res.send(user);
});

router.delete("/:id", async (req, res) => {
  const user = await models.User.remove({ _id: req.params.id });
  res.send(user);
});

module.exports = router;
