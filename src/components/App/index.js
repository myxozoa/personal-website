import React from 'react';
import styles from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <span>Ronnie Miksch</span>

          <nav>
            <div>Home</div>
            <div>Projects</div>
            <div>Contact</div>
          </nav>
        </header>
      </div>
    );
  }
}

export default App;
