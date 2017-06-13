import React, {Component} from 'react';
import '../scss/Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <nav>
          <div>
              <a className ="material-icons" href="#">face</a>
              <ul>
                  <li>About</li>
              </ul>
          </div>
          <div>
              <a className ="material-icons" href="#">build</a>
              <ul>
                  <li>Work</li>
              </ul>
          </div>
          <div>
              <a className ="material-icons" href="#">lightbulb_outline</a>
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
