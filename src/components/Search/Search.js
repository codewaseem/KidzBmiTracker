import React, { Component } from 'react'

export class Search extends Component {

  state = {
    search : ''
  }

  onSearch = (evt) => {
    let search = evt.target.value;
    this.setState(() => {
      return {
        search : search
      }
    })
    this.props.onSearch(search);
  }

  render() {
    return (
      <div className="app-Main-SideNav-Search">
        <input  value={this.state.search} placeholder="Search" onChange={this.onSearch} />
      </div>
    );
  }
}
