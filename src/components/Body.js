import React, {Component} from 'react';
import '../css/Body.css';
import About from './About'
import Work from './Work'
import Experiments from './Experiments'

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <p>Erica Whyte</p>
        <About />
        <Work />
        <Experiments />
      </div>
    );
  }
}

export default Body;
