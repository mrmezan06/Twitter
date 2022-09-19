import "./App.css";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/home/Home";

import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.auth.authData);
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      {/* <Home /> */}
      {/* <Profile /> */}
      {/* <Auth /> */}
      <Routes>
        <Route path="/" element={user ? <Home /> : <Auth />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/" />}
        />
        <Route path="/auth" element={user ? <Home /> : <Auth />} />
      </Routes>
    </div>
  );
}

export default App;

// 1:08:32
