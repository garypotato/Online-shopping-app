import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Discount extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="discount">
        <span className="discount__header">
          <span className="discount__title">Voucher</span>
          <span className="discount__more">More voucher</span>
          <span className="discount__arrow" />
        </span>
        <div className="discount__content">
          {data.map((item, index) => {
            return (
              <Link
                key={item.id}
                to={`/detail/${item.id}`}
                className="discount__item"
              >
                <div className="discount__itemPic">
                  <img alt="" width="100%" height="100%" src={item.picture} />
                </div>
                <div className="discount__itemTitle">{item.shop}</div>
                <div className="discount__itemPriceWrapper">
                  <ins className="discount__itemCurrentPrice">
                    {item.currentPrice}
                  </ins>
                  <del className="discount__itemOldPrice">{item.oldPrice}</del>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Discount;
