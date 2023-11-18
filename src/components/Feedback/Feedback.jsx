import { Component } from "react";

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood(event) {
    console.log("Good button was clicked!", event);
  }

  handleNeutral(event) {
    console.log("Neutral button was clicked!", event);
  }

  handleBad(event) {
    console.log("Bad button was clicked!", event);
  }

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <button onClick={this.handleGood}>Good</button>
        <button onClick={this.handleNeutral}>Neutral</button>
        <button onClick={this.handleBad}>Bad</button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </>
    );
  }
}
