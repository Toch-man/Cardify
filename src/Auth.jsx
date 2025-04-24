import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./home.jsx";
import LoginPage from "./loginPage.jsx";
import SignUp from "./signUp.jsx";
import CustomCard from "./customCard.jsx";
import DriverCard from "./driverCard.jsx";
import VotersCard from "./votersCard.jsx";
import Card from "./card.jsx";
import "./App.css";

export default function App() {
  const [isloggin, setIsLoggin] = useState(false);
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    teleNo: "",
    age: "",
    image: "",
    gender: "",
  });

  function handleFirstname(e) {
    setDetails({ details, firstname: e.target.value });
  }
  function handleLastname(e) {
    setDetails({ details, lastname: e.target.value });
  }
  function handleEmail(e) {
    setDetails({ details, email: e.target.value });
  }
  function handleTeleno(e) {
    setDetails({ details, teleNo: e.target.value });
  }
  function handleAge(e) {
    setDetails({ details, age: e.target.value });
  }
  function handleGender(e) {
    setDetails({ details, gender: e.target.value });
  }
  function handleImage(e) {
    const file = e.target.files[0];
    setDetails({ details, image: file.name });
  }

  function onloggin() {
    setIsLoggin(true);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isloggin ? <Home /> : <Navigate to="/signUp" replace={true} />
          }
        ></Route>
        <Route path="/signUp" element={<SignUp handleSignUp={onloggin} />} />
        <Route path="/login" element={<LoginPage handleLogin={onloggin} />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/customCard"
          element={
            <CustomCard
              details={details}
              onFirstname={handleFirstname}
              onLastname={handleLastname}
              onEmail={handleEmail}
              onAge={handleAge}
              onTeleno={handleTeleno}
              onGender={handleGender}
              onImage={handleImage}
            />
          }
        />
        <Route
          path="/driverCard"
          element={
            <DriverCard
              details={details}
              onFirstname={handleFirstname}
              onLastname={handleLastname}
              onEmail={handleEmail}
              onAge={handleAge}
              onTeleNO={handleTeleno}
              onGender={handleGender}
              onImage={handleImage}
            />
          }
        />
        <Route
          path="/voterCard"
          element={
            <VotersCard
              details={details}
              onFirstname={handleFirstname}
              onLastname={handleLastname}
              onEmail={handleEmail}
              onAge={handleAge}
              onTeleNO={handleTeleno}
              onGender={handleGender}
              onImage={handleImage}
            />
          }
        />
        <Route
          path="/cardDownload"
          element={
            <Card
              firstname={details.firstname}
              lastname={details.lastname}
              email={details.email}
              age={details.age}
              teleNo={details.teleNo}
              gender={details.gender}
              image={details.image}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
