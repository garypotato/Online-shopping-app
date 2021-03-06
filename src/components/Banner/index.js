import React, { Component } from 'react'
import './style.css'

class Banner extends Component {
  render () {
    const { dark } =  this.props;
    const style = dark ? {backgroundImage: 'url(https://www.dpfile.com/app/node-mobile-m-isomorphism-web/static/ee72da6bea423a71f81c4e0be8a1dcf7.png)'} : null;
    return (
      <header className='banner' style={style}>
        <div className='banner__title'>
          <span className='banner__logo'/>
          <span className='banner__text'>Please use Mobile Mode</span>
        </div>
        <div className='banner__btns'>
          <a className='banner__btn' href='https://www.linkedin.com/feed/'>Review my profile</a>
          <a className='banner__btn banner__btn--bg' href='https://github.com/garypotato/mobile_App'>GitHub</a>
        </div>
      </header>
    )
  }
}

export default Banner