import React from 'react';
import styles from './NotFound.module.css';

class Landing extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className="glitch" data-text="Not_Found">Not Found</h2>
      </div>
    );
  }
}

export default Landing;