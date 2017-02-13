import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component{
  render(){
    return(
      <header>
        <h1 className='logo'>JoshuaK.Small</h1>
        <nav className='nav'>
          <ul>
            <li><Link to={'/work'}>work</Link></li>
            <li><Link to={'/about'}>about</Link></li>
            <li><Link to={'/background'}>background</Link></li>
            <li><Link to={'/contact'}>contact</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}
