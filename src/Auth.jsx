import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./home.jsx";
import LoginPage from "./loginPage.jsx";
import SignUp from "./signUp.jsx";
import "./App.css";

export default function App() {
  const [isloggin, setIsLoggin] = useState(false);
  function onloggin() {
    setIsLoggin(true);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isloggin ? <Home /> : <Navigate to="/login" replace={true} />
          }
        ></Route>
        <Route path="/signUp" element={<SignUp handleSignUp={onloggin} />} />
        <Route path="/login" element={<LoginPage handleLogin={onloggin} />} />
      </Routes>
    </BrowserRouter>
  );
}
