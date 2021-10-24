import React, { useEffect, useState } from "react";
import "../../index.css";
import "./Navbar.css";
import logo from "../../img/TEArabic-Logo.png";
import { Link } from "react-router-dom";
import $ from "jquery";
// window.$ = window.jQuery = require("jquery");

function Navbar() {
  // useEffect function
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  let bodyy = document.querySelector("body");
  let menuList = document.querySelector(".menu_list");

  const [title, setTitle] = useState("نظره عامه علي الحساب");

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    let menuIcon = document.querySelector(".menu_icons");
    let menuList = document.querySelector(".menu_list");
    let blackScreen = document.querySelector(".black_screen");

    menuIcon.addEventListener("click", () => {
      menuIcon.classList.toggle("menu_active");
      if (menuIcon.classList.contains("menu_active")) {
        menuList.style.right = "0px";
        menuList.style.display = "flex";

        blackScreen.style.opacity = "1";
        blackScreen.style.visibility = "visible";
        bodyy.style.overflowY = "hidden";
      } else {
        menuList.style.right = "-290px";
        blackScreen.style.opacity = "0";
        blackScreen.style.visibility = "hidden";
        bodyy.style.overflowY = "scroll";
      }
    });
    blackScreen.addEventListener("click", () => {
      menuList.style.right = "-290px";
      blackScreen.style.opacity = "0";
      blackScreen.style.visibility = "hidden";
      menuIcon.classList.remove("menu_active");
      bodyy.style.overflowY = "scroll";
    });

    // window.addEventListener("resize", () => {
    //   console.log(this.width);
    // });

    $("#link_one").hover(
      function () {
        $("#drop_one").fadeIn(100, function () {
          $(this).css({ display: "flex" });
        });
      },
      function () {
        $("#drop_one").fadeOut(100);
      }
    );
    $("#link_two").hover(
      function () {
        $("#drop_two").fadeIn(100, function () {
          $(this).css({ display: "flex" });
        });
      },
      function () {
        $("#drop_two").fadeOut(100);
      }
    );

    // black screen show / hide

    let linkOne = document.getElementById("link_one");
    let linkTwo = document.getElementById("link_two");

    linkOne.addEventListener("mouseenter", () => {
      blackScreen.style.opacity = "1";
      blackScreen.style.visibility = "visible";
    });
    linkOne.addEventListener("mouseleave", () => {
      blackScreen.style.opacity = "0";
      blackScreen.style.visibility = "hidden";
    });
    linkTwo.addEventListener("mouseenter", () => {
      blackScreen.style.opacity = "1";
      blackScreen.style.visibility = "visible";
    });
    linkTwo.addEventListener("mouseleave", () => {
      blackScreen.style.opacity = "0";
      blackScreen.style.visibility = "hidden";
    });
  });
  return (
    <>
      <div className="black_screen"></div>
      <div className="entire_navbar_container">
        <div className="menu_list">
          <div className="menu_list_container">
            <Link to="/">الرئيسية</Link>
            <Link to="/">الاستهلاك</Link>
            <Link to="/">الخطط والخدمات</Link>
            <Link to="/">عروض وايضافات</Link>
            <Link to="/We-Pay"> WE Pay</Link>
          </div>
        </div>
        <div className="container container-s">
          <div className="navbar_container">
            {/* logo */}

            <Link to="" className="logo_navbar">
              <img src={logo} className="p-3" alt="" />
            </Link>
            <div className="menu_icons">
              <span className="first_line"></span>
              <span className="second_line"></span>
              <span className="theard_line"></span>
            </div>

            <div className="nav_links">
              <div className="nav_link" id="link_one">
                <Link to="/" className="active">
                  الرئيسيه
                </Link>
                <div className="nav_dropdown" id="drop_one">
                  <Link to="/">نظرة عامه علي الحساب</Link>
                  <Link
                    onClick={() => {
                      setTitle("إداره الحساب");
                    }}
                    to="/"
                  >
                    إداره الحساب
                  </Link>
                </div>
              </div>
              <div className="nav_link">
                <Link
                  to=""
                  onClick={() => {
                    setTitle("الاستهلاك");
                  }}
                >
                  الاستهلاك
                </Link>
              </div>
              <div className="nav_link" id="link_two">
                <Link to="">الخطط و الخدمات</Link>
                <div className="nav_dropdown" id="drop_two">
                  <div className="first_plans_dropdown">
                    <h6>خدمات الانترنت الارضي</h6>
                    <Link
                      to="/"
                      onClick={() => {
                        setTitle("اسم الامستخدم و كلمه المرور");
                      }}
                    >
                      اسم الامستخدم و كلمه المرور
                    </Link>
                    <Link
                      onClick={() => {
                        setTitle("طلب جهاز");
                      }}
                      to="/"
                    >
                      طلب جهاز
                    </Link>
                  </div>
                  <div className="second_plans_dropdown">
                    <Link to="/">نظرة عامه </Link>
                    <Link to="/">تغيير الخطة</Link>
                    <Link to="/"> الباقات الإضافية</Link>
                  </div>
                  <div className="theard_plans_dropdown">
                    <Link to="/">
                      <h4>تفعيل الخطوط</h4>
                      <span>يمكنك تفعيل الخطوط من هنا</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="nav_link">
                <Link
                  to="/Additional"
                  onClick={() => {
                    setTitle("عروض و إضافات");
                  }}
                >
                  عروض و إضافات
                </Link>
              </div>
              <div className="nav_link">
                <Link
                  to="/We-Pay"
                  onClick={() => {
                    setTitle("We Pay");
                  }}
                >
                  WE Pay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
