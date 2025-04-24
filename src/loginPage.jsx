import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

export default function LoginPage({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

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
      handleLogin();
      navigate("/", { state: { email } });
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
            color: "black",
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
            onLogin(email, password);
          }}
        >
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

          <button type="submit" className="submit">
            login
          </button>
        </form>
        <footer className="footer">
          <p>{`${message}`}</p>
        </footer>
      </div>
    </div>
  );
}
