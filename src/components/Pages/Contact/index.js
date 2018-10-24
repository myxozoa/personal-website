import React from 'react';
import styles from './Contact.module.css';

class Contact extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className="glitch" data-text="contact">contact</h2>
        <div className={styles.box}>
          <div>ronnie miksch</div>
          <div>software developer</div>
          <div>sf bay area</div>
          <div>510-356-7749</div>
          <div>mikschronnie@gmail.com</div>
          <div>https://github.com/myxozoa</div>
        </div>
      </div>
    );
  }
}

export default Contact;
