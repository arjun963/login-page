import React from "react";
import "./App.css";
import video from "../src/assets/video.mp4";

function Login() {
  return (
    <div className="main">
      <video src={video} autoPlay loop muted />
      <div className="wrapper">
        <form action="#">
          <div className="title">Login</div>

          <div className="field">
            <input type="text" required />
            <label>Email Address</label>
          </div>
          <div className="field">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="content">
            <div className="checkbox">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className="pass-link">
              <a href="#">Forgot password?</a>
            </div>
          </div>
          <div className="field">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">
            Not a member? <a href="#">Signup now</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
