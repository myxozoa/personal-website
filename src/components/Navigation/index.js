import React from 'react';

import styles from './Navigation.module.css';

class Navigation extends React.Component {
  render() {
    return (
      <nav className={styles.container}>
        <div>Home</div>
        <div>Projects</div>
        <div>Contact</div>
      </nav>
    );
  }
}

export default Navigation;
