import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { NavButtonGroup } from '../NavButtonGroup/NavButtonGroup';

export class ChartsView extends Component {
  render() {
    return (
      <div className="app-Main-ChartsView">
        <NavButtonGroup buttonNames={['Height', 'Weight', 'BMI']} horizontal={true} />
      </div>
    )
  }
}