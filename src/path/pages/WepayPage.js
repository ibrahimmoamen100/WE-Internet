import React from "react";
import "./WepayPage.css";
import wepayimage from "../../img/we pay.png";
import MoveToPage from "../components/MoveToPage";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function WepayPage() {
  return (
    <div className="WepayPage">
      <TopNavbar />
      <Navbar />
      <div className="WepayPage_container ">
        <MoveToPage name="WE Pay" />
        <div className="WepayPage_img_container">
          <img src={wepayimage} alt="" className="WepayPage_img" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WepayPage;
