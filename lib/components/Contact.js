import React, {Component} from 'react';

export default class Contact extends Component{
  render(){
    return(
      <ul>
        {/* <li><a href="#" target="_blank"><img src="images/resume.png" alt="" /></a></li>
        <li><a href="#" target="_blank"><img src="images/email.png" alt="" /></a></li> */}
        <li><a href="https://github.com/jksmall0631" target="_blank"><img src={require("../images/github.png")} alt="" /></a></li>
        <li><a href="https://www.linkedin.com/in/joshua-small" target="_blank"><img src={require("../images/linkedin.png")} alt="" /></a></li>
        <li><a href="https://www.instagram.com/joshua.k.small/" target="_blank"><img src={require("../images/instagram.png")} alt="" /></a></li>
      </ul>
    )
  }
}
