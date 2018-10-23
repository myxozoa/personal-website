import React from 'react';
import { Link } from '@reach/router';

import { seconds } from '../../helpers/uniqueOffset';

import styles from './Navigation.module.css';

class Navigation extends React.Component {
  render() {
    return (
      <nav className={styles.container}>
        <Link className={['navLink', 'glitch'].join(' ')} data-text="Home" style={{ '--offset': seconds() }} to="/">Home</Link>
        <Link className={['navLink', 'glitch'].join(' ')} data-text="Projects" style={{ '--offset': seconds() }} to="/projects">Projects</Link>
        <Link className={['navLink', 'glitch'].join(' ')} data-text="Contact" style={{ '--offset': seconds() + 5 }} to="/contact">Contact</Link>
      </nav>
    );
  }
}

export default Navigation;
