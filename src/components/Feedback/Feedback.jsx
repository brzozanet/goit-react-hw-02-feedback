import { Component } from "react";

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState({ good: this.state.good + 1 });
  };

  handleNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  handleBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <div>
          <button onClick={this.handleGood}>Good</button>
          <button onClick={this.handleNeutral}>Neutral</button>
          <button onClick={this.handleBad}>Bad</button>
        </div>
        <h2>Statistics</h2>
        <p>
          Good: <strong>{this.state.good}</strong>
        </p>
        <p>
          Neutral: <strong>{this.state.neutral}</strong>
        </p>
        <p>
          Bad: <strong>{this.state.bad}</strong>
        </p>
        <p>
          Total: <strong>{this.countTotalFeedback()}</strong>
        </p>
        {isNaN(this.countPositiveFeedbackPercentage()) ? null : (
          <p>
            Positive feedback:{" "}
            <strong>{this.countPositiveFeedbackPercentage()}%</strong>
          </p>
        )}
      </>
    );
  }
}
