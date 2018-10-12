import React, { Component } from 'react';
import './App.css';

import MyNavbar from './components/MyNavbar';
import Header from './components/Header';
import HeroCollection from './components/HeroCollection';

let heroesData = [
  {
    id: 1,
    name: 'Scene',
    class: 'Bard',
    race: 'Tiefling',
    level: 5,
    pictureUrl:
      'http://www.d20radio.com/main/wp-content/uploads/2017/01/TieflingBard.jpg'
  },
  {
    id: 2,
    name: 'Tourment',
    class: 'Templar',
    race: 'Tiefling',
    level: 4,
    pictureUrl: 'https://i.imgur.com/yWzN0Vj.png'
  }
];

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
        <HeroCollection filter={this.state.filter} heroesData={heroesData} />
      </div>
    );
  }
}
export default App;
