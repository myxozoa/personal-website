import React from 'react';
import styles from './Landing.module.css';

import Waves from '../Waves';

class Landing extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Waves width="100" height="100" separation="50" amountX="120" amountY="30" />
      </div>
    );
  }
}

export default Landing;
