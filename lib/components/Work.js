import React, {Component} from 'react';
import Split from './Split';
import {Link} from 'react-router';

const Work = ({grabProject}) => {
  return (
    <div className='work' id='work'>
      <a onClick={() => {grabProject({image: 'recipe-app-background.png', title: 'RECIPE SHMECIPE', description: 'An application created in React and Redux to search for and keep track of recipes. I used a package called Quagga.js to scan upc codes and will eventually make recipe suggestions based on what is going bad. I worked with a backend called Firebase to sign up, sign up, and save recipes/ingredients'})}}>
        <Split title='Recipe Shmecipe' container='title-container top' first='first' second='second' />
      </a>
      <a onClick={() => {grabProject({image: 'movie-tracker-background.png', title: 'MOVIE TRACKER', description: 'An application created in React and Redux to peruse and select favorites that you can reference later. We utilized a Node Server built by the instructor to allow signing up, signing in, and saving/deleting favorites'})}}>
        <Split title='Movie Tracker' container='title-container' first='first' second='second' />
      </a>
      <a onClick={() => {grabProject({image: 'networker1.png', title: 'NETWORKER', description: 'An application created in React Native to keep track of potential business connections. We utilized a backend called Firebase that we used to sign up, sign in, and store specific users connections'})}}>
        <Split title='Networker' container='title-container' first='first' second='second' />
      </a>
      <a onClick={() => {grabProject({image: 'RemEMBER.png', title: 'RemEMBER', description: 'An application created in Ember to keep track of todos.'})}}>
        <Split title='RemEMBER' container='title-container' first='first' second='second' />
      </a>
      <a onClick={() => {grabProject({image: 'frogger.png', title: 'FROGGER', description: 'An application created in Javascript using canvas. You know the game, get the frog across the street.'})}}>
        <Split title='Frogger' container='title-container' first='first' second='second' />
      </a>
    </div>
  )
}

export default Work;
