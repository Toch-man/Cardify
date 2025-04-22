import { useState } from "react";
import "./App.css";

export default function Home() {
  const [cardType, setCardType] = useState("");
  const [menu, setMenu] = useState(false);

  function handleCardype(card) {
    setCardType(card);
  }

  function handleMenuBox() {
    setMenu(!menu);
  }
  return (
    <div>
      <div className=" header">
        <img></img>
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
      {/* <h1> Welcome {`${user.name}`}</h1> */}
      <h2 style={{ fontSize: "35px", textAlign: "left", marginLeft: "30px" }}>
        {" "}
        Generate card
      </h2>
      <div className="cardContainer">
        {" "}
        <div
          onClick={() => {
            handleCardype("driverLicense");
          }}
          className="Driver-licence"
        >
          Driver licence
        </div>
        <div onClick={() => handleCardype("voterCard")} className="Voters-card">
          Voters Card
        </div>
        <div
          onClick={() => handleCardype("customCard")}
          className="custom-card"
        >
          Custom Card
        </div>
      </div>
    </div>
  );
}
