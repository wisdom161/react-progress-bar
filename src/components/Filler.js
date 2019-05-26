import React, { Component } from 'react';
import '../styles/Filler.css';

class Filler extends Component {
  render() {
    return (
      <div className="filler" style={{ width: `${this.props.percentage}%`}}/>
    )
  }
}

export default Filler;