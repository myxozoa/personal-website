import React from 'react';
import { Router } from '@reach/router';
import anime from 'animejs';

import styles from './App.module.css';

import Navigation from '../Navigation';
import Waves from '../Waves';

import Landing from '../Pages/Landing';
import Projects from '../Pages/Projects';
import NotFound from '../Pages/NotFound';

function getMousePos(e) {
  var posx = 0,
    posy = 0;
  if (!e) var e = window.event;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  return { x: posx, y: posy };
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.header = React.createRef();
    this.bounds = null;
  }

  componentDidMount() {
    this.bounds = document.body.getBoundingClientRect();
  }

  mouseEnter = () => {
    anime.remove(this.header.current);
  };

  mouseMove = event => {
    console.log(this.bounds);
    const mousePos = getMousePos(event);
    const docScrolls = { left: document.body.scrollLeft + document.documentElement.scrollLeft, top: document.body.scrollTop + document.documentElement.scrollTop };
    const relMousePos = { x: mousePos.x - this.bounds.left - docScrolls.left, y: mousePos.y - this.bounds.top - docScrolls.top };


    const config = {
      translation: { x: [-5, 5], y: [-5, 5], z: [0, 0] },
      rotation: { x: [5, -5], y: [-5, 5], z: [0, 0] },
      // rotation: { x: [0, 0], y: [0, 0], z: [0, 0] }
    };

    const transforms = {
      translation: {
        x: (config.translation.x[1] - config.translation.x[0]) / this.bounds.width * relMousePos.x + config.translation.x[0],
        y: (config.translation.y[1] - config.translation.y[0]) / this.bounds.height * relMousePos.y + config.translation.y[0],
        z: (config.translation.z[1] - config.translation.z[0]) / this.bounds.height * relMousePos.y + config.translation.z[0],
      },
      rotation: {
        x: (config.rotation.x[1] - config.rotation.x[0]) / this.bounds.height * relMousePos.y + config.rotation.x[0],
        y: (config.rotation.y[1] - config.rotation.y[0]) / this.bounds.height * relMousePos.x + config.rotation.y[0],
        z: (config.rotation.z[1] - config.rotation.z[0]) / this.bounds.width * relMousePos.x + config.rotation.z[0],
      },
    };
    // for(let test in transforms.rotation) {
    //   if (transforms.rotation[test] > 15) {
    //     transforms.rotation[test] = 15;
    //   } else if (transforms.rotation[test] < -15) {
    //     transforms.rotation[test] = -15;
    //   }
    // }

    this.header.current.style.WebkitTransform =
      'translateX(' +
      transforms.translation.x +
      'px) translateY(' +
      transforms.translation.y +
      'px) translateZ(' +
      transforms.translation.z +
      'px) rotateX(' +
      transforms.rotation.x +
      'deg) rotateY(' +
      transforms.rotation.y +
      'deg) rotateZ(' +
      transforms.rotation.z +
      'deg)';
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
  };

  render() {
    return (
      <div className={styles.app} onMouseMove={this.mouseMove} onMouseLeave={this.mouseLeave} onMouseEnter={this.mouseEnter}>
        <header ref={this.header} className={styles.header}>
          <h1 className={styles.name}>
            <div className="glitch" data-text="Ronnie" style={{ '--offset': `${Math.random() * 3}s` }}>
              Ronnie
            </div>
            <div className={styles.lastName}>
              <span className="glitch" data-text="Miksch" style={{ '--offset': `${Math.random() * 3}s` }}>
                Miksch
              </span>
              <div className={styles.periodContainer}>
                <div className={[styles.period, 'glitch'].join(' ')} data-text="." style={{ '--offset': `${Math.random() * 3}s` }} />
              </div>
            </div>
          </h1>

          <Navigation />
        </header>

        <Router>
          <Landing path="/" />
          <Projects path="/projects" />
          {/* Contact */}
          <NotFound default />
        </Router>

        <Waves width="100" height="100" separation="50" amountX="120" amountY="30" />
      </div>
    );
  }
}

export default App;
