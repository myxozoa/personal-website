import React from 'react';
import Tilt from 'react-tilt'

import styles from './Projects.module.css';

import projects from '../../../assets/projects.json';

class Projects extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={[styles.title, 'glitch'].join(' ')} data-text="Projects">Projects</h2>
        <section className={styles.projects}>
        {
          projects.map(project => (
          <Tilt key={Math.random()} className="Tilt" options={{ max : 10, reverse: true, scale: 1.01 }} style={{ height: 250, width: 250 }}>
            <a href={project.url} className={styles.link}>
              <div className={styles.project}>
                <div className={styles.projectName}>{project.title}</div>
                <div className={styles.projectDesc}>{project.description}</div>
              </div>
            </a>
          </Tilt>
          ))
        }
        </section>
      </div>
    );
  }
}

export default Projects;
