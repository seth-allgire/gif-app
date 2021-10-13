const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
  return res.send("SIGNUP NYI");
});

router.post("/login", (req, res) => {
  return res.send("LOGIN NYI");
});

module.exports = router;
