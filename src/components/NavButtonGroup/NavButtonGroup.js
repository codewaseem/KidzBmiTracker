import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './NavButtonGroup.css';

export class NavButtonGroup extends Component {

  static propTypes = {
    buttonNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired,
    onButtonClicked: PropTypes.func,
    horizontal: PropTypes.bool,
    containerClass: PropTypes.string,
    buttonClass: PropTypes.string,
    containerStyles: PropTypes.object,
    buttonStyles: PropTypes.object,
    selectedButtonClass: PropTypes.string
  }

  static defaultProps = {
    buttonNames: [],
    id: '',
    onButtonClicked: () => { },
    horizontal: false,
    containerClass: 'nav-buttons-container',
    buttonClass: '',
    containerStyles: {},
    buttonStyles: {},
    buttonSelectedClass: 'selected'
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
      <ul
        className={`${this.props.containerClass} 
        ${this.props.horizontal ? this.rowDirectionClass : ''} 
        `}
        style={this.props.containerStyles}>
        {this.props.buttonNames.map((buttonName, index) => {
          return <li
            className={`${this.props.buttonClass} ${this.state.selectedButtonIndex === index ?
              this.props.buttonSelectedClass : ''}`}
            onClick={() => { this.handleClick(index) }}
            style={this.props.buttonStyles}
            key={`${this.props.id}-${index}`} >
            {buttonName}
          </li>
        })}
      </ul>
    );
  }
}