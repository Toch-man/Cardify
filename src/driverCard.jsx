import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DriverCard({
  details,
  onFirstname,
  onLastname,
  onEmail,
  onTeleno,
  onAge,
  onImage,
}) {
  const navigate = useNavigate();
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
      <div>
        <h1> Fill all details below</h1>
        <form>
          <input
            type="text"
            className="forms"
            placeholder="firstname"
            value={details.firstname}
            onChange={(e) => onFirstname(e)}
          ></input>
          <br />
          <input
            type="text"
            className="forms"
            placeholder="lastname"
            value={details.lastname}
            onChange={(e) => onLastname(e)}
          ></input>
          <br />
          <input
            type="email"
            className="forms"
            placeholder="email"
            value={details.email}
            onChange={(e) => onEmail(e)}
          ></input>
          <br />
          <input
            type="tele"
            className="forms"
            placeholder="enter phone no"
            value={details.teleNo}
            onChange={(e) => onTeleno(e)}
          ></input>
          <br />
          <input
            type="number"
            className="forms"
            placeholder="Age"
            value={details.age}
            onChange={(e) => onAge(e)}
          ></input>
          <input type="file" name={details.image} onChange={onImage}></input>
          <br />
          <button
            type="submit"
            className=" submit"
            onClick={navigate("/cardDownload")}
          >
            Create card
          </button>
        </form>
      </div>
    </div>
  );
}
