import React from 'react';
import { Router } from '@reach/router';
import anime from 'animejs';

import styles from './App.module.css';

import Waves from '../Waves';
import Header from '../Header';

import Landing from '../Pages/Landing';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';
import NotFound from '../Pages/NotFound';

function getMousePos(e) {
  var posx = 0,
    posy = 0;
  // if (!e) var e = window.event;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX;
    posy = e.clientY;
  }
  return { x: posx, y: posy };
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.header = React.createRef();
    this.content = React.createRef();
    this.bounds = null;
  }

  componentDidMount() {
    this.bounds = document.body.getBoundingClientRect();

    window.addEventListener('resize', () => (this.bounds = document.body.getBoundingClientRect()));
  }

  mouseEnter = () => {
    anime.remove(this.header.current);
    anime.remove(this.content.current);
  };

  mouseMove = event => {
    const mousePos = getMousePos(event);
    const relMousePos = { x: mousePos.x - this.bounds.left, y: mousePos.y - this.bounds.top };

    const config = {
      translation: { x: [5, -5], y: [5, -5], z: [0, 0] },
      rotation: { x: [2, -2], y: [-2, 2], z: [0, 0] },
      // rotation: { x: [0, 0], y: [0, 0], z: [0, 0] }
    };

    const transforms = {
      translation: {
        x: ((config.translation.x[1] - config.translation.x[0]) / this.bounds.width) * relMousePos.x + config.translation.x[0],
        y: ((config.translation.y[1] - config.translation.y[0]) / this.bounds.height) * relMousePos.y + config.translation.y[0],
        z: 10,
      },
      rotation: {
        x: ((config.rotation.x[1] - config.rotation.x[0]) / this.bounds.height) * relMousePos.y + config.rotation.x[0],
        y: ((config.rotation.y[1] - config.rotation.y[0]) / this.bounds.width) * relMousePos.x + config.rotation.y[0],
        z: 0,
      },
    };

    for (let test in transforms.rotation) {
      if (transforms.rotation[test] > 5) {
        transforms.rotation[test] = 5;
      } else if (transforms.rotation[test] < -5) {
        transforms.rotation[test] = -5;
      }
    }


    const transform3d =
      `translate3d(${transforms.translation.x}px,${transforms.translation.y}px,${transforms.translation.z}px)` +
      ' rotateX(' +
      transforms.rotation.x +
      'deg) rotateY(' +
      transforms.rotation.y +
      'deg) rotateZ(' +
      transforms.rotation.z +
      'deg)';


    this.header.current.style.transform = transform3d;
    this.content.current.style.transform = transform3d;
  };

  mouseLeave = event => {
    anime({
      targets: this.header.current,
      duration: 1200,
      easing: 'easeOutElastic',
      elasticity: 600,
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,
      translateX: 0,
      translateY: 0,
      translateZ: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    });

    anime({
      targets: this.content.current,
      duration: 1200,
      easing: 'easeOutElastic',
      elasticity: 600,
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,
      translateX: 0,
      translateY: 0,
      translateZ: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    });
  };

  render() {
    return (
      <div
        className={styles.app}
        onMouseMove={this.mouseMove}
        onMouseLeave={this.mouseLeave}
        onMouseEnter={this.mouseEnter}
        onTouchMove={this.mouseMove}
        onTouchEnd={this.mouseLeave}
        onTouchStart={this.mouseEnter}
      >
        <header ref={this.header} className={styles.header}>
          <Header />
        </header>

        <div className={styles.content} ref={this.content}>
          <Router>
            <Landing path="/" />
            <Projects path="/projects" />
            <Contact path="/contact" />
            <NotFound default />
          </Router>
        </div>

        <Waves width="100" height="100" separation="50" amountX="120" amountY="30" />
      </div>
    );
  }
}

export default App;
