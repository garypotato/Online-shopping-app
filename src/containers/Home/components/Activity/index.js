import React, { Component } from "react";
import "./style.css";

class Activity extends Component {
  render() {
    return (
      <div className="activity">
        <div className="activity__block">
          <a
            className="activity__content activity__content--pink"
            href="https://www.linkedin.com/feed/"
          >
            <div className="activity__title">$88</div>
            <div className="activity__subTitle activity__subTitle--pink">
              Voucher
            </div>
            <img
              alt=""
              className="activity__pic"
              src="https://op.meituan.net/oppkit_pic/20160310032241-1e027deb-2/a3a31fff2e047a907a53d6488877f7fe.png"
            />
          </a>
        </div>
        <div className="activity__block">
          <a
            className="activity__content activity__content--blue"
            href="https://www.linkedin.com/feed/"
          >
            <div className="activity__title">More discounts</div>
            <div className="activity__subTitle activity__subTitle--blue">
              Your lifestyle
            </div>
            <img
              alt=""
              className="activity__pic"
              src="https://op.meituan.net/oppkit_pic/20160310032241-1e027deb-2/a9b8c52c341892600ff7260c89025a59.png"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Activity;
