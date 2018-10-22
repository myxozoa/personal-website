import React from 'react';
import { Router } from '@reach/router';

import styles from './App.module.css';

import Navigation from '../Navigation';
import Landing from '../Landing';

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
        </Router>
      </div>
    );
  }
}

export default App;
