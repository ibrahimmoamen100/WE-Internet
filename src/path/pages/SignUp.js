import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../index.css";
import addData from "../../reducers/actions";
import Footer from "../components/Footer";
import "./SignUp.css";

// start components
const SignUp = (props) => {
  const history = useHistory();
  const [serviceNumber, setNumber] = useState(0);
  const [name, setName] = useState("لا يوجد");
  const [balance, setBalance] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceNum = form.querySelector(".service-num");
    // const servicePass = form.querySelector(".service-pass");

    if (serviceNum.value.length >= 5) {
      <Link to="/Home" />;
      history.push("/Home");
      props.addData(serviceNumber, name, balance);
    } else {
      history.push("/");
    }
  };

  const handlePassChange = (e) => {
    const inputPass = e.target;
    setName(e.target.value);
    if (inputPass.value.length < 5) {
      inputPass.style.border = "1px solid red";
    } else {
      inputPass.style.border = "1px solid green";
    }
  };
  const handleNumChange = (e) => {
    const inputNum = e.target;
    setNumber(e.target.value);

    if (inputNum.value.length >= 4) {
      inputNum.style.border = "1px solid green";
    } else {
      inputNum.style.border = "1px solid red";
    }
  };
  const handleBalanceChange = (e) => {
    const inputBalance = e.target;
    setBalance(inputBalance.value);

    if (inputBalance.value.length >= 1) {
      inputBalance.style.border = "1px solid green";
    } else {
      inputBalance.style.border = "1px solid red";
    }
  };

  return (
    <div className="signup_container">
      <TopNavbar hide="hidden" />
      <Navbar hide="hidden" hideMenu="hidden" />
      <div className="signup_box container">
        <div className="signup_content">
          <h3>تسجيل الدخول</h3>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="exampleInputEmail1" className="form-label mb-0">
              رقم الخدمة
            </label>
            <input
              type="number"
              className="form-control mb-2 service-num"
              onChange={handleNumChange}
              placeholder="رقم الخدمة"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label id="exampleInputPassword1" className="form-label mb-0">
              اللقب | الأسم
            </label>
            <input
              type="text"
              onChange={handlePassChange}
              className="form-control mb-3 service-pass"
              id="exampleInputPassword1"
              placeholder="الاسم ثلاثي "
            />
            <label id="exampleInputBalance" className="form-label mb-0">
              المبلغ
            </label>
            <input
              type="number"
              onChange={handleBalanceChange}
              className="form-control mb-3 service-pass"
              id="exampleInputBalance"
              placeholder=" المبلغ "
            />
            <button
              className="btn btn-primary btn-sm"
              type="submit"
              onClick={() => props.addData(serviceNumber, name, balance)}
            >
              دخول
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default connect(
  (state) => {
    return {
      content: state,
    };
  },
  { addData }
)(SignUp);
