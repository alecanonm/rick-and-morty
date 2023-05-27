const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  // const { email, password } = req.query;
  // try {
  //   if (!email || !password) {
  //     throw Error("Faltan datos");
  //   }

  //   const user = await User.findOne({ where: { email, password } });

  //   if (user) {
  //     res.json({ acces: true });
  //   }
  // } catch (err) {
  //   res.status(404).send(err.message);
  // }

  const { id } = req.params;
  try {
    if (id) {
      await Favorite.destroy({
        where: {
          id,
        },
      });
      const all = await Favorite.findAll();
      //User.addFavorite(favs)
      return res.status(201).json(all);
    }

    return res.status(401).json({ messgae: "Faltan Datos" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = deleteFav;
