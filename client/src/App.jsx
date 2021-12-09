import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Polls } from "./pages/Polls";

function App() {
  axios
    .get("/api/")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/polls/:id" element={<Polls />} />
      </Routes>
    </div>
  );
}

export default App;
