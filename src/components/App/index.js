import React from 'react';
import { Router } from '@reach/router';

import styles from './App.module.css';

import Navigation from '../Navigation';
import Landing from '../Pages/Landing';
import NotFound from '../Pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <span>Ronnie Miksch</span>

          <Navigation />
        </header>

        <Router>
          <Landing path="/" />
          {/* Contact */}
          <NotFound default />
        </Router>
      </div>
    );
  }
}

export default App;
