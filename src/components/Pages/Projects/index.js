import React from 'react';
import Tilt from 'react-tilt'

import styles from './Projects.module.css';

class Projects extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className="glitch" data-text="Projects">Projects</h2>
        <section>
        <Tilt className="Tilt" options={{ max : 10, reverse: true, scale: 1.01 }} style={{ height: 250, width: 250 }} >
          <div className={styles.project}>
            <div className={styles.projectName}>Main Course</div>
            <div className={styles.projectDesc}>Restaurant App for the ages broham</div>
          </div>
        </Tilt>
        </section>
      </div>
    );
  }
}

export default Projects;
