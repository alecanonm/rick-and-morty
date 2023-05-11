const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;
  console.log(email, password);
  const user = users.some(
    (item) => item.email === email && item.password === password
  );

  if (user) {
    console.log(user);
    res.status(200).json({ access: true });
  } else {
    res.status(200).json({ access: false });
  }
};

module.exports = login;
