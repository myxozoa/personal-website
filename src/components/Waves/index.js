import React from 'react';
import * as THREE from 'three';

import styles from './Waves.module.css';

import vertShader from './particle.vert';
import fragShader from './particle.frag';
import particle from '../../assets/particle.png';
import Stats from '../../stats.min';

import { getMousePos } from '../../helpers/getMousePos';

class Wave extends React.Component {
  constructor(props) {
    super(props);
    const { width, height, separation, amountX, amountY, debug } = this.props;

    this.container = React.createRef();
    this.width = width;
    this.height = height;
    this.separation = separation;
    this.amountX = amountX;
    this.amountY = amountY;
    this.debug = debug;
    this.mouseX = 0;
    this.mouseY = 0;
    this.sizeMultiplier = 1.5;
    this.hover = false;
    this.jump = 0;

    this.clock = null;
    this.geometry = null;
    this.particleSystem = null;
    this.camera = null;
    this.scene = null;
    this.renderer = null;
    this.stats = null;
    this.material = null;
    this.originalCameraPos = {};
  }

  componentDidMount() {
    this.init();
    this.animate();
  }

  onMouseMove = event => {
    this.hover = true;
    const mousePos = getMousePos(event);
    this.mouseX = -(mousePos.x - this.width / 2) / 2;
    this.mouseY = -(mousePos.y - this.height / 2) * 2;
  };

  init = () => {
    this.container.current.addEventListener('mousemove', this.onMouseMove);

    this.width = this.container.current.clientWidth;
    this.height = this.container.current.clientHeight;

    this.sizeMultiplier = 1 + this.height / 450;

    this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 1, 10000);

    this.camera.aspect = this.width / this.height;

    this.originalCameraPos = {
      x: this.camera.position.x,
      y: 500 + this.height * 2,
      z: 2000 + (this.height + this.width),
    };

    this.camera.position.set(this.originalCameraPos.x, this.originalCameraPos.y, this.originalCameraPos.z);

    this.scene = new THREE.Scene();

    this.clock = new THREE.Clock();

    this.clock.start();

    this.camera.lookAt(this.scene.position);

    const uniforms = {
      texture: {
        value: new THREE.TextureLoader().load(particle),
      },
    };

    this.material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertShader,
      fragmentShader: fragShader,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      vertexColors: true,
    });

    this.geometry = new THREE.BufferGeometry();

    const color = new THREE.Color();
    const positions = [];
    const colors = [];
    const sizes = [];

    for (var ix = 0; ix < this.amountX; ix++) {
      for (var iy = 0; iy < this.amountY; iy++) {
        positions.push(ix * this.separation - (this.amountX * this.separation) / 2); // x
        positions.push(0); // y
        positions.push(iy * this.separation - (this.amountY * this.separation) / 2); // z

        color.setHex(0xffffff);

        colors.push(color.r, color.g, color.b);

        sizes.push(20);
      }
    }

    this.geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3).setDynamic(true));
    this.geometry.addAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    this.geometry.addAttribute('size', new THREE.Float32BufferAttribute(sizes, 1).setDynamic(true));

    this.particleSystem = new THREE.Points(this.geometry, this.material);
    this.scene.add(this.particleSystem);

    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.container.current.appendChild(this.renderer.domElement);

    if (this.debug) {
      this.stats = new Stats();
      // Figure out cleaner way to do this
      this.container.current.parentElement.parentElement.appendChild(this.stats.domElement);
    }

    // window.addEventListener('resize', this.onWindowResize, false);
    (function() {
      const throttle = function(type, name, obj) {
        obj = obj || window;
        let running = false;
        const func = function() {
          if (running) {
            return;
          }
          running = true;
          requestAnimationFrame(function() {
            obj.dispatchEvent(new CustomEvent(name));
            running = false;
          });
        };
        obj.addEventListener(type, func);
      };

      throttle('resize', 'optimizedResize');
    })();

    window.addEventListener('optimizedResize', this.onWindowResize);

    document.addEventListener('mouseenter', () => {
      this.hover = true;
    });
    document.addEventListener('mouseout', () => {
      this.hover = false;
    });
    document.addEventListener('mousedown', () => {
      this.jump = 1;
    });
    document.addEventListener('mousemove', this.onMouseMove);


    document.addEventListener('touchstart', () => {
      this.hover = true;
    });
    document.addEventListener('touchend', () => {
      this.hover = false;
    });

    document.addEventListener('touchmove', this.onMouseMove);
  };

  onWindowResize = () => {
    this.width = this.container.current.clientWidth;
    this.height = this.container.current.clientHeight;

    this.camera.aspect = this.width / this.height;
    let cameraPos = {
      x: this.camera.position.x,
      y: 500 + this.height * 2,
      z: 2000 + (this.height + this.width),
    };

    this.sizeMultiplier = 1 + this.height / 450;

    this.camera.position.set(cameraPos.x, cameraPos.y, cameraPos.z);
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.width, this.height);
  };

  animate = () => {
    this.renderWaves();

    if (this.debug) this.stats.update();
    requestAnimationFrame(this.animate);
  };

  renderWaves = () => {
    if (this.hover) {
      this.camera.position.x += this.mouseX * 0.7 * 0.05 - this.camera.position.x * 0.06;
      this.camera.position.y += -(this.mouseY * 0.7) * 0.05 - this.camera.position.y * 0.07;
      this.camera.position.y += 100;
    } else {
      if (this.camera.position.x < this.originalCameraPos.x) {
        this.camera.position.x += (this.originalCameraPos.x - this.camera.position.x) * 0.02;
      } else if (this.camera.position.x > this.originalCameraPos.x) {
        this.camera.position.x -= (this.camera.position.x - this.originalCameraPos.x) * 0.02;
      }

      if (this.camera.position.y < this.originalCameraPos.y) {
        this.camera.position.y += (this.originalCameraPos.y - this.camera.position.y) * 0.02;
      } else if (this.camera.position.y > this.originalCameraPos.y) {
        this.camera.position.y -= (this.camera.position.y - this.originalCameraPos.y) * 0.02;
      }
    }

    this.camera.lookAt(this.scene.position);

    let positionPointer = 0;
    let sizePointer = 0;
    const time = this.clock.getElapsedTime() * 5;

    const sizes = this.geometry.getAttribute('size').array;
    const positions = this.geometry.getAttribute('position').array;

    for (var ix = 0; ix < this.amountX; ix++) {
      for (var iy = 0; iy < this.amountY; iy++) {
        const deltaX = ix + time;
        const deltaY = iy + time;
        positions[positionPointer + 1] = Math.sin(deltaX * 0.3) * 50 + Math.sin(deltaY * 0.5) * 50 + (this.jump ? Math.random() * this.jump * 150 : 0);
        const size = Math.cos(deltaX * 0.2) + (Math.sin(deltaY * 0.5) + 1) * (Math.cos(ix * 100) + 6) * this.sizeMultiplier;
        sizes[sizePointer] = size < 0 ? 0 : size;

        sizePointer++;
        positionPointer += 3;
      }
    }

    if (this.jump > 0) {
      this.jump -= 0.05;
    } else if (this.jump > 1) {
      this.jump = 1;
    } else if (this.jump < 0) {
      this.jump = 0;
    }

    this.geometry.getAttribute('size').needsUpdate = true;
    this.geometry.getAttribute('position').needsUpdate = true;
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.root} ref={this.container} />
      </div>
    );
  }
}

export default Wave;
