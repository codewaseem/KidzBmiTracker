import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class User extends Component {
  static propTypes = {
    user: PropTypes
  }

  render() {
    return (
      <div class="app-UserLogout">
        <span class="app-UserLogout-User">Hello , Waseem </span>
        <span class="app-UserLogout-Logout">Logout</span>
      </div>
    )
  }
}
