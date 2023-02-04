import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  generateRandomNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)

    this.setState({randomNumber: newRandomNumber})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a Random Number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
