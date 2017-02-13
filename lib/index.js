import React from 'react';
import {render} from 'react-dom';
import Path from './router/Path';
import './style/reset';
import './style/main';

render(<Path />, document.querySelector('.application'));
