import React, { Component } from 'react';
import { Header } from "./components/Header/Header";
import { SideNav } from './components/SideNav/SideNav';
import "./App.css";

class App extends Component {

  sideNav;
  state = {
    isSideNavShown : false
  }

  componentDidMount = () => {
    this.sideNav = document.querySelector('.app-Main-SideNav');
  }
  

  openSideNav = () => {
    if (!this.state.isSideNavShown) {
      this.showSideNav();
    } else {
      this.hideSideNav();
    }
    this.setState((prevState)=>{
      return ({
        isSideNavShown : !prevState.isSideNavShown
      });
    })
  }

  showSideNav = () => {
    this.sideNav.classList.add('open');
  }

  hideSideNav = () => {
    this.sideNav.classList.remove('open');
  }

  render() {
    return (
      <div>
        <Header />
        <main className="app-Main">
          <span className="app-hamburger" onClick={this.openSideNav}>{this.state.isSideNavShown? <span>✖</span> : <span>☰</span>}</span>
          <SideNav />
        </main>
        <footer className="app-Footer"><small>KidzBmi &copy; 2017</small></footer>
      </div>
    );
  }
}

export default App;
