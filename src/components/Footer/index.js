import React, { Component } from 'react'
import './style.css'

class Footer extends Component {
  render () {
    return (
      <footer className='footer'>
        <a className='footer__link' href="/">
          My
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="/">
          Forum
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="/">
          Add more shop
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="/">
          Comments
        </a>
        <br/>
        <a className='footer__link' href="/">
          Gary App
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="/">
          App download
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="/">
          Marriage
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="/">
          Kids
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="/">
          Home
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="/">
          Party
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="/">
          Education
        </a>
        <br/>
        <a className='footer__link' href="/">
          PC
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="/">
          Others
        </a>
        <em className="footer__seperator">|</em>
        <br/>
        <p className="footer__copyright">copyright ©2021 Gary</p>
      </footer>
    )
  }
}

export default Footer