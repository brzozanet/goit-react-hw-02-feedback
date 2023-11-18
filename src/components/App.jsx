import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import css from "./App.module.css";

export class App extends Component {
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
      <div className={css.App}>
        <h1>Please leave feedback</h1>
        <div>
          <button onClick={this.handleGood}>Good</button>
          <button onClick={this.handleNeutral}>Neutral</button>
          <button onClick={this.handleBad}>Bad</button>
        </div>

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
