import React, {Component} from 'react';
import '../css/Home.css';
import logo from '../img/ew-logo-about.png'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <p>Erica Whyte</p>
        <img src={logo} />
        <p>Front End Developer</p>
      </div>
    );
  }
}

export default Home;
