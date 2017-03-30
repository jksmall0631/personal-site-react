import React, {Component} from 'react';
import {Link} from 'react-router';
import Split from './Split';

export default class Header extends Component{
  constructor(){
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.collapseHeader = this.collapseHeader.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('scroll', this.collapseHeader)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('scroll', this.collapseHeader)
  }

  handleScroll(event){
    let scrollTop = event.srcElement.body.scrollTop,
    itemTranslate = Math.min(0, scrollTop/3 - 60);
    let para = document.querySelector('.scroll-border');
    para.style.top = (-(scrollTop / 30) - 90) + 'px';
  }

  collapseHeader(event){
    let scrollTop = event.srcElement.body.scrollTop,
    itemTranslate = Math.min(0, scrollTop/3 - 60);
    let collapseHeader = document.querySelector('.header');
    if(scrollTop > 110) {
      collapseHeader.style.transform = 'translate(0px, -90px)';
    }
    if(scrollTop < 110) {
      collapseHeader.style.transform = 'translate(0px, 0px)';
    }
  }

  render(){
    return(
      <header className='header'>
        <div className='hide-logo'>
          <img className='logo' src={require('../images/personal-site-logo8.png')} height='90px'></img>
        </div>
        <div className='nav-cont'>
        <nav className='nav'>
          <ul>
            <li>
              <a href='#work'>
                <Split title='WORK' container='title-container-nav' first='first-nav' second='second-nav' />
              </a>
            </li>
            <li>
              <a onClick={() => {this.props.grabContact()}}>
                <Split title='CONTACT' container='title-container-nav' first='first-nav' second='second-nav' />
              </a>
            </li>
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
