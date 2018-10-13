import React, { Component } from 'react';
import './App.css';

import MyNavbar from './components/MyNavbar';
import Header from './components/Header';
import HeroCollection from './components/HeroCollection';

const DEFAULT_STATE = {
  filter: ''
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;
    this.changeFilterValue = this.changeFilterValue.bind(this);
  }

  changeFilterValue(newValue) {
    this.setState({ filter: newValue });
  }

  render() {
    return (
      <div className="App">
        <MyNavbar onChangeFilterValue={this.changeFilterValue} />
        <Header />
        <HeroCollection filter={this.state.filter} />
      </div>
    );
  }
}
export default App;
