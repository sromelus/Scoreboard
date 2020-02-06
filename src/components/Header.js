import React, { Component } from 'react';
import Stats from './Stats'
import Stopwatch from './Stopwatch'


class Header extends Component {

  render(){
    const { players, title } = this.props;

    return (
      <header>
      <Stats
      players= { players }
      />

      <h1>{ title }</h1>

      <Stopwatch />
      </header>

    );
  }
}

export default Header;
