import React, { Component } from "react";
import "./style.css"

class Tip extends Component {
  render() {
    const { message, onClose } = this.props;
    return (
      <div className="tip">
        <div className="tip__alert">
          <div className="tip__content">{message}</div>
          <div className="tip__btns">
            <span className="tip__btn" onClick={onClose}>
              confirm
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Tip;
