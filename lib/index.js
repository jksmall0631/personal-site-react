import React from 'react';
import {render} from 'react-dom';
import App from './layout/App';
import './style/reset';
import './style/main';
import './style/media-queries';

render(<App />, document.querySelector('.application'));
