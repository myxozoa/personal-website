import React from 'react';
import styles from './App.module.css';

import Waves from '../Waves';
import Navigation from '../Navigation';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <span>Ronnie Miksch</span>

          <Navigation />
        </header>

        <Waves width="100" height="100" separation="50" amountX="120" amountY="30" debug />
      </div>
    );
  }
}

export default App;
