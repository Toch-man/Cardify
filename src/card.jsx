import { useState } from "react";

export default function Card({ firstname, lastname, age, email, teleNo }) {
  return (
    <>
      <div className="card">
        <div className="cardDetails">
          <img src="image.jpg" alt="userImage"></img>

          <p>
            {" "}
            <h1>{`${firstname}`}</h1>
            <h1>{`${lastname}`}</h1>
            <span>{`${age}`}</span> <span>{`${gender}`}</span>
            <p>{`${email}`}</p>
            <p>{`${teleNo}`}</p>
          </p>
        </div>
      </div>
      <button className="download">download</button>
    </>
  );
}
