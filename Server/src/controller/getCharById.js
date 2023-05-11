const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const { id } = req.params;
  const response = await axios.get(URL + id);
  try {
    if (response.data) {
      const { id, status, name, species, origin, image, gender } =
        response.data;
      const character = { id, status, name, species, origin, image, gender };
      res.json(character);
    } else {
      res.status(404).send("Not found");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// // .then((data) => {
// //   if (data) {
// //     const { id, status, name, species, origin, image, gender } = data.data;
// //     const character = { id, status, name, species, origin, image, gender };
// //     res.json(character);
// //   } else {
// //     res.status(404).send("Not found");
// //   }
// // })
// .catch((err) => res.status(500).send(err.message));

module.exports = getCharById;
