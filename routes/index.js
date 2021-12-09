const router = require("express").Router();
const Poll = require("../models/Poll.model");
const User = require("../models/User.model");
const authRoutes = require("./auth");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/polls/:id", async (req, res, next) => {
  try {
    const poll = await Poll.findById(req.params.id);
    if (!poll) {
      res.status(404).json({ message: "Poll not found." });
      return;
    }
    res.json(poll);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
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

  const newPoll = await Poll.create({ question, answers, owner: user.name });
  await User.findByIdAndUpdate(
    userId,
    { $push: { polls: newPoll._id } },
    { new: true }
  );

  res.json(newPoll);
});

router.post("/answers", async (req, res, next) => {
  const { pollId, selectedAnswer } = req.body;
  const poll = await Poll.findById(pollId);

  for(answer of poll.answers){
    if(answer.id == selectedAnswer){
      answer.votes = answer.votes + 1;
    }
  }

Poll.findByIdAndUpdate(pollId, { answers: poll.answers }).then(res => console.log(res)).catch(err => console.log(err))
  res.status(400);
});

router.use("/auth", authRoutes);
module.exports = router;
