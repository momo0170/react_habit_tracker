import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    console.log('navbar');
    return (
      <header className="navbar">
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.onCount()}</span>
      </header>
    );
  }
}

export default Navbar;
