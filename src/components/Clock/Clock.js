import React from 'react';
import propTypes from 'prop-types';


export default class Clock extends React.Component {

  state = {
    time: new Date()
  }

  propTypes = {
    id: propTypes.string,
    styles: propTypes.object,
    classes: propTypes.array
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }

  tick = () => {
    this.setState(() => {
      return {
        time: new Date()
      }
    });
  }

  render() {
    return (
      <span
        key={this.props.id}
        className={this.props.classes && this.props.classes.join(' ')}
        styles={this.props.styles}
      >
        {this.state.time.toLocaleTimeString()}
      </span>
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

}