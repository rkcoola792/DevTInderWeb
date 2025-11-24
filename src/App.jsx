import { Provider } from "react-redux";
import "./App.css";
import Body from "./Body";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { store } from "./store/store";
import Feed from "./components/Feed";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter basename="/">
      <Routes>

        <Route path="/" element={<Body />}>
          
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route index element={<Feed/>} />
          <Route path="profile" element={<h1>profile</h1>} />

          <Route path="*" element={<Navigate to="/" replace />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
