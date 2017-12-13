import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { User } from "../User/User";
import { LoginSignUp } from "../LoginSignUp/LoginSignUp";

export class Header extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
  }

  static defaultProps= {
    isLoggedIn : false
  }

  render() {
    return (
      <header className="app-Header">
      <span className="app-hamburger" onClick={this.props.toggleSideNav}>
        <span>{this.props.isSideNavShown ? '✖' : '☰'}</span>
      </span>      
        <h1 className="app-Header-heading">KidzBMI Tracker</h1>
        <div className="app-Header-side">
          {this.props.isLoggedIn ? <User /> : <LoginSignUp />}
        </div>
      </header>
    )
  }
}
