import React, { Component } from 'react';

class Footer extends Component {
  state = {}
  render() {
    return (
      <footer className='container'>
        <p>© {new Date().getFullYear()} Brian Gwaltney</p>
      </footer>
    );
  }
}

export default Footer;