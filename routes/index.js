const router = require("express").Router();
const Poll = require("../models/Poll.model");
const User = require("../models/User.model");
const authRoutes = require("./auth");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.post("/polls", async (req, res, next) => {
  const { user: userId, question, answers } = req.body;
  console.log(userId, question, answers);
  const user = await User.findById(userId);
  if (!user) {
    res.status(400).json({ message: "No valid user." });
    return;
  }
  const validAswers = answers.filter((a) => a.text);
  if (validAswers.length === 0) {
    res.status(400).json({ message: "No valid survey options" });
    return;
  }

  const newPoll = await Poll.create({ question, answers });
  await User.findByIdAndUpdate(
    userId,
    { $push: { polls: newPoll._id } },
    { new: true }
  );

  res.json(newPoll);
});

router.use("/auth", authRoutes);
module.exports = router;
