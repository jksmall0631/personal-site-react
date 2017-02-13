import React, {Component} from 'react';

export default class About extends Component{
  render(){
    return(
      <section className="bio" id="about">
        <div className="left">
          <img src="images/NZ.jpg" alt="personal photo" />
        </div>
        <div className="right">
          <h2>hey there,</h2>
          <p className="center">
            my name is Joshua Small.
          </p>
          <p className="center">
            front-end developer.
          </p>
          <p className="center">
            designer.
          </p>
          <p className="center">
            analytical thinker.
          </p>
          <p className="center">
            hard worker.
          </p>
          <p>
            I design and build clean, easy to use websites. There are a handful of things I really care about;
            quality, structure, tech, design, and life-long learning. These are the assets I apply to my work.
            I do well in a group environment, contributing my unique vision, ambition, and a diverse skillset.
            Currently making my way through The Turing School of Software and design, sharpening those skills.
          </p>
          <p>
            If I'm not on my computer, you'll probably find me in the snow somewhere.
          </p>
        </div>
      </section>
    )
  }
}
