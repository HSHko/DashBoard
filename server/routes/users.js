const express = require("express");
const router = express.Router();
const models = require("../models");

module.exports = router.get("/", async (req, res) => {
  const users = await models.User.find({});
  res.json(users);
});
