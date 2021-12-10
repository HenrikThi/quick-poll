import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth";
import { Button } from "./Button";
import { TextInput } from "./TextInput";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";



export const CreatePollForm = () => {
  const [question, setQuestion] = useState("asd");
  const [answers, setAnswers] = useState([
    { text: "", id: uuidv4() },
    { text: "", id: uuidv4() },
  ]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleAddAnswer = (e) => {
    e.preventDefault();
    answers.length < 5 && setAnswers([...answers, { text: "", id: uuidv4() }]);
  };

  const deleteAnswer = (id) => setAnswers(answers.filter((a) => a.id !== id));

  const setAnswer = (id, text) =>
    setAnswers((ans) => ans.map((a) => (a.id === id ? { text, id } : a)));

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { question, answers, user: user._id };

    axios
      .post("api/polls", requestBody)
      .then((res) => {
        console.log(res);
        navigate("/admin/" + res.data._id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form action="">
        <h1 className=" text-center title-font text-3xl font-medium">Create poll</h1>
        <TextInput
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          label="Question"
        />
        <div>
          {answers.map((a, idx) => {
            return (
              <div className="flex" key={a.id}>
                <TextInput
                  value={a.text}
                  onChange={(e) => setAnswer(a.id, e.target.value)}
                  label={`#${idx + 1} Answer`}
                />
                <img
                  className="h-9 mt-8 ml-5"
                  onClick={() => deleteAnswer(a.id)}
                  src="data:image/png;base64,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"
                  alt=""
                />
              </div>
            );
          })}
        </div>
        <div>
          <p
            className="text-sm text-blue-500 hover:underline"
            onClick={handleAddAnswer}
          >
            Add more answers
          </p>
        </div>
        <div className="flex justify-center">
          <Button type="submit" onClick={handleSubmit}>
            Start Poll
          </Button>
        </div>
      </form>
    </div>
  );
};
