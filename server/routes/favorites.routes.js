const express = require("express");
const router = express.Router();

router.post("/add", (req, res) => {
  return res.send("ADD NYI");
});

router.delete("/delete/:id", (req, res) => {
  return res.send("DELETE NYI");
});

router.get("/user/:user_id", (req, res) => {
  return res.send("BY USER NYI");
});

module.exports = router;
