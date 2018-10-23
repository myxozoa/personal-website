import React from 'react';
import styles from './Contact.module.css';

class Contact extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <div>Ronnie Miksch</div>
          <div>Software Developer</div>
          <div>SF Bay Area</div>
          <div>510-356-7749</div>
          <div>mikschronnie@gmail.com</div>
          <div>https://github.com/myxozoa</div>
        </div>
      </div>
    );
  }
}

export default Contact;
