import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./style.css"

class HomeHeader extends Component {
  render() {
    return (
      <div className="homeHeader">
        <header className="homeHeader__wrapper">
          <a className="homeHeader__city">Sydney</a>
          <Link to="/search" className="homeHeader__search">Search shop and attractions</Link>
          <Link to="/user" className="homeHeader__self">
            <div className="homeHeader__portrait"/>
          </Link>
        </header>
      </div>
    );
  }
}

export default HomeHeader;