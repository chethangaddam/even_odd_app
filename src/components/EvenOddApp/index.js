import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <div className="bg-container">
          <h1>Count {count}</h1>
          <p>Count is {text}</p>
          <div>
            <button type="button" onClick={this.onIncrement}>
              Increment
            </button>
          </div>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
