import React from 'react';

import { seconds } from '../../helpers/uniqueOffset';

import styles from './Header.module.css';

import Navigation from '../Navigation';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className={styles.name}>
          <div className="glitch" data-text="Ronnie" style={{ '--offset': seconds() }}>
            ronnie
          </div>
          <div className={styles.lastName}>
            <span className="glitch" data-text="Miksch" style={{ '--offset': seconds() }}>
              miksch
            </span>
            <div className={styles.periodContainer}>
              <div className={[styles.period, 'glitch'].join(' ')} data-text="." style={{ '--offset': seconds() }} />
            </div>
          </div>
        </h1>

        <Navigation />
      </React.Fragment>
    );
  }
}

export default Header;
