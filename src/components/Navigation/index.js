import React from 'react';
import { Link } from '@reach/router';

import styles from './Navigation.module.css';

class Navigation extends React.Component {
  render() {
    return (
      <nav className={styles.container}>
        <Link className="glitch" data-text="Home" style={{ '--offset': `${Math.random() * 3}s` }} to="/">Home</Link>
        <Link className="glitch" data-text="Projects" style={{ '--offset': `${Math.random() * 2}s` }} to="/projects">Projects</Link>
        <Link className="glitch" data-text="Contact" style={{ '--offset': `${Math.random() * 5}s` }} to="/contact">Contact</Link>
      </nav>
    );
  }
}

export default Navigation;
