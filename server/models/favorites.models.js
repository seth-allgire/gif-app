const query = require("../config/mysql.conf");

async function addFavorite(res, gif) {
  try {
    let { insertID } = await query("INSERT INTO favorites SET ?", gif);

    return res.send({
      success: true,
      error: null,
      data: { ...gif, id: insertID },
    });
  } catch (e) {
    return res.send({
      success: false,
      error: "Something went wrong",
      data: e.message,
    });
  }
}

async function deleteFavorite(res, id) {
  try {
    await query("DELETE FROM favorites WHERE favorites.id = ?", [id]);
    return res.send({
      success: true,
      error: null,
      data: id,
    });
  } catch (e) {
    return res.send({
      success: false,
      error: "Something went wrong",
      data: null,
    });
  }
}

async function byUserID(res, user_id) {
  try {
    const favorites = await query(
      "SELECT * FROM favorites WHERE favorites.user_id = ?",
      [user_id]
    );
    return res.send({ success: true, error: null, data: favorites });
  } catch (e) {
    return res.send({
      success: false,
      error: "Something went wrong",
      data: JSON.stringify(e),
    });
  }
}

module.exports = { addFavorite, deleteFavorite, byUserID };
