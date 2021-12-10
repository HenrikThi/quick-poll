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
        <CreatePollForm />
      </div>
      <div>
        <PollList polls={user.polls} />
      </div>
    </>
  );
};
