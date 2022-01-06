import React from "react";
import { Link } from "react-router-dom";
import "./MoveToPage.css";
import "../../index.css";
function MoveToPage(props) {
  return (
    <div className="MBP_container container">
      <Link to="/"> الصفحه الرئيسية </Link>
      <span> / </span>
      <label> {props.name} </label>
    </div>
  );
}

export default MoveToPage;
