import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post("api/auth/login", requestBody)
      .then((response) => {
        // redirect -> projects
        // navigate('/login')
        console.log("bearer token:", response.data.authToken);
        const token = response.data.authToken;
        // call login user function from auth context
        loginUser(token);
        navigate("/");
      })
      .catch((err) => {
        const errorDescrition = err.response.data.message;
        setErrorMessage(errorDescrition);
      });
  };

  return (
    <section className="text-black body-font bg-background-nft bg-cover h-full">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-black">SurvIt</h1>
          <p className="leading-relaxed mt-4 text-gray-800">
            Manage and access popup surveys. Get quick feedback faster than ever
            before.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <div className="relative mb-4">
            <form onSubmit={handleSubmit}>
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Login
              </h2>
              <div className="relative mb-4">
                <TextInput
                  id="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative mb-4">
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
              <p className="text-xs text-red-500 mt-3">{errorMessage}</p>
            )}
            <p className="text-xs text-gray-500 mt-3">
            No account yet? click{" "}
              <Link
                className="text-sm text-blue-500 hover:underline"
                to="/signup"
              >
                Click here to register.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
