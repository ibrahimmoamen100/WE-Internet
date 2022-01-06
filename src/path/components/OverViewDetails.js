import React from "react";
import "./OverViewDetails.css";
import "../../index.css";
function OverViewDetails() {
  return (
    <div className="overview_details_container">
      <div className="overview_details_phoneN">
        <span className="overview_num_label"> :رقم الخدمة</span>
        <h5 className="overview_number"> 022844854</h5>
      </div>
      <span className="overview_details_q">هل تريد إدارة رقم آخر؟​</span>
      <button className="btn change_number">تغيير رقم الخدمة</button>
    </div>
  );
}

export default OverViewDetails;
