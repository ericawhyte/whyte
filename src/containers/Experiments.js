import React, {Component} from 'react';
import '../css/Experiments.css';

class Experiments extends Component {
  render() {
    return (
      <div className="Experiments">
        <div className="Container">
          <div className="Tiles">
            <a href="/experiments/css-patterns" className="title">
              <p>CSS Patterns</p>
            </a>
            <a href="/experiments/css-speedometer" className="title">
              <p>CSS Speedometer</p>
            </a>
            <a href="/experiments/" className="title">
              <p></p>
            </a>
            <a href="/experiments/parallax-forest" className="title">
              <p>Parallax Forest</p>
            </a>
            <a href="/experiments/snowflake" className="title">
              <p>CSS Snowflake</p>
            </a>
            <a href="/experiments/" className="title">
              <p></p>
            </a>
            <a href="/experiments/" className="title">
              <p></p>
            </a>
            <a href="/experiments/" className="title">
              <p></p>
            </a>
            <a href="/experiments/dance-of-the-stickies" className="title">
              <p>Dance of the Stickies</p>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Experiments;
