import React from "react";
import MoveToPage from "../components/MoveToPage";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Additionalpage.css";

function Additionalpage() {
  return (
    <div className="additional_page">
      <TopNavbar />
      <Navbar />
      <div className="additional_page-container container">
        <MoveToPage name="عروض وإضافات" />
        <h3 className="pt-3 pb-0 "> العروض والإضافات</h3>
        <span className="fs-6"> !تمتع بالعروض والإضافات المصممة خصيصًا لك</span>
      </div>
      <Footer />
    </div>
  );
}

export default Additionalpage;
