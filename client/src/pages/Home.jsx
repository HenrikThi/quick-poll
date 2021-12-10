import React, { useState, useContext, useEffect } from "react";
import { Button } from "../components/Button";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth";
import { TextInput } from "../components/TextInput";
import { CreatePollForm } from "../components/CreatePollForm";
import { PollList } from "../components/PollList";
import axios from "axios";

export const Home = () => {
  const { isLoggedIn, user: user_id } = useContext(AuthContext);
  const [text, setText] = useState("start");
  const [user, setUser] = useState();
  const navigate = useNavigate();


  useEffect(() => {
    if (!user_id) {
      navigate("/login");
      return;
    }
    axios.get("/api/users/" + user_id._id).then((res) => {
      setUser(res.data);
    });
  }, []);

  if (!isLoggedIn) return <Navigate to="/login" />;
  if (!user) return <></>;
  return (
    <>
      <div>
        <h1 className="text-red-600">Home</h1>
        <Button onClick={() => console.log(text)} color="primary">
          Tests
        </Button>
        <Button color="secondary">Tests</Button>
        <TextInput
          id="testId"
          label="Register here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <CreatePollForm />
      </div>
      <div>
        <Link
          className="text-sm text-blue-500 hover:underline"
          to="/admin/61b2361ce9190b203ee1d0f8"
        >
          Click here to example poll.
        </Link>
      </div>
      <div>
        <PollList polls={user.polls} />
      </div>
    </>
  );
};
