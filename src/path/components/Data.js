import React from "react";
import "./Data.css";
import "../../index.css";
import { Link } from "react-router-dom";

function Data() {
  return (
    <div className="data_container">
      <h4>مرحبا, محمود حسين</h4>
      <div className="data_details_container">
        <div className="user_data">
          <span>انت الان تدير رقم:</span>
          <select className="form-select w-auto" id="inputGroupSelect01">
            <option value="1">0224536504</option>
          </select>
          <button className="btn btn-primary btn-sm manage_account_btn mt-4 px-3 py-1">
            إدارة حسابك
          </button>
        </div>
        <div className="kuota_data">
          <span className="current_bunch">باقتك الحالية</span>
          <h4 className="kuota_details">سرعة سوبر 2 -(غير محدودة)</h4>
          <div className="kuota_btns">
            <Link
              to=""
              className="btn btn-primary btn-sm change_btn mt-3 px-4 py-1"
            >
              تغيير
            </Link>
            <Link to="" className="details_link  mt-3">
              تفاصيل
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
