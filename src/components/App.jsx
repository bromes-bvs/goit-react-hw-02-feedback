import { Component } from 'react';
import StyledButton from './Button.styled';
import Controls from './Controls.styled';
import StyledTitle from './Title.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelFeedback(type) {
    this.setState({ [type]: this.state[type] + 1 });
  }

  render() {
    return (
      <section>
        <StyledTitle>Please leave feedback</StyledTitle>
        <Controls className="Feedback__controls">
          <StyledButton
            type="button"
            onClick={() => this.handelFeedback('good')}
          >
            Good
          </StyledButton>
          <StyledButton
            type="button"
            onClick={() => this.handelFeedback('neutral')}
          >
            Neutral
          </StyledButton>
          <StyledButton
            type="button"
            onClick={() => this.handelFeedback('bad')}
          >
            Bad
          </StyledButton>
        </Controls>
        <StyledTitle>Statistics</StyledTitle>
        <p className="Feedback__item">God : {this.state.good}</p>
        <p className="Feedback__item">Neutral : {this.state.neutral}</p>
        <p className="Feedback__item">Bad : {this.state.bad}</p>
      </section>
    );
  }
}
