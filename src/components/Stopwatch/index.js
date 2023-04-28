// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minuteCount: 0, secondCount: 0}

  onStart = () => {
    this.timerId = setInterval(() => {
      this.setState(prevState => ({
        secondCount: prevState.secondCount + 1,
      }))
    }, 1000)
  }

  onStop = () => {
    clearInterval(this.timerId)
    this.setState(prevState => ({
      secondCount: prevState.secondCount,
      minuteCount: prevState.minuteCount,
    }))
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({
      secondCount: 0,
      minuteCount: 0,
    })
  }

  getStopWatch = () => {
    const {secondCount, minuteCount} = this.state
    if (secondCount === 60) {
      this.setState({
        minuteCount: minuteCount + 1,
        secondCount: 0,
      })
    }

    const second = secondCount > 9 ? secondCount : `0${secondCount}`
    const minute = minuteCount > 9 ? minuteCount : `0${minuteCount}`
    return `${minute}:${second}`
  }

  render() {
    return (
      <div className="bg-container">
        <div className="container">
          <div className="box-container">
            <h1 className="heading">Stopwatch</h1>
            <div className="box">
              <p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                  alt="stopwatch"
                />{' '}
                Timer
              </p>
              <h1 className="timer">{this.getStopWatch()}</h1>
              <div className="btns">
                <button className="start" type="button" onClick={this.onStart}>
                  Start
                </button>
                <button className="stop" type="button" onClick={this.onStop}>
                  Stop
                </button>
                <button className="reset" type="button" onClick={this.onReset}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
