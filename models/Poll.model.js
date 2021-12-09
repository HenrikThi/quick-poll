const { Schema, model } = require("mongoose");

const pollSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answers: [
      {
        text: { type: String, required: true },
        id: { type: String, required: true },
        votes: { type: Number, default: 0 },
      },
    ],
    owner: String,
  },
  { timestamps: true }
);

const Poll = model("Poll", pollSchema);

module.exports = Poll;
