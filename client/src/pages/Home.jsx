import React, { useState, useContext, useEffect } from "react";
import { Button } from "../components/Button";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth";
import { TextInput } from "../components/TextInput";

export const Home = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [text, setText] = useState("start");

  if (!isLoggedIn) return <Navigate to="/login" />;
  return (
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
  );
};
