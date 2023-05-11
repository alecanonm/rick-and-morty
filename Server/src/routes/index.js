const getCharById = require("../controller/getCharById");
const login = require("../controller/login");
const { postFav, deleteFav } = require("../controller/handleFavorites");

const router = require("express").Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
