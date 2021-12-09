import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth";
import { Button } from "./Button";
import { TextInput } from "./TextInput";
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';

export const CreatePollForm = () => {
  const [question, setQuestion] = useState("asd");
  const [answers, setAnswers] = useState([{ text: "", id: uuidv4() },{ text: "", id: uuidv4() }]);
  const {user} = useContext(AuthContext);

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
    console.log(requestBody);

    axios
      .post("api/polls", requestBody)
      .then((res) => {
          console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form action="">
        <h1>create poll</h1>
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
                <Button onClick={() => deleteAnswer(a.id)}>Delete</Button>
              </div>
            );
          })}
        </div>
        <Button onClick={handleAddAnswer}>Add more Answers</Button>
        <Button type="submit" onClick={handleSubmit}>Start Survey</Button>
      </form>
    </div>
  );
};
