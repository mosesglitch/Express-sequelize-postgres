const express = require("express");
const { User } = require("../models/config");

const router = express.Router();

router.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

router.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

module.exports = router;
