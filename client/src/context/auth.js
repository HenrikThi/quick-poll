import React, { useState, useEffect } from "react";
import axios from "axios";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loginUser = (token) => {
    // store this token in local storage
    localStorage.setItem("authToken", token);
    return verifyStoredToken();
  };

  const logoutUser = () => {
    // remove the token from local storage
    localStorage.removeItem("authToken");
    // update state
    setIsLoggedIn(false);
    setUser(null);
  };

  const verifyStoredToken = async () => {
    // check local storage for an auth token
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      try {
        const res = await axios.get("api/auth/verify", {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        console.log(res);
        const user = res.data;
        setUser(user);
        setIsLoggedIn(true);
        setIsLoading(false);
      } catch (err) {
        // the token is invalid
        setIsLoggedIn(false);
        setUser(null);
        setIsLoading(false);
      }
    } else {
      // token is not available
      setIsLoading(false);
    }
  };

  useEffect(() => {
    verifyStoredToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, isLoading, loginUser, logoutUser }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
