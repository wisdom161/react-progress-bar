import React, { Component } from 'react';
import './styles/App.css';
import ProgressBar from './components/ProgressBar';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      percentage: 0
    }
    this.fillBar = this.fillBar.bind(this)
  }

  fillBar() {
    let atPercent = 0;
    const interval = setInterval(() => {
      atPercent += 10;
      console.log('this is at percent', atPercent)
      this.setState(() => {
        return {
          percentage: atPercent
        }
      });
      if (atPercent >= 100) {
        clearInterval(interval);
      }
    }, 200)
  }

  render() {
    return(
      <div className="app">
        <h1 id="title">My React Progress Bar</h1>
        <ProgressBar percentage={this.state.percentage}/>
        <button onClick={this.fillBar}>Start</button>
      </div>
    )
  }
}

export default App;