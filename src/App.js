import React, { Component } from 'react';
import { Header } from "./components/Header/Header";
import { SideNav } from './components/SideNav/SideNav';
import "./App.css";

class App extends Component {

  kids = [{ name: 'Madiha', id: 0 }, { name: 'Noorain', id: 1 }, { name: 'Aalim', id: 2 }];
  sideNav;
  state = {
    selectedKid: this.kids[0],
    isSideNavShown: false
  }

  componentDidMount = () => {
    this.sideNav = document.querySelector('.app-Main-SideNav');
  }


  toggleSideNav = () => {
    if (!this.state.isSideNavShown) {
      this.showSideNav();
    } else {
      this.hideSideNav();
    }
    this.setState((prevState) => {
      return ({
        isSideNavShown: !prevState.isSideNavShown
      });
    })
  }

  showSideNav = () => {
    this.sideNav.classList.add('open');
  }

  hideSideNav = () => {
    this.sideNav.classList.remove('open');
  }

  selectKid = (kid) => {
    this.setState(() => {
      return {
        selectedKid: kid
      }
    })
  }

  render() {
    return (
      <div>
        <Header />
        <main className="app-Main">
          <span className="app-hamburger" onClick={this.toggleSideNav}>{this.state.isSideNavShown ? <span>✖</span> : <span>☰</span>}</span>
          <SideNav kids={this.kids} selectedKid={this.state.selectedKid} onKidSelect={this.selectKid} />
        </main>
        <footer className="app-Footer"><small>KidzBmi &copy; 2017</small></footer>
      </div>
    );
  }
}

export default App;
