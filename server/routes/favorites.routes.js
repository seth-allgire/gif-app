const express = require("express");
const router = express.Router();
const {
  addFavorite,
  deleteFavorite,
  byUserID,
} = require("../models/favorites.models");

router.post("/add", (req, res) => {
  const gif = req.body;
  if (!gif.title || !gif.url || !gif.user_id || !gif.gif_id) {
    return res.send({
      success: false,
      error: "invalid data provided",
      data: null,
    });
  }
  addFavorite(res, gif);
});

router.delete("/delete/:id", (req, res) => {
  deleteFavorite(res, req.params.id);
});

router.get("/user/:user_id", (req, res) => {
  byUserID(res, req.params.user_id);
});

module.exports = router;
