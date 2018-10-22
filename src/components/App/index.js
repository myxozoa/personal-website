import React from 'react';
import { Router } from '@reach/router';

import styles from './App.module.css';

import Navigation from '../Navigation';
import Waves from '../Waves';

import Landing from '../Pages/Landing';
import Projects from '../Pages/Projects';
import NotFound from '../Pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <h1 className={styles.name}>
            <div className="glitch" data-text="Ronnie" style={{ '--offset': `${Math.random() * 3}s` }}>Ronnie</div>
            <div className={styles.lastName}>
              <span className="glitch" data-text="Miksch" style={{ '--offset': `${Math.random() * 3}s` }}>Miksch</span>
              <div className={styles.periodContainer}>
                <div className={styles.period} />
              </div>
            </div>
          </h1>

          <Navigation />
        </header>

        <Router>
          <Landing path="/" />
          <Projects path="/projects" />
          {/* Contact */}
          <NotFound default />
        </Router>

        <Waves width="100" height="100" separation="50" amountX="120" amountY="30" />
      </div>
    );
  }
}

export default App;
