import React from "react";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="signup_container">
      <TopNavbar />
      <Navbar />
      hello from sign up
      <button> click here to go home page</button>
    </div>
  );
}

export default SignUp;
