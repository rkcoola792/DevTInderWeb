import "./App.css";
import Body from "./Body";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<h1>login</h1>} />
            <Route path="/feed" element={<h1>feed</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div className="text-3xl ">{/* <Navbar /> */}</div>
    </>
  );
}

export default App;
