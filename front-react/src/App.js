import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import MyNavbar from './components/MyNavbar';
import Header from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import HeroDetails from './components/HeroDetails';
import HeroCollection from './components/HeroCollection';

const DEFAULT_STATE = {
  filter: ''
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...DEFAULT_STATE };
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/heroes/Scene" component={HeroDetails} />
          <Route exact path="/blog" component={Blog} />
          <Route
            exact
            path="/heroes"
            render={props => (
              <HeroCollection {...props} filter={this.state.filter} />
            )}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
