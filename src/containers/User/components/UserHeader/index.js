import React, { Component } from "react";
import "./style.css"

class UserHeader extends Component {
  render() {
    const { onBack, onLogout } = this.props;
    return (
      <header className="userHeader">
        <div className="userHeader__back" onClick={onBack}>
          &nbsp; &nbsp;GoBack
        </div>
        <div className="userHeader__list">
          <span className="userHeader__item userHeader__item--selected">
            Purchase
          </span>
          <span className="userHeader__item">Vocher</span>
        </div>
        <div className="userHeader__right" onClick={onLogout}>
          Log out
        </div>
      </header>
    );
  }
}

export default UserHeader;
