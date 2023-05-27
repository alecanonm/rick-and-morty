const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  let { id, name, origin, status, image, species, gender } = req.body;
  console.log(req.body);
  try {
    if ((id, name && origin && status && image && species && gender)) {
      await Favorite.findOrCreate({
        where: { id, name, origin, status, image, species, gender },
      });
      const favs = await Favorite.findAll();
      //cuando tengan muchos usuarios tiene que relacion el favorito a un usuario
      //User.addFavorite(favs)
      return res.status(201).json(favs);
    }
    return res.status(401).json({ message: "Faltan datos" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = postFav;
