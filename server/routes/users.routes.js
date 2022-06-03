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

router.put(
  "/updateSelected",

  async (req, res) => {
    try {
      const { id } = req.body;

      await User.findByIdAndUpdate(id, { selected: true });

      const users = await User.find();

      res.send(users);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error" });
    }
  }
);

router.put(
  "/updateStatus",

  async (req, res) => {
    try {
      const { userStatus } = req.body;

      await User.updateMany({ selected: true }, { userStatus: userStatus });

      const users = await User.find();

      res.send(users);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error" });
    }
  }
);

router.delete(
  "/",

  async (req, res) => {
    try {
      await User.deleteMany({ selected: true });
      const users = await User.find();

      res.send(users);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error" });
    }
  }
);

module.exports = router;
