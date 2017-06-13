import React, {Component} from 'react';
import '../scss/Header.css';
import Nav from './Nav';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="tile">
          <div className="grout"></div>
        </div>
        <Nav/>
      </div>
    );
  }
}

export default Header;
