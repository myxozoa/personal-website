import React from 'react';

import { seconds } from '../../helpers/uniqueOffset';

import styles from './Header.module.css';

import Navigation from '../Navigation';

class Header extends React.Component {
  state = {
    show: true,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      if (this.props.location.pathname === '/' && !this.state.show) {
        this.setState({ show: true });
      } else {
        this.setState({ show: false });
      }
    }
  }

  toggleMenu = () => {
    if (this.props.location.pathname !== '/') {
      this.setState((prev) => ({
        show: !prev.show,
      }));
    }
  }

  render() {
    const { show } = this.state;
    const { location } = this.props;
    return (
      <React.Fragment>
        <div className={[location.pathname === '/' ? styles.homepage : styles.normal, show ? styles.closeButton : styles.openButton, styles.button].join(' ')} onClick={this.toggleMenu}>
          <div />
          <div />
          <div />
        </div>
        <div className={[show ? styles.show : styles.hide, location.pathname === '/' ? styles.noBgdHomepage : styles.normal].join(' ')} onClick={this.toggleMenu}>
          <h1 className={styles.name}>
            <div className="glitch" data-text="ronnie" style={{ '--offset': seconds() }}>
              ronnie
            </div>
            <div className={styles.lastName}>
              <span className="glitch" data-text="miksch" style={{ '--offset': seconds() }}>
                miksch
              </span>
              <div className={styles.periodContainer}>
                <div className={[styles.period, 'glitch'].join(' ')} data-text="." style={{ '--offset': seconds() }} />
              </div>
            </div>
          </h1>

          <Navigation show={this.state.show}/>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
