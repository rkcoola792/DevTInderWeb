import "./App.css";
import Body from "./Body";
import Login from "./components/Login";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/feed" element={<h1>feed</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div className="text-3xl ">{/* <Navbar /> */}</div>
    </>
  );
}

export default App;
