import React, {Component} from 'react';
import Split from './Split';
import {Link} from 'react-router';

export default class Work extends Component{
  render(){
    return (
      <div className='work'>
        <Link to='project' onClick={this.sendProject({image: 'recipe-app-background', title: 'Recipe Shmecipe', description: ''})}>
          <Split title='Recipe Shmecipe' container='title-container top' first='first' second='second' />
        </Link>
        <Split title='Movie Tracker' container='title-container' first='first' second='second' />
        <Split title='Networker' container='title-container' first='first' second='second' />
        <Split title='RemEMBER' container='title-container' first='first' second='second' />
        <Split title='Frogger' container='title-container' first='first' second='second' />
      </div>
    )
  }
}
