import { useState } from "react";
import { supabase } from "./supabaseClient";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp({ handleSignUp }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function onSignUp(fullName, email, password) {
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      }
    );

    if (signUpError) {
      setMessage(`sign up  error ${signUpError.message}`);

      return;
    }
    const user = signUpData;
    if (user) {
      const { error: insertError } = await supabase.from("profile").insert([
        {
          id: user.id,
          fullName: fullName,
        },
      ]);
      if (insertError) {
        setMessage(`signup error ${insertError.message}`);
      }
      handleSignUp();
      navigate("/");
    }
  }

  return (
    <div className="div1">
      <div className="detailsBox1">
        <h1
          style={{
            fontSize: "20px",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Welcome!
        </h1>
        <p
          style={{
            color: "white",
            textAlign: "left",
          }}
        >
          Enter your details
          <br />
          below to continue login.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSignUp(fullName, email, password);
          }}
        >
          <input
            type="text"
            placeholder="fullname"
            className="forms"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          ></input>
          <br />
          <input
            type="email"
            placeholder="Email"
            className="forms"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <input
            type="password"
            placeholder="password"
            className="forms"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br />
          <button className="submit" type="submit">
            Sign up
          </button>
        </form>
        <footer className="footer">
          <p style={{ color: "black", textAlign: "right" }}>
            already have an account?
          </p>
          <Link to="/login">
            <button className="submit">Login</button>
          </Link>
          <p>{`${message}`}</p>
        </footer>
      </div>
    </div>
  );
}
