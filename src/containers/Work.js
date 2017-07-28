import React, {Component} from 'react';
import '../css/Work.css';

class Work extends Component {
  render() {
    return (
      <div className="Work">
        <div className="Container">
          <div className="Tiles">
            <a href="/work/adidas" className="title">
              <p>Adidas</p>
            </a>
            <a href="/work/bcs" className="title">
              <p>Bayer Crop Science</p>
            </a>
            <a href="/work/bfff" className="title">
              <p>Barrie Fall Fishing Festival</p>
            </a>
            <a href="/work/danone" className="title">
              <p>Danone</p>
            </a>
            <a href="/work/gm" className="title">
              <p>General Motors</p>
            </a>
            <a href="/work/mastercard" className="title">
              <p>Mastercard</p>
            </a>
            <a href="/work/td" className="title">
              <p>TD Bank</p>
            </a>
            <a href="/work/vagifem" className="title">
              <p>Vagifem</p>
            </a>
            <a href="/work/wind" className="title">
              <p>Wind</p>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Work;
