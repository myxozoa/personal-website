import React from 'react';
import { Link } from '@reach/router';

import { seconds } from '../../helpers/uniqueOffset';

import styles from './Navigation.module.css';

class Navigation extends React.Component {
  render() {
    return (
      <nav className={[styles.container, this.props.hidden ? styles.hide : styles.show].join(' ')}>
        <Link className={['navLink', 'glitch'].join(' ')} data-text="home" style={{ '--offset': seconds() }} to="/">home</Link>
        <Link className={['navLink', 'glitch'].join(' ')} data-text="projects" style={{ '--offset': seconds() }} to="/projects">projects</Link>
        <Link className={['navLink', 'glitch'].join(' ')} data-text="contact" style={{ '--offset': seconds() + 5 }} to="/contact">contact</Link>
      </nav>
    );
  }
}

export default Navigation;
