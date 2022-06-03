const Router = require("express");
const config = require("config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

const router = new Router();

router.post(
  "/registration",
  [
    check("email", "Uncorrect email").isEmail(),
    check("name", "Uncorrect name").isLength({ min: 1, max: 20 }),
    check(
      "password",
      "Password should be longer than 3 and shorter than 12"
    ).isLength({ min: 1, max: 12 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Uncorrect request", errors });
      }

      const { email, password, name } = req.body;

      const condidateEmail = await User.findOne({ email });
      const condidateName = await User.findOne({ name });

      if (condidateEmail) {
        return res.status(400).json({
          message: `User with email ${email} already exist!`,
        });
      }
      if (condidateName) {
        return res.status(400).json({
          message: `User with name ${name} already exist!`,
        });
      }

      const dateOfRegistration = new Date().toUTCString();
      const dateOfLastLogin = new Date().toUTCString();
      const userStatus = "Unblock";
      const selected = false;
      const hashPassword = await bcrypt.hash(password, 8);

      const user = new User({
        email,
        password: hashPassword,
        name,
        userStatus,
        dateOfRegistration,
        dateOfLastLogin,
        selected,
      });
      await user.save();

      return res.json({
        message: "User was created",
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          dateOfLastLogin: user.dateOfLastLogin,
        },
      });
    } catch (e) {
      console.log(e);
      res.send({ message: "Server error" });
    }
  }
);

router.post(
  "/login",

  async (req, res) => {
    try {
      const { name, password } = req.body;
      const user = await User.findOne({ name });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (user.userStatus === "Blocked") {
        return res.status(403).json({ message: "User was blocked" });
      }

      const dateOfLastLogin = new Date().toUTCString();

      const isPassValid = bcrypt.compareSync(password, user.password);

      if (!isPassValid) {
        return res.status(400).json({ message: "Invalid password" });
      }

      const token = jwt.sign({ id: user.id }, config.get("secretKey"), {
        expiresIn: "1d",
      });

      user.dateOfLastLogin = dateOfLastLogin;
      await user.save();

      return res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      });
    } catch (e) {
      console.log(e);
      res.send({ message: "Server error" });
    }
  }
);

module.exports = router;
