import React, {Component} from 'react';

export default class About extends Component{

  render(){
    return(
      <section className='bio' id='about'>
          <img className='bio-image' src={require('../images/moi.jpg')} width='600px' alt='personal photo' />
        <div className='right'>
          <h2 className='about-title'>Hey,</h2>
          <p>
            My name is Joshua Small.
            I design and build clean, easy to use websites. There are a handful of things I really care about;
            quality, structure, tech, design, and life-long learning. These are the assets I apply to my work.
            I do well in a group environment, contributing my unique vision, ambition, and a diverse skillset.
            Currently making my way through The Turing School of Software and design, sharpening those skills.
          </p>
          <br/>
          <p>
            If I'm not on my computer, you'll probably find me in the snow somewhere.
          </p>
        </div>
          {/* <img className='scroll' src={require('../images/scroll-arrow.png')} alt="scroll-arrow" /> */}
      </section>
    )
  }
}
