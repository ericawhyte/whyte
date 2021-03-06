import React, {Component} from 'react';
import '../css/Nav.css';
import logo from '../img/ew-logo-about.png'

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <nav>
          <a className="logo-anchor" href="/"><img src={logo} /></a>
          <div>
              <a className ="material-icons" href="/about">face</a>
              <ul>
                  <li>About</li>
              </ul>
          </div>
          <div>
              <a className ="material-icons" href="/work">build</a>
              <ul>
                  <li>Work</li>
              </ul>
          </div>
          <div>
              <a className ="material-icons" href="/experiments">lightbulb_outline</a>
              <ul>
                  <li>Experiments</li>
              </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
