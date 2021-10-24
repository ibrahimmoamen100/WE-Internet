import React from "react";
import "./Points.css";
import "../../index.css";
import star from "../../img/star.png";

function Points() {
  return (
    <div className="points_container">
      <div className="points_title_btn">
        <h3 className="points_title">النقاط</h3>
        <button className="btn_points btn fs-6 py-0 px-3">تفاصيل النقاط</button>
      </div>
      <div className="points_details_container">
        <div className="circle_points">
          <img src={star} alt="" />
          <span>نقاط</span>
          <div className="circle_inner"></div>
          <div className="circle_content">
            <div className="points_left">
              <h2>1524</h2> <span>متبقية</span>
            </div>
          </div>
        </div>
        <span className="points_usage mt-4 fs-4"> 0 متسخدمة</span>
      </div>
    </div>
  );
}

export default Points;
