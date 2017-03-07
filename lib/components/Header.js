import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component{
  constructor(){
    super();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60);
    let para = document.querySelector('.scroll-border');
    para.style.top = (-(scrollTop / 30) - 90) + 'px';
    let collapseBorder = document.querySelector('.scroll-cont');
    if(scrollTop < 60){
    collapseBorder.style.top = -(scrollTop * 1.5) + 'px';
    }
    let collapseHeader = document.querySelector('.header');
    if(scrollTop < 60){
    collapseHeader.style.top = -(scrollTop * 1.5) + 'px';
    }
  }

  render(){
    return(
      <header className='header'>
        <img className='logo' src={require('../style/personal-site-logo8.png')} height='90px'></img>
        <div className='nav-cont'>
        <nav className='nav'>
          <ul>
            <li><Link to={'/work'}>work</Link></li>
            <li><Link to={'/about'}>about</Link></li>
            <li><Link to={'/background'}>background</Link></li>
            <li><Link to={'/contact'}>contact</Link></li>
          </ul>
        </nav>
        </div>
        <div className='scroll-cont'>
          <div className='scroll-border'></div>
        </div>
      </header>
    )
  }
}
