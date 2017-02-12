import React from 'react';
import {Route, Router, IndexRedirect, browserHistory} from 'react-router';
import App from '../layout/App';
import Work from '../components/Work';
import About from '../components/About';
import Background from '../components/Background';
import Contact from '../components/Contact';

const Path = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRedirect to='work'/>
          <Route path='work' component={Work}/>
          <Route path='about' component= {About}/>
          <Route path='background' component={Background}/>
          <Route path='contact' component={Contact}/>
      </Route>
    </Router>
  );
}

export default Path;
