const getCharById = require("../controller/getCharById");
const login = require("../controller/login");
const postFav = require("../controller/postFav");
const postUser = require("../controller/postUser");
const deleteFav = require("../controller/deleteFav");

const router = require("express").Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
