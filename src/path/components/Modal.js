import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { logo } from "../../img/logo.png";

const PortalDemo = document.getElementById("portal");

export class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className="modal-container" onClick={this.props.closeButton}>
        {/* <img src={logo} alt="" /> */}
        <h1>hello this modal</h1>
      </div>,
      PortalDemo
    );
  }
}

export default Modal;
