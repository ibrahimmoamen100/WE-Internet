import React from "react";
import "./CurrentPlan.css";
import "../../index.css";

function CurrentPlan() {
  return (
    <div className="current_plan_container">
      <span className="current_plan_label">الخطة الحالية</span>
      <h5 className="current_plan_speed">سرعة سوبر 2 -(غير محدوده)</h5>
      <div className="current_plan_cost_content">
        <span className="current_plan_cost_label"> :تكلفة التجديد</span>
        <h4 className="current_plan_cost_num">210.00</h4>
        <span>جنيه</span>
      </div>
      <div className="current_plan_btns_deta">
        <span className="current_deta">
          تاريخ التجديد: 26-12-2021, 26 أيام متبقية
        </span>
        <div className="btns_current_plan">
          <button className="btn btn-sm change_plan_btn"> تغيير الخطة</button>
          <button className="btn btn-sm subscription_renewal_btn">
            تجديد الاشتراك
          </button>
        </div>
      </div>
    </div>
  );
}

export default CurrentPlan;
