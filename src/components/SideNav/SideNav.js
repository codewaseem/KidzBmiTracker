import React, { Component } from 'react'
import { KidsList } from "../KidsList/KidList";
export class SideNav extends Component {
 
  render() {
    return (
      <div className="app-Main-SideNav">
        
        <KidsList />
      </div>
    )
  }
}
