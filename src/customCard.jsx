import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CustomCard({
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
            onChange={(e) => {
              onFirstname(e);
            }}
          ></input>
          <input
            type="text"
            className="forms"
            placeholder="lastname"
            value={details.lastname}
            onChange={(e) => {
              onLastname(e);
            }}
          ></input>
          <input
            type="email"
            className="forms"
            placeholder="email"
            value={details.email}
            onChange={(e) => {
              onEmail(e);
            }}
          ></input>
          <input
            type="tele"
            className="forms"
            placeholder="Enter phone no"
            value={details.teleNo}
            onChange={(e) => {
              onTeleno(e);
            }}
          ></input>
          <input
            type="age"
            className="forms"
            placeholder="enter your age"
            value={details.age}
            onChange={(e) => {
              onAge(e);
            }}
          ></input>
          <input
            type="text"
            className="forms"
            placeholder="organisation name"
            value={details.organisation}
            onChange={(e) => {
              setDetails({ details, organisation: e.target.value });
            }}
          ></input>
          <input
            className="forms"
            type="file"
            name={details.image}
            onChange={onImage}
          ></input>
          Gender:
          <label className="voterLabel">
            {"male "}
            <input type="radio" name="gender"></input>
          </label>
          <label className="voterLabel">
            {"female "}
            <input type="radio" name="gender"></input>
          </label>
          <select
            value={details.selectedOption}
            onChange={(e) => e.target.value}
          >
            <option value="" selected disabled hidden>
              Choose an option
            </option>
            <option value="publicOrganisation">Public Organisation</option>
            <option value="privateOrganisation"> Private Organisation</option>
          </select>
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
