import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button } from "../components/Button";

export const Polls = (props) => {
  const { id } = useParams();
  const [poll, setPoll] = useState();
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    axios.get(`/api/polls/${id}`).then((res) => {
      setPoll(res.data);
    });
  }, [id]);

  const onChangeValue = (event) => {
    setSelectedAnswer(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { pollId: id, selectedAnswer: selectedAnswer };

    axios
      .post("/api/answers", requestBody)
      .then((res) => {
        // redirect -> loginName
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setAnswered(true);
  };

  return !poll ? (
    <></>
  ) : answered ? (
    <section
      id="quiz-section"
      className="dark:bg-gray-800 text-gray-600 body-font overflow-hidden min-h-screen bg-gray-100"
    >
      <form onSubmit={handleSubmit}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col items-center flex-wrap -m-12">
            <div className="dark:bg-gray-700 p-12 md:w-1/2 flex flex-col items-start bg-white">
              <h2 className="dark:text-white sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                Thanks for your participation!
              </h2>
            </div>
          </div>
        </div>
      </form>
    </section>
  ) : (
    <>
      <section
        id="quiz-section"
        className="dark:bg-gray-800 text-gray-600 body-font overflow-hidden min-h-screen bg-gray-100"
      >
        <form onSubmit={handleSubmit}>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col items-center flex-wrap -m-12">
              <div className="dark:bg-gray-700 p-12 md:w-1/2 flex flex-col items-start bg-white">
                <span className="dark:bg-gray-800 inline-block py-1 px-2 rounded bg-yellow-50 text-yellow-500 text-xs font-medium tracking-widest">
                  {poll.owner} asks
                </span>
                <h2 className="dark:text-white sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                  {poll.question}
                </h2>
                <div onChange={onChangeValue}>
                  {poll.answers.map((a, idx) => {
                    return (
                      <div
                        key={a.id}
                        className="dark:text-gray-400 flex items-center mr-4 mb-4"
                      >
                        <input
                          type="radio"
                          id={a.id}
                          name="answer"
                          value={a.id}
                          className="hidden"
                        />
                        <label
                          htmlFor={a.id}
                          className="flex items-center cursor-pointer text-xl"
                        >
                          <span className="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                          {a.text}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <Button type="submit">Vote</Button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
