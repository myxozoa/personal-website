import React from 'react';
import styles from './Projects.module.css';

class Projects extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className="glitch" data-text="Projects">Projects</h2>
        <section>
          <div className={styles.project}>
            <div className={styles.projectTitle}>Main Course</div>
            <div className={styles.projectDesc}>Restaurant App for the ages broham</div>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
