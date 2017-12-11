import React, { Component } from 'react'
import { KidsList } from "../KidsList/KidList";
import { Search } from "../Search/Search";
export class SideNav extends Component {


  kids = this.props.kids

  state = {
    filteredKids: this.kids,
  }

  selectKid = (id) => {
    let newSelectedKid = this.props.selectedKid;
    for (let kid of this.kids) {
      if (kid.id === id) {
        newSelectedKid = kid;
        break;
      }
    }
    this.props.onKidSelect(newSelectedKid);
  }

  handleSearch = (search) => {
    let filtered;
    search = search.toLowerCase().trim();
    if (!search) {
      filtered = this.kids;
    } else {
      filtered = this.kids.filter(kid => {
        return !(kid.name.toLowerCase().search(search) < 0);
      });
    }
    this.setState(() => {
      return {
        filteredKids: filtered
      }
    });

  }

  render() {
    return (
      <div className="app-Main-SideNav">
        <Search onSearch={this.handleSearch} />
        <KidsList kids={this.state.filteredKids} selectedKid={this.props.selectedKid} onKidSelect={this.selectKid} />
      </div>
    )
  }
}
