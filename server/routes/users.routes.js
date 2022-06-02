const Router = require("express");
const User = require("../models/User");

const router = new Router();

router.get(
  "/",

  async (req, res) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error" });
    }
  }
);

module.exports = router;
