import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name };

    axios
      .post("api/auth/signup", requestBody)
      .then((response) => {
        // redirect -> login
        navigate("/login");
      })
      .catch((error) => {
        const errorDescrition = error.response.data.message;
        setErrorMessage(errorDescrition);
      });
  };

  return (
    <section class="text-black body-font bg-background-nft bg-cover h-full">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl text-black">SurvIt</h1>
          <p class="leading-relaxed mt-4 text-gray-800">
            Manage and access popup surveys. Get quick feedback faster than ever
            before.
          </p>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <div class="relative mb-4">
            <form onSubmit={handleSubmit}>
              <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                Sign Up
              </h2>
              <div class="relative mb-4">
                <TextInput
                  id="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="relative mb-4">
                <TextInput
                  id="name"
                  label="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="relative mb-4">
                <TextInput
                  id="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button tailwind="w-full" type="submit">
                Login
              </Button>
            </form>
            {errorMessage && (
              <p class="text-xs text-red-500 mt-3">{errorMessage}</p>
            )}
            <p class="text-xs text-gray-500 mt-3">
              Already have an account?{" "}
              <Link class="text-sm text-blue-500 hover:underline" to="/login">
                Click here to login.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
