import React, { Component } from 'react'
import './style.css'

class Footer extends Component {
  render () {
    return (
      <footer className='footer'>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          My
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          Forum
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          Add more shop
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          Comments
        </a>
        <br/>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          Gary App
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          App download
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          Marriage
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          Kids
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          Home
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          Party
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          Education
        </a>
        <br/>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          PC
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
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