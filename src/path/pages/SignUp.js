import React, { useState, useEffect, useCallbacks } from "react";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import "./SignUp.css";
import "../../index.css";
import Footer from "../components/Footer";

const SignUp = () => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const serviceNum = form.querySelector(".service-num");
    console.log(serviceNum.value.length);
    const servicePass = form.querySelector(".service-pass");
    console.log(servicePass.value.length > 0);
    if (
      serviceNum.value.startsWith("022") &&
      serviceNum.value.length === 10 &&
      servicePass.value.length > 6
    ) {
      // window.location.pathname = "/Home";
      // window.history.pushState("", "new page title", "/Home");
      <Link to="/Home" />;
      history.push("/Home");
    } else {
      history.push("/");
    }
  };

  const handlePassChange = (e) => {
    const inputPass = e.target;
    if (inputPass.value.length < 6) {
      inputPass.style.border = "1px solid red";
    } else {
      inputPass.style.border = "1px solid green";
    }
  };

  const handleNumChange = (e) => {
    const inputNum = e.target;
    if (inputNum.value.startsWith("022") && inputNum.value.length === 10) {
      inputNum.style.border = "1px solid green";
    } else {
      inputNum.style.border = "1px solid red";
    }
  };

  return (
    <div className="signup_container">
      <TopNavbar hide="hidden" />
      <Navbar hide="hidden" />
      <div className="signup_box container">
        <div className="signup_content">
          <h3>تسجيل الدخول</h3>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="exampleInputEmail1" className="form-label mb-0">
              رقم الخدمة
            </label>
            <input
              className="form-control mb-2 service-num"
              onChange={handleNumChange}
              placeholder="رقم الخدمة"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div className="mb-2">
              <a href="">نسيت كلمة السر؟</a>
              <label
                htmlFor="exampleInputPassword1"
                className="form-label mb-0"
                placeholder="رقم المرور"
              >
                رقم المرور
              </label>
            </div>
            <input
              type="password"
              onChange={handlePassChange}
              className="form-control mb-3 service-pass"
              id="exampleInputPassword1"
              placeholder="كلمة المرور"
            />
            <button className="btn btn-primary btn-sm" type="submit">
              دخول
            </button>
          </form>
          <hr />
          <button className="btn btn-primary btn-sm" type="submit">
            تسجيل
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;
