import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './NavButtonGroup.css';

export class NavButtonGroup extends Component {
  
    static propTypes = {
      buttonNames: PropTypes.arrayOf(PropTypes.string).isRequired,
      id: PropTypes.string.isRequired,
      onButtonClicked: PropTypes.func,
      horizontal: PropTypes.bool
    }
  
    static defaultProps = {
      buttonNames: [],
      id: '',
      onButtonClicked: () => { },
      horizontal: false
    }
  
    rowDirectionClass = 'buttons-row-direction';
  
    state = {
      selectedButtonIndex: 0
    }
  
    handleClick = (index) => {
      this.setState(() => {
        return {
          selectedButtonIndex: index
        }
      });
      this.props.onButtonClicked(index);
    }
  
    render() {
      return (
        <ul className={`nav-buttons-container ${this.props.horizontal ? this.rowDirectionClass : ''}`}>
          {this.props.buttonNames.map((buttonName, index) => {
            return <li className={this.state.selectedButtonIndex === index ? 'selected' : ''} onClick={() => { this.handleClick(index) }} key={`${this.props.id}-${index}`}>{buttonName}</li>
          })}
        </ul>
      );
    }
  }