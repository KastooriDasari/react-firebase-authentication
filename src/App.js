import { async } from "@firebase/util";
import { useRef, useState } from "react";
import "./App.css";
import { signInWithGoogle } from "./firebase";
import { signInWithFacebook } from "./firebase";
import { signInWithGithub } from "./firebase";
import { signup, logout, login, useAuth } from "./firebase";

function App() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    //  try{
    await signup(emailRef.current.value, passwordRef.current.value);
    //}catch{
    //alert("Error!");
    // }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    try {
      await logout();
    } catch {
      alert("Error!");
    }
  }

  return (
    <center>
      <div className="App">
        <div>currently logged in as :{currentUser?.email}</div>
        <h1>Login</h1>
        <div className="fields">
          <input
            className="p"
            ref={emailRef}
            type="email"
            placeholder="enter your email"
            required
          />
          <br />
          <br />
          <input
            ref={passwordRef}
            type="password"
            placeholder="enter password"
            required
          />
        </div>
        <br />
        <button disabled={loading || currentUser} onClick={handleSignup}>
          Signup
        </button>
        <button disable={loading || currentUser} onClick={handleLogin}>
          LogIn
        </button>
        <button disable={loading || currentUser} onClick={handleLogout}>
          LogOut
        </button>
        <br />
        <br />
        <button onClick={signInWithGoogle}>Sign in with Google</button>
        <button onClick={signInWithFacebook}>Sign in with FaceBook</button>
        <button onclick={signInWithGithub}>Sihn in with Github</button>
      </div>
    </center>
  );
}

export default App;
