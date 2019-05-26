import React, { Component } from 'react';
import './styles/App.css';
import ProgressBar from './components/ProgressBar';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      percentage: 0
    }
  }

  render() {
    return(
      <div className="app">
        <h1 id="title">My React Progress Bar!</h1>
        <ProgressBar percentage={this.state.percentage}/>
      </div>
    )
  }
}

export default App;