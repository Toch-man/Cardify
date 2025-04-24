import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [cardType, setCardType] = useState("");
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { username } = location.state || {};

  function handleCardype(card) {
    setCardType(card);
  }

  function handleMenuBox() {
    setMenu(!menu);
  }
  return (
    <div>
      <div className=" header">
        <h1 style={{ textAlign: "left", color: "white" }}>CARDIFY</h1>
        {menu ? (
          <p
            style={{
              position: "absolute",
              right: "0px",
              backgroundColor: "bisque",
            }}
          >
            <button
              style={{
                position: "absolute",
                right: "0px",
                backgroundColor: "bisque",
                outline: "none",
              }}
              onClick={handleMenuBox}
            >
              X
            </button>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Log out</li>
            </ul>
          </p>
        ) : (
          <p style={{ textAlign: "right" }} onClick={handleMenuBox}>
            Menu
          </p>
        )}
      </div>
      <h1> Welcome {`${username}`}</h1>
      <h2 style={{ fontSize: "35px", textAlign: "left", marginLeft: "30px" }}>
        {" "}
        Generate card
      </h2>
      <div className="cardContainer">
        {" "}
        <div
          onClick={() => {
            handleCardype("driverLicense");
            navigate("/driverCard");
          }}
          className="Driver-licence"
        >
          Driver licence
        </div>
        <div
          onClick={() => {
            handleCardype("voterCard");
            navigate("/voterCard");
          }}
          className="Voters-card"
        >
          Voters Card
        </div>
        <div
          onClick={() => {
            handleCardype("customCard");
            navigate("/CustomCard");
          }}
          className="custom-card"
        >
          Custom Card
        </div>
      </div>
    </div>
  );
}
