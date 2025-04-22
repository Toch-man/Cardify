import { useState } from "react";
import { supabase } from "./supabaseClient";
import { useNavigate } from "react-router-dom";

export default function signUp({ handleSignUp }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function handleSignUp(fullName, email, password) {
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
      const { error: insertError } = await supabase.from("profile").insert[
        {
          id: user.id,
          fullName: fullName,
        }
      ];
      if (insertError) {
        setMessage(`signup error ${insertError.message}`);
      }
    }
  }

  async function onLogin(email, password) {
    const { data: loginData, error: loginError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });
    if (loginError) {
      setMessage(`login error ${loginError.message}`);
      return;
    }
    const userLogins = loginData;
    if (userLogins) {
      const { error: getError } = await supabase
        .from("profile")
        .select("fullName")
        .eq("id", user.id)
        .single();
      handleSignUp();
      navigate("/");
    }
  }
  return (
    <div className="detailsBox">
      <h1
        style={{
          fontSize: "20px",
          color: "white",
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
          handleSignUp(fullName, email, password);
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
        <p style={{ color: "white", textAlign: "right" }}>forgot password</p>

        <button id="submit" onClick={handleSignUp(fullName, email, password)}>
          Sign up
        </button>
      </form>
      <footer className="footer">
        <p style={{ color: "white", textAlign: "right" }}>
          already have an account?
        </p>
        <button>login</button>
        <p>{`${message}`}</p>
      </footer>
    </div>
  );
}
