let myFavorites = [];

const postFav = (req, res) => {
  console.log(req.body);
  myFavorites.push(req.body);
  res.json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  myFavorites = myFavorites.filter((char) => char.id !== +id);
  res.json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
