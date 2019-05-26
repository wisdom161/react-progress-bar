import React, { Component } from 'react';
import '../styles/ProgressBar.css';
import Filler from './Filler';

class ProgressBar extends Component {
  render() {
    return (
      <div className="progress-bar">
        <Filler percentage={this.props.percentage}/>
      </div>
    )
  }
}

export default ProgressBar;