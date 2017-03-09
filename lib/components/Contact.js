import React, {Component} from 'react';

const Contact = ({remove}) => {
  return(
    <section className='contact'>
      <ul>
        <li><a href="mailto:jksmall0631@gmail.com"><img src={require("../images/email.png")} alt="" /></a></li>
        <li><a href="https://github.com/jksmall0631" target="_blank"><img src={require("../images/github.png")} alt="" /></a></li>
        <li><a href="https://www.linkedin.com/in/joshua-small" target="_blank"><img src={require("../images/linkedin.png")} alt="" /></a></li>
      </ul>
      <button className='escape' onClick={() => remove()}>ⓧ</button>
    </section>
  )
}

export default Contact;
