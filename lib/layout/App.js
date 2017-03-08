import React, {Component} from 'react';
import Header from '../components/Header';
import Work from '../components/Work';
import About from '../components/About';
import Background from '../components/Background';
import Contact from '../components/Contact';

export default class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <About />
        <div className='divider'>
        </div>
        <Work />
        {/* <Background /> */}
        {/* <Contact /> */}
        {this.props.children}
      </div>
    )
  }
}
