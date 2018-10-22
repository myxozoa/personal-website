import React from 'react';
import { Router } from '@reach/router';

import styles from './App.module.css';

import Navigation from '../Navigation';
import Waves from '../Waves';
import Landing from '../Pages/Landing';
import NotFound from '../Pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <h1 className={styles.name}>
            <div>Ronnie</div>
            <div className={styles.lastName}>
              <span>Miksch</span>
              <div className={styles.periodContainer}>
                <div className={styles.period} />
              </div>
            </div>
          </h1>

          <Navigation />
        </header>

        <Router>
          <Landing path="/" />
          {/* Contact */}
          <NotFound default />
        </Router>

        <Waves width="100" height="100" separation="50" amountX="120" amountY="30" />
      </div>
    );
  }
}

export default App;
